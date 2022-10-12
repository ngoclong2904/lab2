import { createContext, useEffect, useState } from "react"
import { themes } from "../shared/Themes"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)
    useEffect(() => {
        const isDark = localStorage.getItem("dark") === "true"
        setDark(isDark)
    }, [dark])

    const [mode, setMode] = useState(dark ? "Theatre Mode" : "Normal Mode");
    const useModeTitle = (s) => {
        useEffect(() => {
            document.title = "Film Showcase - " + localStorage.getItem("mode")
        })
    }
    useModeTitle(mode)

    const theme = dark ? themes.dark : themes.light

    const toggle = () => {
        const isDark = !dark
        localStorage.setItem("dark", JSON.stringify(isDark))
        setDark(isDark)

        const curMode = isDark ? "Theatre Mode" : "Normal Mode"
        localStorage.setItem("mode", curMode)
        setMode(curMode)
    }

    return (
        <ThemeContext.Provider value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }