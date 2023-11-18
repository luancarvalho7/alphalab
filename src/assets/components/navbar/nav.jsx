import './nav.css'

import { useNavigate } from 'react-router-dom'


export function Nav({ v33, vipAccess = false, logo, checkout }) {

    const navigate = useNavigate()
    function navigateHome() {

        if (vipAccess ) {
            navigate('/modevip')
        }
        else {
            navigate('/')
        }
    }


    return <header className="headerContainer">
        <div className="logoContainer">
            <img
                src={logo}
                alt="logo"
                width={120}
                sizes="100vw"
                style={{
                    objectFit: "contain",
                }}
                className="logoImage"

                onClick={navigateHome}
            />
        </div>{
            vipAccess ? <button className="vipButton bg-gradient">  Membro VIP  </button> : <a href={checkout} target="_blank" rel="noopener noreferrer">
                <button className="vipButton bg-gradient">  Acesso VIP    </button>
            </a>

        }





    </header >
}

