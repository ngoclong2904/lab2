import React, { useContext} from "react"
import { ThemeContext } from "./ThemeContext"
export default function Navigation() {
    const { dark, theme, toggle } = useContext(ThemeContext)
    return (
        <div style={{ position: "relative" }}>
            <nav style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.textColor }}>
                <ul>
                    <li style={{ backgroundColor: theme.focusedBackgroundColor }}><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div>
                <span className="switch-mode" onClick={toggle}
                    style={{
                        backgroundColor: theme.primaryBackgroundColor,
                        color: theme.textColor,
                        outline: "none"
                    }} data-testid="toggle=theme-btn">
                    Switch Nav to {dark ? "Light" : "Dark"} Mode
                </span>
            </div>
        </div>
    )
}