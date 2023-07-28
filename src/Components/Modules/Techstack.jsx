import React from 'react'
import Card from './card';
import '../css/Tech.css';
import Front from '../../assets/frontend.png';
import Back from '../../assets/backend.jpg';
import Code from '../../assets/code.png';
function Techstack() {
  return (
    <div id='Tech_Stack'>
    <div className='tech_heading'> Tech Stacks</div>
    <div id='card_section'>
        <Card src={Front} heading ="FRONTEND DEVELOPER" text="I value simple content structure, clean design patterns, and thoughtful interactions from scratch, and enjoy bringing ideas to life in the browser." list_heading="Tools I Use :" extra_heading="Languages I Use" extra_disc="HTML, CSS, JS" item_1="React js" item_2="Bootstrap" item_3="Material UI" item_4="TailWind CSS" item_5="3-JS"  />
        <Card src={Back} heading="BACKEND DEVELOPER" text="I am a backend developer, responsible for designing and maintaining the server-side of web applications. My focus is on server-side logic, database management, API development, security, and performance optimization."list_heading="Tools I Use :" item_1="Node Js" item_2="Mongo DB" item_3="Express JS" item_4="SQL" item_5="CORS" item_6="Web Sockets" />
        <Card src={Code} heading="LANGUAGES" text="I am a highly skilled developer proficient in multiple programming languages. From C++ and Java(beginner) to javascript, Node.js, and SQL, I have a diverse range of language expertise. I possess a deep understanding of each language's intricacies and can adapt quickly to new technologies." list_heading="Languages I Speak :" item_1="C++" item_2="HTML , CSS , JAVASCRIPT" item_3="SQL" item_4="Node Js" item_5="Java (Beginner)"/>
    </div>
    </div>
  )
}
export default Techstack;
