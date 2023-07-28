import React from 'react'
import '../css/Contact.css'
function Contact() {
    return (
        <div id="contact_back">
            <footer>
                <div className='row'>
                    <div className='col'>
                        {/* <img src={logo} className='logo'/> */}
                        <p> I am excited about the endless possibilities that lie ahead in the world of web development. My expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack empowers me to create powerful and efficient web applications that cater to modern user needs. I take pride in my problem-solving abilities and my passion for writing clean, scalable code.</p>
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
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About</a></li>
                            <li><a href=''>Tech Stack</a></li>
                            <li><a href=''>Projects</a></li>
                            <li><a href=''>Contacts</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Newsletter<div className='underline'><span></span></div></h3>
                        <form>
                            <i class="fa-regular fa-envelope"></i>
                            <input type='email' placeholder='enter your Email-id' required></input>
                            <button type='submit'> <i class="fa-solid fa-arrow-right"></i></button>
                        </form>
                    </div>
                    <div className='social-icon'>
                    <i class="fa-solid fa-code"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                </div>
                <hr/>
                <p className='copyright'>mayank Gagneja All Rights Reserved </p>
            </footer>
        </div>
    )
}

export default Contact