// import { Button } from "bootstrap";
import { Link } from 'react-router-dom';
import "../styles/CoursesStyles.css"

function CourseData(props) {
    return(
        <div className="t-card">
           <div className="t-image">
            <img src={props.image} alt="img"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <Link to={props.url}>
                {props.title}
            </Link>
            {/* <Button onClick={props.onButtonClick}>"View"</Button> */}
        </div>
    )
}

export default CourseData;