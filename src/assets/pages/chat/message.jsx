import React, { useEffect, useState } from 'react';

export function Message({ analystPfp, analyst, message, hour }) {
    const [dotCount, setDotCount] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [displayMessage, setDisplayMessage] = useState(message);

    useEffect(() => {
        let timer;
        if (message === 'typing') {
            timer = setInterval(() => {
                setDotCount((prevCount) => (prevCount + 1) % 4);
            }, 500);
        }
        return () => {
            clearInterval(timer);
        };
    }, [message]);

    useEffect(() => {
        setIsActive(false);
        const timer = setTimeout(() => {
            setDisplayMessage(message);
            setIsActive(true);
        }, 300); // 300ms is the time it takes for the CSS transition to complete.
        return () => {
            clearTimeout(timer);
        };
    }, [message]);

    const renderDots = () => {
        let dots = '';
        for (let i = 0; i < dotCount; i++) {
            dots += '.';
        }
        return dots;
    };

    return (
        <div id="message" className={`fade-pop ${isActive ? 'active' : ''}`}>
            <img src={analystPfp} alt="" id="m-analystPfp" />
            <div id="m-content">
                <div id="m-userinfo">
                    <h1 className="greenGradientText">{analyst}</h1>
                    <h3>+55 31 9**** ****</h3>
                </div>
                <p id="m-txtcontent">
                    {displayMessage === 'typing' ? (
                        <span className="typing-container">
                            Digitando<span className="dots">{renderDots()}</span>
                        </span>
                    ) : (
                        <span dangerouslySetInnerHTML={{ __html: displayMessage }}></span>
                    )}
                </p>

                <h3 id="m-clock">{hour}</h3>
            </div>
        </div>
    );
}
