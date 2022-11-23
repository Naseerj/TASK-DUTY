import React from 'react'
import './Navbar.css'
import Logo from '../Images/Group 2.svg'
import Naseer from '../Images/Naseer2.jpg'
import Ellipse from '../Images/Ellipse 2.svg'

const Navbar = () => {
  return (
    <div>
        <div className='firstdiv'>
        <img src={Logo} alt="" />
        
        <div className='secondiv'>
            <h3>Edit Task</h3>
            <h3>All task</h3>
            <img className='Naseer' src={Naseer} alt="" />
           
            
        </div>
        <div className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <img className='Ellipse' src={Ellipse} alt="" />
    </div>
  )
}

export default Navbar