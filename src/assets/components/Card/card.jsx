import './card.css'

export function Card({ data, setSGame, vipAccess=false, checkout }) {



    const {
        game = "",
        vip = false,
        profit = 15352,
        analyst = "José D.",
        onlinePlayers = 100,
        gameImage = "https://i.postimg.cc/NFm7g5YQ/spacemen-vc.png",
        analystPfp = "https://i.postimg.cc/brJDBW51/icon-Analist.png"
    } = data || {};  // Default to an empty object if data is null or undefined

    // Format the profit



    const formattedProfit = profit < 1000 ? profit.toString() : (profit / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });

    const handleCardClick = () => {

        if (data.vip) {
            if (vipAccess) {
                setSGame(data);
            }
            else {
                window.open(checkout, "_blank")
            }
        }
        else {
            setSGame(data);
        }

    };

    return (
        <>
            <div className={vipAccess ? 'cr-stroke' : (vip ? 'cr-stroke cardDenied' : 'cr-stroke ')}>
                <div className="cardRoom">
                    <div className="status-players">
                        <div className="status-circle"></div>
                        <p>{onlinePlayers} jogadores</p>
                    </div>

                    <div className="cr-userProfile">
                        <img src={analystPfp} alt="Analyst Profile" />
                        <h1>{analyst}</h1>
                    </div>

                    <div className="cr-profit">
                        <h1>R$ {formattedProfit}</h1>
                        <p>Lucro Hoje</p>
                    </div>

                    <img src={gameImage} alt="Game" className="gameImage" />

                    <button className="joinBtn bg-gradient" onClick={handleCardClick}>ENTRAR</button>
                </div>
            </div>
        </>
    );
}
