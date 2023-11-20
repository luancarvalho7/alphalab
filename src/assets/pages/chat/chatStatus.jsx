export function ChatStatus({
    profit = 15352,
    analyst = "José D.",
    onlinePlayers = 100,
    analystPfp = "https://i.postimg.cc/brJDBW51/icon-Analist.png"
}) {


    const formattedProfit = profit < 1000 ? profit : (profit / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });

    return (
        <div className="ChatStatus">
            <div className="cr-left">
                <div className="cr-userProfile">
                    <img src={analystPfp} alt="User Profile" />
                    <h1>{analyst}</h1>
                </div>

                <div className="status-players">
                    <div className="status-circle"></div>
                    <p>{onlinePlayers} jogadores</p>
                </div>
            </div>

            <div className="chatProfit">
                <h1>R${formattedProfit}</h1>
                <p>Lucro Hoje</p>
            </div>
        </div>
    )
}
