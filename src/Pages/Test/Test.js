import React from "react";
import Navbar from "../../Navbar/Navbar";
import Arrow from "../../Images/Vector (26).svg";
import "./Test.css";

const Test = () => {
  return (
    <div className="agbaballer">
      <Navbar text2={"All Tasks"} />

      
      <form className="pad">
      <div className="testpad">
        <div className="Arrowdiv2">
          <img className="Arrow2" src={Arrow} alt="" />
          <h1 className="headertest1">New Task</h1>
        </div>

      </div>
          <fieldset className="fieldtest1">
            <legend className="legend1">Task Title </legend>
            <input
              className="testinp"
              type="text"
              name=""
              id=""
              placeholder="E.g Project Defense, Assignment ..."
            />
          </fieldset>
          <fieldset className="fieldtest2">
            <legend className="legend1">Description </legend>
            <textarea
              className="txttest"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Briefly describe your task..."
            ></textarea>
          </fieldset>
          <fieldset className="fieldtest1">
            <legend className="legend1">Tags</legend>
            <input className="testinp" type="text" name="" id="" />
          </fieldset>
        </form>
    </div>
  );
};

export default Test;
