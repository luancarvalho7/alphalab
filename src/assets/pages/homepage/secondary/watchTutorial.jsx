import { useEffect } from "react"
import { useState } from "react"

export function WatchTutorial({ aula, index, changeVideoByButtons, aulasLenght }) {
    const [currentIndex, setCurrentIndex] = useState(index);

    useEffect(() => {
        setCurrentIndex(index);
    }, [index]);

    const handlePreviousClick = () => {
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            changeVideoByButtons(newIndex);
        }
    };

    const handleNextClick = () => {
        const newIndex = currentIndex + 1;
        if (newIndex < aulasLenght) {
            changeVideoByButtons(newIndex);
        }
    };


    return (
        <section className="WatchVideo">
            <iframe src={aula.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={1}></iframe>
            <div className="wv-info borderSpacing">
                <h1>{aula.Title}</h1>
                <h2>{aula.Description}</h2>
            </div>
            <div className="wv-buttons borderSpacing">


                <button
                    className={currentIndex > 0 ? "wvBtn" : "wvBtn wvDisabled"}
                    onClick={handlePreviousClick}>
                    AULA ANTERIOR
                </button>

                <button
                    className={currentIndex === aulasLenght - 1 ? "wvBtn wvDisabled" : "wvBtn  bg-gradient"}
                    onClick={handleNextClick}>
                    PRÓXIMA AULA
                </button>
            </div>
        </section>
    )
}