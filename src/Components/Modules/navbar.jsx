import React from 'react'
import Pic from '../../assets/logo.png'
import '../css/Home.css'
function Navbar() {
  return (
    <div>
    
    
<nav class="border-white-200 dark:bg-gray-900 absolute top-6 right-24 flex items-center mb-4 justify-between"> 

<div id='home_page_logo'><div className='nav_toggle'> <i class="fa-solid fa-bars"></i></div><img id='image' src={Pic} /></div>
  <div class="max-w-screen-md flex flex-wrap items-center justify-between  p-4 relative" >
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-large flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 text-white-500 right-24 check">
        <li>
          <a href="#home" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white">Home</a>
        </li>
        <li>
          
          <a href="#About" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#Tech_Stack" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Techstack</a>
        </li>
        <li>
          <a href="#Proj" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">HandsOn</a>
        </li>
        <li>
          <a href="#contact_back" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
export default Navbar 
