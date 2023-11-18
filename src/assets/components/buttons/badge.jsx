import './badge.css';

export function Badge({ img, txt = "", extra = 0, setCategory }) {

    let extraBadge;

    if (extra === 1) {
        extraBadge = (
            <div className="extraBadge eb-live">
                <p>AO VIVO</p>
            </div>
        );
    } else if (extra === 2) {
        extraBadge = (
            <div className="extraBadge eb-disabled">
                <p>EM BREVE</p>
            </div>
        );
    }

    const onClickBtn = ()=>{

        if(extra!=2){
            setCategory(txt)

        }
    }

    return (
        <div className={ extra===2 ? `btnBadge bg-gradientwhite`:  `btnBadge bg-gradient` } onClick={onClickBtn}>
            <div className="bd-content">
                <img src={img} alt="" />
                <h1>{txt}</h1>
            </div>
            {extraBadge}
        </div>
    );
}
