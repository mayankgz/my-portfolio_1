import React from 'react'
import '../css/card2.css'
function Card2(props) {
    return (
        <div>
            <div class="container_1">
                <div class="card_1">
                    <div class="front">
                        <img src={props.src}></img>
                    </div>
                    <div class="back">
                        <h2>{props.txt}</h2>
                        <button><a href={props.anc}>{props.button_val}</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2