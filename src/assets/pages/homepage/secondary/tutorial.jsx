
import { useState } from 'react'
import './tutorial.css'
import { TutorialCard } from './tutorialCard'
import { WatchTutorial } from './watchTutorial'
import { Swiper, SwiperSlide } from 'swiper/react';

import aulas from '../../../data/aulas.json'
import { useEffect } from 'react';

export function Tutorial() {
    console.log(aulas)

    const [videoSpace, setVideoSpace] = useState({
        active: false,
        data: {},
        index: 0,
    })

    useEffect(()=>{console.log(videoSpace)}, [videoSpace])
    function changeVideoByButtons(newIndex) {
        setVideoSpace({
            active: true,
            data: aulas[newIndex],
            index: newIndex // Corrected the assignment here
        })
    }
    
    return (
        <section id="tutorialPage">

            {videoSpace.active ? <WatchTutorial aula={videoSpace.data} index={videoSpace.index} changeVideoByButtons={changeVideoByButtons} aulasLenght={aulas.filter(item => item.url !== "").length}/> : <><header className="topbgHeader bgtutorial">
                <div className="headertransition"></div>
            </header>
                <div className="imgheaderBlock"></div></>
            }
            <div className="iframe-overlay"></div>


            <div className="tutorialContent">
                <div className="videosCaroussel">
                    <div className="vc-title borderSpacing">
                        <h2 >Tutorial</h2>
                        <h3>Comece por aqui</h3>
                    </div>
                    <div className="vc-track">
                        <Swiper slidesPerView={'auto'} centeredSlides={false} spaceBetween={0} className="aulaSwiper">

                            {aulas.filter(item => item.url !== "").map((aula, index) =>
                                <SwiperSlide key={index}>
                                    <TutorialCard aula={aula} key={index} index={index} setVideoSpace={setVideoSpace} />
                                </SwiperSlide>

                            )}
                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    )
}   