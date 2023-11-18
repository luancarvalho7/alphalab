import './chat.css';
import { useLocation, useNavigate } from 'react-router-dom';

import { ChatStatus } from './chatStatus';
import { Message } from './message';
import { useState, useEffect } from 'react';

import { Nav } from '../../components/navbar/nav';
import { Scrollbar } from '../../components/scrollbar/scrollbar';
import { BottomNav } from '../../components/navbar/bottomnav';

import seedrandom from "seedrandom";


export function ChatPage({
    game = "",
    analystPfp = "https://i.postimg.cc/brJDBW51/icon-Analist.png",
    analyst = "John Doe",
    profit = 999999,
    onlinePlayers = 999,
    affLink = "https://go.aff.bullsbetaffiliate.com/64ep1444?source_id=app",
    v33 = false,
    vipAccess = false,
    lastDayProfit = 0,
    currentDayProfit = 0,
    inicio = false,
    home = false
}) {

    const [msgHour, setMsgHour] = useState('')
    const [seed, setSeed] = useState(`${game}`)
    const rng = seedrandom(seed)

    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/v33' ||  location.pathname === '/inicio' ||  location.pathname === '/home' ||  location.pathname === '/modevip' ||  location.pathname === '/viplion' && hasNavigatedAway.current) {
            hasNavigatedAway.current = false;
        }

    }, [location]);

    useEffect(() => {

        if (game == null) {

            console.log(`xxxxxxx ${home} , ${vipAccess} `)
            if (vipAccess && inicio==false && home==false) {
                navigate('/viplion')
            }
            else if (v33) {
                navigate('/v33')
            }
            else if (inicio && vipAccess){
                navigate('/vipsb')
            }
            else if (home && vipAccess){
                navigate('/modevip')
            }
            else if (inicio && vipAccess==false){
                navigate('/inicio')
            }
            else if (home && vipAccess==false){
                navigate('/home')
            }
            else {
                navigate('/')
            }

        }
    }, [])

    /*DATA*/
    const [message, setMessage] = useState(null);

    const data = {
        analysis: ["To buscando novos sinais glr", "to puxando novos sinais, aguenta aí fml"],
        announcing: ["Esse é bom em familia, segue ai!", "La vem a boa, toma ai!"],
    };



    const today = new Date();
    const hour = `${today.getHours()}:${today.getMinutes().toString().padStart(2, '0')}`;




    const typingSpeed = 1000 / 8.5; // milliseconds per character

    const getCrashSignal = (mode = 0) => {
        let results = [];

        const maxValues = {
            0: 1.5,
            1: 2.0,
            2: 8.0,
        };
        const max = maxValues[mode];

        const generateNumber = () => {
            let num;
            do {
                num = rng() * max;
            } while (num <= 1.17);
            return num.toFixed(2);
        };

        for (let i = 0; i < 3; i++) {
            results.push(`Retirar em <strong class="greenGradientText"> ${generateNumber()}x </strong>`);
        }

        // 35% chance to skip a round
        if (rng() < 0.35) {
            results[1] = 'Pular Rodada';
        }

        return results.join('<br/>');
    };
    const getMinesSignal = (quanty) => {
        let newGrid = Array(5).fill(Array(5).fill('🟦')); // Resetting the grid
        newGrid = JSON.parse(JSON.stringify(newGrid)); // Deep copy
        let count = 0;
        const positions = [];

        while (count < quanty) {
            const x = Math.floor(rng() * 5);
            const y = Math.floor(rng() * 5);
            const position = `${x}-${y}`;

            if (!positions.includes(position)) {
                newGrid[x][y] = '⭐';
                positions.push(position);
                count++;
            }
        }

        // Convert the grid to a string (or HTML)
        const gridString = newGrid.map(row => row.join('')).join('<br/>');
        return gridString;
    };
    const getFortuneSignal = () => {
        const random = () => Math.floor(rng() * (10 - 3) + 3);

        const normal = random();
        const turbo = random();

        return `entrem <strong class="greenGradientText">${normal}x normal</strong>  e <strong class="greenGradientText">${turbo}x turbo</strong>  alternado`;
    }
    const getRouletteSignal = () => {
        const signals = [
            `Entrem no <strong class="greenGradientText"> vermelho </strong>`,
            `Entrem no <strong class="greenGradientText"> preto </strong>`,
            `Joguem nos <strong class="greenGradientText"> pares </strong>`,
            `Joguem nos <strong class="greenGradientText"> ímpares </strong>`,
            `Entrem no <strong class="greenGradientText"> 1 a 18 </strong>`,
            `Entrem no <strong class="greenGradientText"> 19 a 36 </strong>`,
            `Entrem na <strong class="greenGradientText"> 1ª </strong> e <strong class="greenGradientText"> 2ª </strong> coluna`,
            `Entrem na <strong class="greenGradientText"> 1ª </strong> e <strong class="greenGradientText"> 3ª </strong> coluna`,
            `Entrem na <strong class="greenGradientText"> 2ª </strong> e <strong class="greenGradientText"> 3ª </strong> coluna`,
            `Entrem na <strong class="greenGradientText"> 1ª </strong> e <strong class="greenGradientText"> 2ª </strong> dúzia`,
            `Entrem na <strong class="greenGradientText"> 1ª </strong> e <strong class="greenGradientText"> 3ª </strong> dúzia`,
            `Entrem na <strong class="greenGradientText"> 2ª </strong> e <strong class="greenGradientText"> 3ª </strong> dúzia`,
        ];

        const complements = ["1 tentativa", "2 tentativas", "3 tentativas"];

        const randomSignal = signals[Math.floor(rng() * signals.length)];
        const randomComplement = complements[Math.floor(rng() * complements.length)];

        return `${randomSignal}, vcs tem ${randomComplement}, não esqueçam de sempre cobrir o zero!`;
    };

    const getTwiceSignal = (op1, op2) => {
        const random = () => Math.floor(rng() * 2);

        const twiceOptions = [op1, op2]


        return twiceOptions[random()]

    }
    const getSquadSignal = (op1, op2, op3, op4) => {
        const random = () => Math.floor(rng() * 4);

        const squadOptions = [op1, op2, op3, op4]


        return squadOptions[random()]

    }



    const generateSignal = () => {

        function addFiveMinutes(timeStr) {
            // Extract the hours and minutes from the string
            const parts = timeStr.split(':');
            const hours = parseInt(parts[0], 10);
            const minutes = parseInt(parts[1], 10);
          
            // Create a date object using the extracted time
            const time = new Date();
            time.setHours(hours);
            time.setMinutes(minutes);
          
            // Add five minutes
            time.setMinutes(time.getMinutes() + 5);
          
            // Format the new time back into a string
            const newHour = time.getHours().toString().padStart(2, '0');
            const newMinutes = time.getMinutes().toString().padStart(2, '0');
            
            return `${newHour}:${newMinutes}`;
          }
        
        const timeLimit = addFiveMinutes(msgHour) 


        let sinal = "";
        let finalMessage = ""
        let greenMessage = ""

        const greenPlayers = Math.floor(((0.88 - 0.75) * rng() + 0.75)*onlinePlayers)

            function getRandomMessage() {
            const messages = [
              `Aíí sim galeraa, deu green pra ${greenPlayers} pessoas`,
              `Showw, ${greenPlayers} pessoas forraram com essa 🤑`,
              `Forramos familia! ${greenPlayers} levaram essa 🤑`,
              `Opaa ${greenPlayers} encheram o bolso com essa ✅✅`,
              `Alguém ficou de fora? Aqui deu green pra ${greenPlayers} jogadores🤑`
            ];
          
            const randomIndex = Math.floor(rng() * messages.length);
          
            return messages[randomIndex];
          }
        /* 
                FREE GAMES */

        if (game == "Mines") {
            sinal = getMinesSignal(5)

            finalMessage = `
          Toma ai familia, lembrem de configurar 3 minas: <br/><br/>
          ${sinal} <br/>
          <br/>
          Joguem até as ${timeLimit}
        `
            greenMessage = getRandomMessage()
        }
        if (game == "Mines3x") {
            sinal = getMinesSignal(4)

            finalMessage = `
          Sinalzinho pra vcss, lembrem de configurar 6 minas: <br/><br/>
          ${sinal} <br/>
          <br/>
          Joguem até as ${timeLimit}
        `
            greenMessage = getRandomMessage()

        }

        if (game === "Aviator" || game === "Spaceman") {
            sinal = getCrashSignal();

            finalMessage = `
              Toma ai familia: <br/><br/>
              ${sinal} <br/>
              <br/>
              Podem tentar 3 vezes, joguem até as ${timeLimit}
            `;
            greenMessage = getRandomMessage()

        }
        if (game === "Aviator2x" || game === "Spaceman2x") {
            sinal = getCrashSignal(1);

            finalMessage = `
              Toma ai familia: <br/><br/>
              ${sinal} <br/>
              <br/>
              Podem tentar 3 vezes, joguem até as ${timeLimit}
            `;
            greenMessage = getRandomMessage()

        }
        if (game === "AviatorVa" || game === "SpacemanVa") {
            sinal = getCrashSignal(2);

            finalMessage = `
              Toma ai familia: <br/><br/>
              ${sinal} <br/>
              <br/>
              Podem tentar 3 vezes, joguem até as ${timeLimit}
            `;
            greenMessage = getRandomMessage()

        }
        if (game === "FortuneTiger") {
            sinal = getFortuneSignal();
            finalMessage = `
            
            Tigrinho tá pagando muitoo <br/>
            ${sinal} <br/>
            joguem até as ${timeLimit}
            `
            greenMessage = getRandomMessage()

        }

        if (game === "Roulette") {
            sinal = getRouletteSignal();
            finalMessage = `${sinal} <br/>
            Vcs tem até as ${timeLimit}
            `
            greenMessage = getRandomMessage()

        }

        /*VIP GAMES*/

        if (game === "FortuneRabbit") {
            sinal = getFortuneSignal();
            finalMessage = `
            
            Sinalziho válido até ${timeLimit} <br/>
            ${sinal} <br/>
            Coelhinho ta pagando!
            `
            greenMessage = getRandomMessage()

        }

        if (game === "FortuneOx") {
            sinal = getFortuneSignal();
            finalMessage = `
            
            Sinalziho válido até ${timeLimit} <br/>
            ${sinal} <br/>
            TOURO FICOU MALUCO!
            `

            greenMessage = getRandomMessage()

        }


        if (game === "BacBo") {
            sinal = getTwiceSignal(`Entre no <strong class="greenGradientText"> Azul </strong> `, `Entre no <strong class="greenGradientText">Vermelho</strong>`)
            finalMessage = `Esse tá fácil! <br/>
            ${sinal} e marque o EMPATE. <br/> 
            Válido até ${timeLimit}!!`

            greenMessage = getRandomMessage()

        }
        if (game === "DragonTiger") {
            sinal = getTwiceSignal(`Aposte no <strong class="greenGradientText"> Dragão </strong> `, `Aposte no <strong class="greenGradientText">Tigre</strong>`)
            finalMessage = `É sinalzinho que vcs querem?? <br/>
            ${sinal} e marque o EMPATE. <br/> 
            Entrem até ${timeLimit}`

            greenMessage = getRandomMessage()

        }
        if (game === "FootballStudio") {
            sinal = getTwiceSignal(`Aposte na <strong class="greenGradientText"> Casa </strong> `, `Aposte no <strong class="greenGradientText">Visitante</strong>`)
            finalMessage = `É sinalzinho que vcs querem?? <br/>
            ${sinal} e lembra de marcar o EMPATE. <br/> 
            Entrem até ${timeLimit}`

            greenMessage = getRandomMessage()

        }

        if (game === "LightingDice") {
            sinal = getSquadSignal(`NÚMERO ALTO`, `NÚMERO BAIXO`, `QUALQUER DUPLO`, `QUALQUER TRIPLO`)
            finalMessage = `Podem apostar em <strong class="greenGradientText"> ${sinal}!! </strong> até ${timeLimit}`

            greenMessage = getRandomMessage()

        }

        if (game == "NinjaCrash") {
            sinal = (Math.floor(rng() * (4 - 2) + 2))
            finalMessage = `Entrem e façam <strong class="greenGradientText"> ${sinal} </strong> cortes até ${timeLimit}`

            greenMessage = getRandomMessage()

        }


        return { finalMessage, timeLimit, greenMessage };
    };

    const getRandomMessage = (type) => {
        const messages = data[type];
        const randomIndex = Math.floor(rng() * messages.length);
        return messages[randomIndex];
    };

    //

    const [typeIndex, setTypeIndex] = useState(0);
    const types = ['analysis', 'announcing', 'green', 'typing'];
    let gameType = "slot";

    const calculateCurrentTimeInSeconds = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        return hours * 3600 + minutes * 60 + seconds;
    };

    // New function to calculate loop start time
    const calculateLoopStartTime = () => {
        const now = new Date();
        const currentTimeInSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const timeSinceLoopStart = currentTimeInSeconds % 270;
        const loopStartTimeInSeconds = currentTimeInSeconds - timeSinceLoopStart;
        const hours = Math.floor(loopStartTimeInSeconds / 3600);
        const minutes = Math.floor((loopStartTimeInSeconds % 3600) / 60);
        const seconds = loopStartTimeInSeconds % 60;
        setMsgHour(`${hours}:${minutes}`)
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);
    };

    // New function to get the seed for the current loop
    const getSeedForCurrentLoop = () => {
        const loopStartTime = calculateLoopStartTime();
        return `${loopStartTime.getDate()}-${loopStartTime.getHours()}-${loopStartTime.getMinutes()}-${gameType}`;
    };


    const checkTimeAndUpdateMessage = () => {
        const currentTimeInSeconds = calculateCurrentTimeInSeconds();
        const timeInCurrentLoop = currentTimeInSeconds % 270;

        if (timeInCurrentLoop == 0 || seed === '') {
            setSeed(getSeedForCurrentLoop());
        }
        if (timeInCurrentLoop >= 0 && timeInCurrentLoop < 3) {
            setTypeIndex(3)
        }
        else if (timeInCurrentLoop >= 3 && timeInCurrentLoop < 30) {
            setTypeIndex(0);
        }
        if (timeInCurrentLoop >= 30 && timeInCurrentLoop < 34) {
            setTypeIndex(3)
        }
        else if (timeInCurrentLoop >= 34 && timeInCurrentLoop < 210) {
            setTypeIndex(1);

        }
        else if (timeInCurrentLoop >= 210 && timeInCurrentLoop < 213) {
            setTypeIndex(3);

        }
        else if (timeInCurrentLoop >= 213) {
            setTypeIndex(2);
        }
    };

    useEffect(() => {

        if (onlinePlayers == 0) {
            setMessage(`Operações encerradas por hoje pessoal! Ate amanhã! <br/>  
                Hoje deu pra lucrar R$

                ${today.getHours() > 20 ? `${profit < 1000 ? profit.toString() : (profit / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} ` : `${lastDayProfit < 1000 ? lastDayProfit.toString() : (lastDayProfit / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} `}
                

                🤑🤑 <br/>
                Quem quiser continuar operando basta adquirir o VIP`)
        } else {
            if (types[typeIndex] == 'typing') {
                setMessage(types[typeIndex])
            }
            else if (types[typeIndex] == 'analysis') {
                setMessage(getRandomMessage(types[typeIndex]))
            } else if (types[typeIndex] == 'announcing') {
                setMessage(generateSignal().finalMessage)
            } else if (types[typeIndex] == 'green') (
                setMessage(generateSignal().greenMessage)
            )
        }




    }, [typeIndex]);

    useEffect(() => {
        setSeed(getSeedForCurrentLoop());
        const interval = setInterval(() => {
            checkTimeAndUpdateMessage();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        checkTimeAndUpdateMessage();
        const interval = setInterval(() => {
            checkTimeAndUpdateMessage();
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    /*     useEffect(() => {
            const type = types[typeIndex];
    
            let nextMessageData;
            if (type === 'announcing' || type === "green") {
                nextMessageData = generateSignal(); // Assume you have this function defined
            } else {
                nextMessageData = { finalMessage: getRandomMessage(type) }; // Assume you have this function defined
            }
    
            setMessage(type === "green" ? nextMessageData.greenMessage : nextMessageData.finalMessage);
        }, [typeIndex]);
     */

    //






    useEffect(() => {
        const handleMouseMove = (e) => {
            const iframe = document.getElementById('iframeCasino');
            const windowHeight = window.innerHeight;
            const mouseY = e.clientY;

            if (windowHeight - mouseY <= 75) {
                iframe.style.pointerEvents = 'none';  // Disable interactions with the iframe
            } else {
                iframe.style.pointerEvents = 'auto';  // Enable interactions with the iframe
            }
        };

        // Attach event listener
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id='chatPage' className='borderSpacing'>

            <div className="iframe-overlay"></div>
            <Scrollbar />
            <ChatStatus
                profit={profit}
                analyst={analyst}
                onlinePlayers={onlinePlayers}
                analystPfp={analystPfp}
            />
            <div id='todayMsgDate'> <p className='greenGradientText'>{onlinePlayers == 0 ? (today.getHours() > 21 ? "HOJE" : "ONTEM") : "HOJE"}</p>  </div>
            <Message analyst={analyst} analystPfp={analystPfp} message={message} hour={onlinePlayers == 0 ? "21:00" : msgHour} />
            <iframe src={affLink} id='iframeCasino'></iframe>
        </section>
    );
}
