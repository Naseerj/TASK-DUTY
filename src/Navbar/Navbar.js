import React, { useRef } from 'react'
import './Navbar.css'
import Logo from '../Images/Group 2.svg'
import Naseer from '../Images/Naseer2.jpg'
import Ellipse from '../Images/Ellipse 2.svg'

const Navbar = () => {
    const dropdownRef = useRef()
    const div2Rf = useRef()
    const div1Rf = useRef()
    const div3Rf = useRef()

    const handleDrop = ()=>{
        if(dropdownRef.current.style.display === 'block'){
            dropdownRef.current.style.display = 'none'
            
            div2Rf.current.style.opacity = 1
            console.log('First')
        }else{
            dropdownRef.current.style.display = 'block'
            div2Rf.current.style.opacity = 0
            div2Rf.current.style.transform.translate = 100


            console.log('Second')
        }
      

    }

  return (
    <div>
        <div className='firstdiv'>
        <img src={Logo} alt="" />
        
        <div className='secondiv'>
            <h3>Edit Task</h3>
            <h3>All task</h3>
            <img className='Naseer' src={Naseer} alt="" />
           
        <img className='Ellipse' src={Ellipse} alt="" />
        </div>
            <div ref={dropdownRef} className='dropdown'>
                <h3>Edit Task</h3>
                <h3>All Task</h3>
            </div>
        <div onClick={handleDrop} className='hamburger'>
                <div ref={div1Rf}></div>
                <div ref={div2Rf}></div>
                <div ref={div3Rf}></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar