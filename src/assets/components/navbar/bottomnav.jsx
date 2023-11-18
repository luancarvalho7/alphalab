import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './bottomnav.css'

const VipDmd = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30" fill="none">
            <path d="M28.4767 11.8793L21.9142 4.3793C21.8703 4.32908 21.8163 4.28879 21.7557 4.2611C21.6951 4.23342 21.6292 4.21898 21.5626 4.21875H8.43761C8.37096 4.21898 8.30513 4.23342 8.24451 4.2611C8.18388 4.28879 8.12986 4.32908 8.08604 4.3793L1.52354 11.8793C1.44724 11.9667 1.40608 12.0794 1.40803 12.1954C1.40997 12.3114 1.45489 12.4226 1.53409 12.5074L14.6591 26.5699C14.7029 26.6168 14.7559 26.6541 14.8148 26.6796C14.8736 26.7051 14.9371 26.7183 15.0013 26.7183C15.0654 26.7183 15.1289 26.7051 15.1878 26.6796C15.2466 26.6541 15.2996 26.6168 15.3435 26.5699L28.4685 12.5074C28.5473 12.4223 28.5918 12.311 28.5933 12.1949C28.5949 12.0789 28.5533 11.9664 28.4767 11.8793ZM9.05753 12.6563L13.636 24.1008L2.95323 12.6563H9.05753ZM19.9325 12.6563L15.0001 24.9879L10.0677 12.6563H19.9325ZM10.3126 11.7188L15.0001 5.46914L19.6876 11.7188H10.3126ZM20.9427 12.6563H27.047L16.3642 24.1008L20.9427 12.6563ZM27.0915 11.7188H20.8595L15.9376 5.15625H21.3493L27.0915 11.7188ZM8.65089 5.15625H14.0626L9.14073 11.7188H2.9087L8.65089 5.15625Z" fill="white" />
        </svg>

    )
}

const AprendaJogar = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.1287 5.11893L4.41121 9.40643C2.78871 10.3077 2.78871 12.6402 4.41121 13.5414L12.1287 17.8289C13.9137 18.8202 16.085 18.8202 17.8712 17.8289L25.5887 13.5414C27.2112 12.6402 27.2112 10.3077 25.5887 9.40643L17.8712 5.11893C16.085 4.12768 13.915 4.12768 12.1287 5.11893Z" stroke="white" strokeWidth="1.77375" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.48877 15.25V20.155C7.48877 21.3413 8.08252 22.4475 9.06877 23.1037L11.0775 24.44C13.4538 26.02 16.5463 26.02 18.9213 24.44L20.9301 23.1037C21.9176 22.4475 22.5101 21.34 22.5101 20.155V15.25" stroke="white" strokeWidth="1.77087" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
}
const Game = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M7.5 12.5H11.25" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.375 10.625V14.375" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24.5617 6.72016C18.3936 4.42661 11.6066 4.42661 5.43845 6.72016C4.35573 7.15383 3.54325 8.07585 3.24927 9.20455C2.21535 13.6662 2.25159 18.3091 3.35503 22.7541C3.57857 23.5586 4.1885 24.1986 4.98128 24.4606L6.40503 24.935C7.031 25.1464 7.71298 24.8317 7.95869 24.2185C8.45928 22.967 9.26844 20.944 9.71052 19.839C9.90012 19.3655 10.3595 19.0556 10.8696 19.0571H19.1302C19.6414 19.0571 20.1011 19.3682 20.2909 19.8429L22.0388 24.2132C22.2847 24.8277 22.9669 25.1443 23.5948 24.9349L25.0191 24.46C25.8118 24.198 26.4216 23.558 26.6451 22.7536C27.7484 18.3089 27.7846 13.6661 26.7508 9.2046C26.4568 8.07589 25.6444 7.15384 24.5617 6.72016Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9375 12.5003C17.9374 12.621 17.8395 12.7188 17.7188 12.7188C17.598 12.7187 17.5001 12.6208 17.5 12.5C17.5 12.3793 17.5977 12.2814 17.7185 12.2813C17.7766 12.2812 17.8324 12.3042 17.8735 12.3453C17.9146 12.3864 17.9376 12.4422 17.9375 12.5003Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.5 12.5003C22.4998 12.621 22.4019 12.7188 22.2811 12.7188C22.1604 12.7187 22.0625 12.6208 22.0625 12.5C22.0624 12.3793 22.1601 12.2814 22.2809 12.2813C22.339 12.2812 22.3948 12.3042 22.4359 12.3453C22.477 12.3864 22.5 12.4422 22.5 12.5003Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.0003 14.5625C20.121 14.5626 20.2187 14.6606 20.2187 14.7814C20.2187 14.9021 20.1209 15 20.0001 15C19.8794 15 19.7814 14.9023 19.7813 14.7815C19.7811 14.7234 19.8043 14.6676 19.8454 14.6266C19.8864 14.5855 19.9421 14.5624 20.0003 14.5625Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.0003 10C20.121 10.0002 20.2187 10.0981 20.2187 10.2189C20.2187 10.3396 20.1209 10.4375 20.0001 10.4375C19.8794 10.4376 19.7814 10.3398 19.7813 10.219C19.7811 10.1609 19.8043 10.1052 19.8454 10.0641C19.8864 10.023 19.9421 9.99993 20.0003 10Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
}

const LiveOperacoes = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.5 17.5V5C27.5 3.61929 26.3807 2.5 25 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V17.5" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 13.5616V8.93894C12.5 8.64861 12.6549 8.38033 12.9064 8.23522C13.1579 8.09012 13.4676 8.09022 13.7191 8.23549L17.7191 10.5467C17.9702 10.6919 18.125 10.9601 18.125 11.2502C18.125 11.5404 17.9702 11.8085 17.7191 11.9537L13.7191 14.265C13.4677 14.4102 13.1579 14.4104 12.9065 14.2652C12.655 14.1201 12.5 13.8519 12.5 13.5616Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.75 27.5V26.25C8.75 25.5596 8.19035 25 7.5 25H3.75C3.05965 25 2.5 25.5596 2.5 26.25V27.5" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.5 27.5V26.25C27.5 25.5596 26.9404 25 26.25 25H22.5C21.8096 25 21.25 25.5596 21.25 26.25V27.5" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.125 27.5V26.25C18.125 25.5596 17.5654 25 16.875 25H13.125C12.4346 25 11.875 25.5596 11.875 26.25V27.5" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.125 21.875V20.625C13.125 19.9346 12.5654 19.375 11.875 19.375H8.125C7.43465 19.375 6.875 19.9346 6.875 20.625V21.875" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.5 21.875V20.625C22.5 19.9346 21.9404 19.375 21.25 19.375H17.5C16.8096 19.375 16.25 19.9346 16.25 20.625V21.875" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
}
const ResgateBonus = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 11.2437V10" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 18.7563V20.0001" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.8324 17.8488C13.1562 18.3788 13.7074 18.745 14.3749 18.745H14.9999H15.7437C16.7124 18.745 17.4974 17.96 17.4974 16.9913C17.4974 16.1875 16.9512 15.485 16.1699 15.2912L13.8299 14.7037C13.0499 14.5075 12.5024 13.8062 12.5024 13.0037C12.5024 12.035 13.2874 11.25 14.2562 11.25H14.9999H15.6249C16.2899 11.25 16.8412 11.615 17.1662 12.1413" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4.36875 16.8302L5.8625 18.7852L6.185 21.2189C6.36375 22.5689 7.425 23.6314 8.775 23.8114L11.215 24.1377L13.1687 25.6302C14.25 26.4564 15.7487 26.4564 16.83 25.6302L18.785 24.1364H18.7825L21.2175 23.8139C22.5675 23.6352 23.63 22.5739 23.81 21.2239L24.135 18.7839C24.135 18.7839 24.89 17.7964 25.6288 16.8302C26.455 15.7489 26.4538 14.2502 25.6288 13.1689L24.1375 11.2139L23.815 8.78018C23.6363 7.43018 22.575 6.36768 21.225 6.18768L18.7838 5.86268L16.83 4.37018C15.7487 3.54393 14.25 3.54393 13.1687 4.37018L11.2137 5.86268H11.2162L8.78125 6.18643C7.43125 6.36518 6.36875 7.42643 6.18875 8.77643L5.8625 11.2164C5.8625 11.2164 5.1075 12.2039 4.36875 13.1702C3.54375 14.2502 3.54375 15.7502 4.36875 16.8302Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)

}


export function BottomNav({ v33, vipAccess = false, extrapages, checkout}) {

    console.log(extrapages)

    const navigate = useNavigate()
    const location = useLocation()
    const selected = location.pathname

    const switchPage = (path) => {
        console.log(vipAccess)
        navigate(path);      // Navigate to the new route
    };

    const openCheckout = () => {

    }

    useEffect(()=>{
        console.log(vipAccess)
    })

    return (
        <>
            <nav className="bottomNav">
                <div className="bn-content">
                    <button
                        onClick={() => switchPage(vipAccess ? '/modevip'  : '/')}  
                        className={`bn-btn ${selected === '/' || selected === '/modevip' ? 'bn-selected' : ''}`}
                    >
                        <Game />
                        <h3>Salas</h3>
                    </button>
                   { extrapages.bonus && <button
                        onClick={() => switchPage('/bonus')}
                        className={`bn-btn ${selected === '/bonus' ? 'bn-selected' : ''}`}
                    >
                        <ResgateBonus />
                        <h3>Bônus</h3>
                    </button>}
                    { extrapages.lives && <button
                        onClick={() => switchPage('/lives')}

                        className={`bn-btn ${selected === '/lives' ? 'bn-selected' : ''}`}
                    >
                        <LiveOperacoes />
                        <h3>Lives</h3>
                    </button>}
                  { extrapages.tutorial &&  <button
                        onClick={() => switchPage('/tutorial')}

                        className={`bn-btn ${selected === '/tutorial' ? 'bn-selected' : ''}`}
                    >
                        <AprendaJogar />
                        <h3>Tutorial</h3>
                    </button>}


                    {vipAccess ? '' :
                        <button
                            className="bn-btn"
                        >
                            <a href={checkout} target="_blank" rel="noopener noreferrer">
                                <VipDmd />
                                <h3>Seja VIP</h3>
                            </a>
                        </button>}
                </div>
            </nav>
        </>
    );
}