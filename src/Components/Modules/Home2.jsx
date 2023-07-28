import React from 'react'
import '../css/Home.css';
import Fade from 'react-reveal/Fade';

function Home2() {
  return (
    <div>
        <Fade delay={1000}><h1 id='head'>Hello!!,<br/> I am Mayank</h1></Fade>
        <Fade delay={2000}><p className='disp'> A Full Stack MERN Developer</p></Fade>
    </div>

  )
}
export default Home2
