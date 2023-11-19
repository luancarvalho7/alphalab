import { useState } from 'react'
import { Scrollbar } from '../../../components/scrollbar/scrollbar'
import './bonus.css'
export function Bonus({ img }) {


    const [iFrameOn, setiFrameOn] = useState(false)
    const headerStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the background image
        // Add more styles as needed
    };


    return (
        <section id="bonusPage">
            <div className="iframe-overlay"></div>
            <header className="topbgHeader bgHeader" style={headerStyle}>
            <div className="headertransition"></div>

            </header>
            <div className="imgheaderBlock"></div>

            <div className="bonusContent borderSpacing">
                <img src={"https://i.postimg.cc/3RW6RXxX/bullsbet.webp"} className="bonusHouse"></img>
                <div className="bh-txt">
                    <h3 className='housetitle txt-gradient'>BullsBet</h3>
                    <h2>Única plataforma onde os
                        analistas trabalham e o BUG Funciona!</h2>
                </div>
                <button className='bg-gradient bullsCta' onClick={() => setiFrameOn(true)} >RESGATAR BÔNUS</button>
            </div>
            <div className="warningstroke">
                <div className="warning">

                    {/* svg */}
                    <p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                            <path d="M15.7857 10.6658L9.92995 0.794335C9.78362 0.552489 9.57472 0.351962 9.32396 0.21263C9.07319 0.0732984 8.78927 0 8.50033 0C8.2114 0 7.92747 0.0732984 7.67671 0.21263C7.42595 0.351962 7.21705 0.552489 7.07072 0.794335L1.21499 10.6658C1.0742 10.8997 1 11.1658 1 11.4367C1 11.7076 1.0742 11.9737 1.21499 12.2076C1.35945 12.4509 1.56799 12.6525 1.81922 12.7917C2.07045 12.931 2.35533 13.0028 2.64461 12.9999H14.3561C14.6451 13.0026 14.9297 12.9306 15.1807 12.7914C15.4317 12.6522 15.64 12.4507 15.7843 12.2076C15.9253 11.9738 15.9998 11.7078 16 11.4369C16.0002 11.1659 15.9263 10.8998 15.7857 10.6658ZM14.8569 11.6869C14.8059 11.7715 14.7326 11.8413 14.6446 11.8893C14.5566 11.9372 14.457 11.9616 14.3561 11.9599H2.64461C2.54368 11.9616 2.44411 11.9372 2.35609 11.8893C2.26808 11.8413 2.19479 11.7715 2.14374 11.6869C2.0975 11.6109 2.07311 11.5243 2.07311 11.436C2.07311 11.3478 2.0975 11.2611 2.14374 11.1851L7.99947 1.31368C8.05155 1.22955 8.12517 1.15994 8.21317 1.11161C8.30117 1.06328 8.40056 1.03788 8.50167 1.03788C8.60278 1.03788 8.70217 1.06328 8.79018 1.11161C8.87818 1.15994 8.9518 1.22955 9.00388 1.31368L14.8596 11.1851C14.9054 11.2614 14.9294 11.3481 14.9289 11.4364C14.9284 11.5246 14.9036 11.6112 14.8569 11.6869ZM7.96465 7.79997V5.19999C7.96465 5.06208 8.02109 4.92982 8.12155 4.8323C8.22201 4.73478 8.35826 4.68 8.50033 4.68C8.64241 4.68 8.77866 4.73478 8.87912 4.8323C8.97958 4.92982 9.03602 5.06208 9.03602 5.19999V7.79997C9.03602 7.93788 8.97958 8.07014 8.87912 8.16766C8.77866 8.26518 8.64241 8.31996 8.50033 8.31996C8.35826 8.31996 8.22201 8.26518 8.12155 8.16766C8.02109 8.07014 7.96465 7.93788 7.96465 7.79997ZM9.30386 10.1399C9.30386 10.2942 9.25674 10.445 9.16844 10.5733C9.08015 10.7016 8.95466 10.8015 8.80783 10.8606C8.66101 10.9196 8.49944 10.935 8.34357 10.9049C8.1877 10.8749 8.04453 10.8006 7.93215 10.6915C7.81978 10.5824 7.74325 10.4434 7.71224 10.2921C7.68124 10.1408 7.69715 9.98398 7.75797 9.84145C7.81879 9.69893 7.92178 9.57711 8.05392 9.4914C8.18606 9.4057 8.34141 9.35995 8.50033 9.35995C8.71344 9.35995 8.91782 9.44213 9.06852 9.58841C9.21921 9.73468 9.30386 9.93308 9.30386 10.1399Z" fill="url(#paint0_linear_170_3)" />
                            <defs>
                                <linearGradient id="paint0_linear_170_3" x1="8.5" y1="0" x2="8.5" y2="13" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFC700" />
                                    <stop offset="1" stopColor="#FF9900" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <strong>Aviso:</strong> Recomendamos um depósito
                        acima de <strong>30€</strong> para uma <strong> maior assertividade </strong>
                        dentro do nosso sistema.</p>
                </div>
            </div>
            <iframe src={"https://go.aff.bullsbetaffiliate.com/50v6gzg5"} id='bonusiFrame' className={iFrameOn ? "" : "if-disabled"}></iframe>

        </section >
    )
}