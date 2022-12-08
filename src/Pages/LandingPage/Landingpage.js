import React, { useRef, useState } from "react";
import './Landingpage.css'
import Bro from '../../Images/bro.svg'
import Navbar from "../../Navbar/Navbar";
import Sis from '../../Images/WhatsApp Image 2022-11-23 at 13.23.48.jpg'


const Landingpage = () => {
const imgRef = useRef()
  const imgRef2 = useRef()



  // setInterval(() => {
  //   if(imgRef === Bro){
  //     imgRef.src = Sis
  //   }else{
  //     console.log('hello')
  //   }
  // console.log('hiii')
  // }, 5000);
  return (
    <div>
      <Navbar text1= {'New Task'} text2 = {'All Tasks'} />
     <div className="parentdiv">
     <div className="textdiv">
      <h1 className="header1">Manage your Tasks on <span className="span1">TaskDuty</span></h1>
      <p className="ptag1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quos
        voluptates odio odit vel accusamus enim consequatur incidunt aut aliquid
        hic perferendis, similique iusto deleniti dicta omnis fugiat temporibus
        eius!
      </p>
      <button className="btn1">Go to My Tasks</button>
      </div>
      <div>
        <img ref={imgRef} className="bro" src={Bro} alt="" />
        {/* <img ref={imgRef2} src={Sis} alt="" /> */}
      </div>
     </div>
    </div>
  );
};

export default Landingpage;
