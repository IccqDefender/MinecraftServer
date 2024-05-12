
import "./styles.css"
import SliderContainer from "../../components/SliderContainer/SliderContainer";
import {ServersList} from "../../components/SliderContainer/ServersList";


const Home = () => (
    <div className="wrapper">
        <div className="content">

            <div className="HomeSlider">

                <SliderContainer title={ServersList[1].title} description={ServersList[1].description} img={ServersList[1].img}></SliderContainer>

                <div className="HomeSlideNav">
                    <button className="SliderNavButton"></button>
                    <button className="SliderNavButton"></button>
                    <button className="SliderNavButton"></button>
                </div>

            </div>

            <div className="HomeMonitoring">
                <h1>Мониторинг</h1>
            </div>

            <div className="HomeNewsList">
                <h1>Новости</h1>
            </div>

            <div className="HomePlayInfo">
                <h1>Начать играть</h1>
            </div>

        </div>
    </div>
);

export default Home;
