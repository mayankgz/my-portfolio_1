import React from 'react';
import '../css/About.css';
import Pic from '../../assets/photo.png'
import Bg from '../../assets/bg.jpg'
import Fade from 'react-reveal/Fade';
function About() {
    let container = document.querySelector(".container");
    let foregrounds = document.querySelectorAll(".foreground");
    document.body.addEventListener("mousemove", (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 30;
        let y = (window.innerHeight / 2 - e.pageY) / 30;
        container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`;
        [].forEach.call(foregrounds, (foregrounds) => {
            foregrounds.style.transform = `translateY(${y}px) translateX(${x}px)`;
        });
    });
  return(
    <div id='About'>
        <div id="about_heading">
            <Fade delay={1000} ><h1>Hi There!</h1></Fade>
        </div>
        <Fade delay={1500}><div id='outer_container'>
            <div id='left_container'>
                    <div id='about_me'><h2>About Me</h2></div>
                    <div id='left_container_text'>
                        Hello! My name is Mayank Gagneja and I enjoy creating things that live on the internet. My interest in web development started back in 2020. As a MERN stack developer, I have expertise in building robust and scalable web applications using the latest technologies. With proficiency in MongoDB, ExpressJS, ReactJS, and NodeJS, I have the skills to develop end-to-end solutions that cater to business needs. I have a passion for delivering high-quality code and am constantly seeking to improve my skills and stay up-to-date with the latest industry trends.
                    </div>
                                </div>
            <div id='right_container'>
                <div class='container'>
                <div className='card-container'>
                        <div class="card">
                            <img class="background" src={Bg} alt="" />
                            <img class="foreground" src={Pic} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </Fade>
    </div>
  )
}
  export default About;
