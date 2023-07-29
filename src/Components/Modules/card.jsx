import { Tilt } from 'react-tilt'
import '../css/card.css';
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.0,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Card = (props) => {
  return (
    <Tilt options={defaultOptions} style={{ height:"auto", width: 300, border:"1px solid black",padding:"2rem"}}>
      <div className='cd'>
        {/* <div className='top'>{props.heading}</div> */}
        <img src={props.src}/>
        <div className='bottom'>
        <div className='tech_heading_1'><b> {props.heading}</b></div>
        <div className='tech_discription'><p className="hello">{props.text}</p></div>
        <div className='list_heading'>{props.extra_heading}</div>
        <p className='tech_discription'>{props.extra_disc}</p>
        <div className='list_heading'>{props.list_heading}</div>
        <ul>
            <li>
                {props.item_1}
            </li>
            <li>
                {props.item_2}
            </li>
            <li>
                {props.item_3}
            </li>
            <li>{props.item_4}</li>
            <li>{props.item_5}</li>
            <li>{props.item_6}</li>
            <li>{props.item_7}</li>
        </ul>
        </div>
      </div>
    </Tilt>
  )
}
export default Card;