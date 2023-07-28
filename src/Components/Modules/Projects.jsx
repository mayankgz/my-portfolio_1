import React from 'react'
import ai from '../../assets/we-connect.jpg'
import gspot from '../../assets/goal-spot.jpg'
import campus from '../../assets/campus-blocks.jpg'
import flight from '../../assets/flight-booking.jpg'
import api from '../../assets/API.jpg'
import jwt from '../../assets/jwt.jpg'
import Card2 from './card2'
import '../css/Project.css'
function Projects() {
    return (
        <div id='Proj'>
            <h1 className='heading_123'>My WoRKS</h1>
            <div className='project_page'>
                <Card2 src={ai} txt="Real Time Chat Application using Mern Stack" anc="https://github.com/mayankgz/We---Connect-final" button_val="GitHub Repo"/>
                <Card2 src={gspot} txt="An E-commerce Website for buying programming courses with search engine and API integration" anc="www.google.com" button_val="GitHub Repo"/>
                <Card2 src={campus} txt="Campus Block,BVCOE official website. which is built from scratch" anc="www.google.com" button_val="Live Link"/>
                <Card2 src={api} txt="An experimental web page with search engine using giphy API" anc="www.google.com" button_val="GitHub Repo"/>
                <Card2 src={jwt} txt="An Advance Authentication enabled website using passport JWT(Java Web Token)" anc="www.google.com" button_val="GitHub Repo"/>
                <Card2 src={flight} txt="An Online Flight Booking Web app (under development)" anc="www.google.com" button_val="GitHub Repo"/>

            </div>
        </div>
    )
}

export default Projects