import React from "react";
import './Landingpage.css'
import Bro from '../../Images/bro.svg'

const Landingpage = () => {
  return (
    <div>
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
        <img src={Bro} alt="" />
      </div>
     </div>
    </div>
  );
};

export default Landingpage;
