
import "./styles.css"

const SliderContainer = (props) => (

    <div className="SlideContainer">

        <div className="SlideInfoContainer">

            <div className="SlideInfoTitle">
                {props.title}
            </div>

            <div className="SlideDescription">
                <p>{props.description}</p>
            </div>

            <div className="SlideButtons">
                <a href="#" className="StartPlayButton">НАЧАТЬ ИГРАТЬ</a>
                <a href="#" className="DetailsButton">ПОДРОБНЕЕ</a>
            </div>

        </div>
        <img className="SlideImage" src={props.img} alt=""/>

    </div>

)

export default SliderContainer
