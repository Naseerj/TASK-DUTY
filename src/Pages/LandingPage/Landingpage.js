import React from "react";
import './Landingpage.css'
import Bro from '../../Images/bro.svg'
import Navbar from "../../Navbar/Navbar";


const Landingpage = () => {
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
        <img className="bro" src={Bro} alt="" />
      </div>
     </div>
    </div>
  );
};

export default Landingpage;
