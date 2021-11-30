//npm
import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBolt, faWindowClose } from "@fortawesome/free-solid-svg-icons";
//Styles
import ("./style/card.css")


const Card = ({text,color,changeCards,currentCards,dltColor,currentColors})=>{
    const deleteCard = ()=>{
        let dltNewArrayText = currentCards.filter(el=> el != text)
        let dltNewArrayColor = currentColors.filter(el=> el != color)
        changeCards(dltNewArrayText)
        dltColor(dltNewArrayColor)
    }
    return(
        <div className="card" style={{background: color}}>
            <i className="close" onClick={deleteCard}><FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon></i>
            <p className="thunder"><FontAwesomeIcon icon={faBolt}></FontAwesomeIcon></p>
            <p>{text}</p>
            <button>Apply Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    )
}

export default Card