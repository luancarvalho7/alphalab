import { useState, useEffect } from 'react'
import seedrandom from 'seedrandom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css'


import appData from './assets/data/app.json'
import data from './assets/data/data.json'


import { ChatPage } from './assets/pages/chat/chat'
import { Home } from './assets/pages/homepage/home.jsx'
import ScrollToTop from './assets/utils/scrollToTop.jsx';
import { Nav } from './assets/components/navbar/nav';
import { BottomNav } from './assets/components/navbar/bottomnav';
import { Notis } from './assets/components/notification/notis.jsx';
import { Bonus } from './assets/pages/homepage/secondary/bonus.jsx';
import { Lives } from './assets/pages/homepage/secondary/lives.jsx';
import { Tutorial } from './assets/pages/homepage/secondary/tutorial.jsx';
import { SwiperNotis } from './assets/components/notification/swipernotis.jsx';



function App() {

  const [inicio, setInicio] = useState(false)
  const [home, setHome] = useState(false)

  const [vipGamesData, setVipGamesData] = useState(data)
  const [gamesData, setGamesData] = useState(data)
  const [affLink, setAffLink] = useState(appData.affLink)
  const [vipAccess, setVipAccess] = useState(false)


  const [selectedGame, setSGame] = useState({


    "game": null,
    "vip": null,
    "profit": null,
    "analyst": null,
    "onlinePlayers": null,
    "gameImage": null,
    "analystPfp": null,

  })




  function randomizeGamesData(gamesData, index, vipAccess) {


    const today = new Date();
    const month = today.getMonth()
    const day = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const fiveMinuteBlocks = Math.floor(minutes / 5);

    const checkIsOpen = () => {
      if (gamesData.vip) {
        return true
      } else {
        if (hours < 21 && hours > 6) {
          return true
        }
        else {
          return false
        }
      }
    }
    const isOpen = checkIsOpen()

    // Create a seed that combines the day, hour, and the current 5-minute block, and index
    const seed = `${month.toString()}${day.toString()}${hours.toString()}${fiveMinuteBlocks.toString()}${index}`;

    const rng = seedrandom(seed);
    const randomFactor = rng();

    // Generate a random factor for deltaPlayers that varies between 0.1 and 0.4
    const deltaFactor = 0.1 + (0.4 - 0.1) * rng();
    const deltaPlayers = gamesData.onlinePlayers * deltaFactor;

    //Randomize Players When OPEN && 0 when closed
    const getRandomizedPlayers = () => {
      if (isOpen) {
        return gamesData.onlinePlayers + Math.floor((deltaPlayers * 2 * randomFactor) - deltaPlayers);
      } else {
        return 0
      }
    };

    const randomizedPlayers = getRandomizedPlayers();

    /* LAST DAY PROFIT */

    const lastProfitSeed = `${month.toString()}${(day - 1).toString()}${index}`;

    const lastProfitRng = seedrandom(lastProfitSeed);
    const randomLastProfitFactor = lastProfitRng();

    const deltaLastProfitFactor = 0.1 + (0.4 - 0.1) * lastProfitRng();
    const deltaLastProfit = gamesData.profit * deltaLastProfitFactor

    const viewLastProfit = gamesData.profit + Math.floor((deltaLastProfitFactor * 2 * randomLastProfitFactor) - deltaLastProfit);


    const profitSeed = `${month.toString()}${day.toString()}${index}`;

    /* PROFIT  100% */

    const profitRng = seedrandom(profitSeed);
    const randomProfitFactor = profitRng();

    const deltaProfitFactor = 0.1 + (0.4 - 0.1) * profitRng();
    const deltaProfit = gamesData.profit * deltaProfitFactor

    const randomizedProfit = gamesData.profit + Math.floor((deltaProfit * 2 * randomProfitFactor) - deltaProfit);

    const calculateCurrentValue = (maxValue = 1000, overrideHour = null, vip = false) => {


      const now = new Date();
      const hours = overrideHour !== null ? overrideHour : now.getHours() + now.getMinutes() / 60;
      const minutes = now.getMinutes();
      const rng = seedrandom(`${now.getDate()}${hours}${minutes}`);

      const applyVariation = (value) => {
        const variation = 0.02 * rng() - 0.01;
        return value + value * variation;
      };

      let tempValue = 0;

      if (vipAccess) {

        if (hours === 0) {
          tempValue = 0
        } else if (hours > 0 && hours < 2) {
          tempValue = ((maxValue / 6) * hours) / 2; // Increase faster from 0 to 2
        } else if (hours >= 2 && hours < 9) {
          tempValue = maxValue / 6 + ((maxValue / 6) * (hours - 2)) / 7; // Increase from 2 to 9
        } else if (hours >= 9 && hours < 12) {
          tempValue = maxValue / 3 + ((maxValue / 6) * (hours - 9)) / 3; // Increase from 9 to 12
        } else if (hours >= 12 && hours < 18) {
          tempValue = maxValue / 2 + ((maxValue / 6) * (hours - 12)) / 6; // Increase from 12 to 18
        } else if (hours >= 18 && hours < 22) {
          tempValue = (2 * maxValue) / 3 + ((maxValue / 6) * (hours - 18)) / 4; // Increase from 18 to 22
        } else if (hours >= 22 && hours <= 23.9) {
          tempValue = (5 * maxValue) / 6 + (maxValue / 6) * (hours - 22); // Increase from 22 to 23 to reach max value
        }



      } else {

        if (vip) {

          if (hours === 0) {
            tempValue = 0
          } else if (hours > 0 && hours < 2) {
            tempValue = ((maxValue / 6) * hours) / 2; // Increase faster from 0 to 2
          } else if (hours >= 2 && hours < 9) {
            tempValue = maxValue / 6 + ((maxValue / 6) * (hours - 2)) / 7; // Increase from 2 to 9
          } else if (hours >= 9 && hours < 12) {
            tempValue = maxValue / 3 + ((maxValue / 6) * (hours - 9)) / 3; // Increase from 9 to 12
          } else if (hours >= 12 && hours < 18) {
            tempValue = maxValue / 2 + ((maxValue / 6) * (hours - 12)) / 6; // Increase from 12 to 18
          } else if (hours >= 18 && hours < 22) {
            tempValue = (2 * maxValue) / 3 + ((maxValue / 6) * (hours - 18)) / 4; // Increase from 18 to 22
          } else if (hours >= 22 && hours <= 23.9) {
            tempValue = (5 * maxValue) / 6 + (maxValue / 6) * (hours - 22); // Increase from 22 to 23 to reach max value
          }

        } else {
          if (hours >= 0 && hours < 6) {
            tempValue = 0;
          } else if (hours >= 6 && hours < 9) {
            tempValue = (maxValue / 6) * ((hours - 6) / 3); // Increase from 6 to 9
          } else if (hours >= 9 && hours < 12) {
            tempValue = (maxValue / 6) + ((maxValue / 6) * (hours - 9)) / 3; // Increase from 9 to 12
          } else if (hours >= 12 && hours < 18) {
            tempValue = (maxValue / 3) + ((maxValue / 3) * (hours - 12)) / 6; // Increase from 12 to 18
          } else if (hours >= 18 && hours < 21) {
            tempValue = (2 * maxValue / 3) + ((maxValue / 6) * (hours - 18)) / 3; // Increase from 18 to 21
          } else if (hours >= 21) {
            tempValue = maxValue;
          }
        }
      }


      tempValue = applyVariation(tempValue);

      if (minutes >= 0 && minutes < 10) {
        const decreaseFactor = 0.02 * rng();
        tempValue *= 1 - decreaseFactor;
      }

      /*  tempValue = Math.min(tempValue, maxValue); */

      return (Math.floor(tempValue));
    };


    const currentProfit = calculateCurrentValue(randomizedProfit, null, gamesData.vip)

    const currentAnalyst = () => {
      if (hours > 15 || hours < 6) {
        return gamesData.analyst[1]
      }
      else {
        return gamesData.analyst[0]
      }
    }

    return { onlinePlayers: randomizedPlayers, profit: currentProfit, analyst: currentAnalyst(), lastDayProfit: viewLastProfit, currentDayProfit: randomizedProfit };
  }

  useEffect(() => {

    if (vipAccess) {
      const newGamesData = vipGamesData.map((gameData, index) => {
        const vip = true; // Setting vip to true
        const { onlinePlayers, profit, analyst } = randomizeGamesData({ ...gameData, vip }, index, vipAccess);

        return {
          ...gameData,
          analyst,
          vip, // Setting vip to true for all items
          onlinePlayers,
          profit
        };

      });
      ;
      setGamesData(newGamesData);
    }
    else {
      const newGamesData = gamesData.map((gameData, index) => {
        const { onlinePlayers, profit, lastDayProfit, currentDayProfit, analyst } = randomizeGamesData({ ...gameData }, index, vipAccess);

        return {
          ...gameData,
          analyst,
          lastDayProfit,
          currentDayProfit,
          onlinePlayers,
          profit
        };

      });
/*       console.log(newGamesData)
 */        ; // Logging the new array, not the old one
      setGamesData(newGamesData);
    }

  }, [vipAccess]);


  useEffect(() => {
    console.log(gamesData)
  }, [gamesData])


  return (
    <>

      <>
        <Router>

          <Nav vipAccess={vipAccess} logo={appData.logo} checkout={appData.vipCheckout} />
          <SwiperNotis data={data} />

          <BottomNav vipAccess={vipAccess} extrapages={appData.extrapages} checkout={appData.vipCheckout} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home data={gamesData} selectedGame={selectedGame} setSGame={setSGame} vipAccess={false} checkout={appData.vipCheckout} communityLink={appData.community} banners={appData.banners} vipcta={appData.vipcta} />} />
            <Route path="/modevip" element={<Home data={gamesData} selectedGame={selectedGame} setSGame={setSGame} vipAccess={true} setVipAccess={setVipAccess} checkout={appData.vipCheckout} communityLink={appData.community} banners={appData.banners} vipcta={appData.vipcta} />} />
            <Route path="/chat" element={<ChatPage
              game={selectedGame.game}
              analystPfp={selectedGame.analystPfp}
              analyst={selectedGame.analyst}
              profit={selectedGame.profit}
              onlinePlayers={selectedGame.onlinePlayers}
              affLink={selectedGame.affLUnique}
              inicio={inicio}
              home={home}
              vipAccess={vipAccess}
              lastDayProfit={selectedGame.lastDayProfit}
              currentDayProfit={selectedGame.currentDayProfit}
            />} />
            <Route path='/bonus' element={<Bonus inicio={inicio} affLink={affLink} img={appData.pageheaderes.bonus}
            />} />
            <Route path='/lives' element={<Lives img={appData.pageheaderes.lives} telegramLink={appData.community} />} />
            <Route path='/tutorial' element={<Tutorial />} />



          </Routes>
        </Router>
      </>


    </>
  )
}

export default App