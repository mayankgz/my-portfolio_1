import React from 'react'
import '../css/Project.css'

function Project_card(props) {
    return (
        <div class="flip-card" tabIndex="0">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={props.src}></img>
                </div>
                <div class="flip-card-back">
                    <div><h2>{props.heading}</h2></div>
                    <div><a href={props.anc}>{props.button_val}</a></div>
                </div>
            </div>
        </div>
    )
}

export default Project_card