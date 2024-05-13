
import "./styles.css"
import SlideContainer from "../../components/SliderContainer/SlideContainer";

import React, {useState} from "react";

const Home = () =>{

    const [currentId, setId] = useState(0);

    const ChangePreviewToHiTech = () => {
      setId(0)
    };

    const ChangePreviewToTechnoMagic = () => {
        setId(1)
    };

    const ChangePreviewToGegTech = () => {
        setId(2)
    };

    return(
        <div className="wrapper">
            <div className="content">

                {/*
                Home Slider
                */}

                <div className="HomeSlider">

                    <SlideContainer index={currentId}></SlideContainer>

                    <div className="HomeSlideNav">
                        <button className="SliderNavButton" onClick={ChangePreviewToHiTech}></button>
                        <button className="SliderNavButton" onClick={ChangePreviewToTechnoMagic}></button>
                        <button className="SliderNavButton" onClick={ChangePreviewToGegTech}></button>
                    </div>
                </div>




                {/*
                Home Monitoring
                */}

                <div className="HomeMonitoring">
                    <h1>Мониторинг</h1>
                </div>



                {/*
                Home News List
                */}

                <div className="HomeNewsList">
                    <h1>Новости</h1>
                </div>



                {/*
                Home Play Info
                */}

                <div className="HomePlayInfo">
                    <h1>Начать играть</h1>
                </div>

            </div>
        </div>
    );
};



export default Home;
