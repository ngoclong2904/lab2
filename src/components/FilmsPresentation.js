import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function FilmsPresentation({ listOfFilms }) {
    const useLargeScreenSize = () => {
        const [largeScreen, setLargeScreen] = useState(false)
        useEffect(() => {
            console.log("Screen is large: " + window.matchMedia("(min-width: 992px)").matches)
            setLargeScreen(window.matchMedia("(min-width: 992px)").matches)
        })
        return largeScreen
    }
    const largeScreen = useLargeScreenSize()
    const { theme } = useContext(ThemeContext)
    const [curFilm, setCurFilm] = useState([])
    return (
        <div className="container" style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.textColor }}>
            {
                listOfFilms.map((film) => (
                    <div className="column" key={film.id}>
                        <div className="card">
                            <div className="poster">
                                <img src={film.Image} alt="" />
                            </div>
                            <div className="info"
                                style={
                                    largeScreen
                                        ?
                                        { backgroundColor: theme.mutedBackgroundColor, color: theme.textColor }
                                        :
                                        { backgroundColor: theme.seethroughBackgroundColor, color: theme.textColor }
                                }>
                                <h2>{film.Title}</h2>
                                <div className="detail">
                                    <p className="year" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.textColor }}>{film.Year}</p>
                                    <p className="nation">{film.Nation}</p>
                                    <p className="showPopup">
                                        <button onClick={() => {
                                            setCurFilm(film);
                                            const popup = document.getElementById("popupContainer1");
                                            popup.style.display = "block";
                                        }} style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.textColor }}>
                                            Detail
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div id="popupContainer1" className="overlay">
                <div className="popupContent">
                    <span className="close" onClick={() => {
                        const popup = document.getElementById("popupContainer1");
                        popup.style.display = "none";
                    }}>
                        &times;
                    </span>
                    <div className="card">
                        <div className="poster">
                            <img src={curFilm.Image} alt="" />
                        </div>
                        <div className="info" 
                            style={
                                largeScreen
                                ?
                                { backgroundColor: theme.mutedBackgroundColor, color: theme.textColor }
                                :
                                { backgroundColor: theme.overlayBackgroundColor, color: theme.textColor }
                            }>
                            <h2>{curFilm.Title}</h2>
                            <div className="detail">
                                <p className="year" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.textColor }}>{curFilm.Year}</p>
                                <p className="nation">{curFilm.Nation}</p>
                                <p className="sypnosis">{curFilm.Sypnosis}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                window.onclick = (event) => {
                    const popup = document.getElementById("popupContainer1");
                    if (event.target === popup) {
                        popup.style.display = "none";
                    }
                }
            }
        </div>
    );
}