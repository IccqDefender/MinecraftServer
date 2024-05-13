
import "./styles.css"
import {ServersList} from "../../pages/Servers/ServersList";

const SlideContainer = (props) => (

    <div className="SlideContainer">

        <div className="SlideInfoContainer">

            <div className="SlideInfoTitle">
                {ServersList[props.index].title}
            </div>

            <div className="SlideDescription">
                <p>{ServersList[props.index].description}</p>
            </div>

            <div className="SlideButtons">
                <a href="#" className="StartPlayButton">НАЧАТЬ ИГРАТЬ</a>
                <a href="#" className="DetailsButton">ПОДРОБНЕЕ</a>
            </div>

        </div>
        <img className="SlideImage" src={ServersList[props.index].img} alt=""/>

    </div>

)

export default SlideContainer
