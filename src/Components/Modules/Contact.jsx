import React from 'react'
import '../css/Contact.css'
import logo from '../../assets/logo.png'
function Contact() {
    return (
        <div id="contact_back">
            <footer>
                <div className='row'>
                    <div className='col'>
                        <p className='para_footer'> I am excited about the endless possibilities that lie ahead in the world of web development. My expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack empowers me to create powerful and efficient web applications that cater to modern user needs. I take pride in my problem-solving abilities and my passion for writing clean, scalable code.</p>
                    </div>
                    <div className='col'>
                        <h3>Address<div className='underline'><span></span></div></h3>
                        <p>633,West Parmanand Colony</p>
                        <p>Near Mukherjee Nagar</p>
                        <p>Delhi-110009</p>
                        <p className='email-id'>mayankgagneja2002@gmail.com</p>
                        <h4>+91-7835880943</h4>
                    </div>
                    <div className='col'>
                        <h3>Links <div className='underline'><span></span></div></h3>
                        <ul>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#About'>About</a></li>
                            <li><a href='#Tech_Stack'>Tech Stack</a></li>
                            <li><a href='#Proj'>Projects</a></li>
                            <li><a href='#contact_back'>Contacts</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Newsletter<div className='underline'><span></span></div></h3>
                        <form  action='https://formsubmit.co/mayankgagneja2002@gmail.com' method="POST">
                            
                            <i class="fa-regular fa-envelope"></i>
                            <input type='email' placeholder='enter your Email-id' required></input>
                            <button type='submit'> <i class="fa-solid fa-arrow-right"></i></button>
                        </form>
                    </div>
                    <div className='social-icon'>
                    <div><a href='https://www.facebook.com/sunil.gagneja.79/' target='blank'> <i class="fa-brands fa-facebook"></i></a></div>
                    <div><a href='https://www.linkedin.com/in/mayank-gagneja-9b626b212/' target='blank'><i class="fa-brands fa-linkedin"></i></a></div>
                    <div><a href='https://leetcode.com/mayankgagneja2002/' target='blank'><i class="fa-solid fa-code"></i></a></div>
                    
                    <div><a href='https://github.com/mayankgz' target='blank'><i class="fa-brands fa-github"></i></a></div>
                    </div>
                </div>
                <hr/>
                <p className='copyright'>mayank Gagneja All Rights Reserved </p>
            </footer>
        </div>
    )
}

export default Contact