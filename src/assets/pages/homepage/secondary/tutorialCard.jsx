export function TutorialCard({aula, setVideoSpace, index}) {

    function onCardClick(){
        setVideoSpace({
            active: true,
            data: aula,
            index: index
        })

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }, 1000)

    }
    return (
        <div className="tutorialCard"
        onClick={onCardClick}
        style={{
            background: `url(${aula.Image})`, backgroundSize: "cover",
        }}>
        </div>
    )
}