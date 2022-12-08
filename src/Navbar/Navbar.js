import React, { useRef } from "react";
import "./Navbar.css";
import Logo from "../Images/Group 2.svg";
import Naseer from "../Images/Naseer2.jpg";
import Ellipse from "../Images/Ellipse 2.svg";
import { Link } from "react-router-dom";

const Navbar = ({ text1, text2 }) => {
  const dropdownRef = useRef();
  const div2Rf = useRef();
  const div1Rf = useRef();
  const div3Rf = useRef();

  const handleDrop = () => {
    if (dropdownRef.current.style.display === "block") {
      dropdownRef.current.style.display = "none";

      div2Rf.current.style.opacity = 1;
      console.log("First");
    } else {
      dropdownRef.current.style.display = "block";
      div2Rf.current.style.opacity = 0;
      div2Rf.current.style.transform.translate = 100;

      console.log("Second");
    }
  };

  return (
    <div>
      <div className="firstdiv">
        <Link className="link1" to="/">
          <img className="taskduty" src={Logo} alt="" />
        </Link>
        <div></div>
        <div className="secondiv">
          <Link className="text1link" to="/newtask">
            {" "}
            <h3>{text1}</h3>
          </Link>
          <Link className="text2link" to="/mytask">
            {" "}
            <h3>{text2}</h3>
          </Link>
          <div className="post">
            <img className="Naseer" src={Naseer} alt="" />
            <img className="Ellipse" src={Ellipse} alt="" />
          </div>
        </div>
        <div ref={dropdownRef} className="dropdown">
          <Link to='/newtask'><h3>{text1}</h3></Link>
          <Link to='/mytask'><h3>{text2}</h3></Link>
        </div>

        {/* HAMBURGER HERE */}
        <div  onClick={handleDrop} className="hamburger">
          <div ref={div1Rf}></div>
          <div ref={div2Rf}></div>
          <div ref={div3Rf}></div>
        </div>

      </div>
      {/* <a href="">

      </a> */}
      <hr />
    </div>
  );
};

export default Navbar;
