import React from "react";
import Navbar from "../../Navbar/Navbar";
import Arrow from "../../Images/Vector (26).svg";
import "./NewTask.css";
import {useState, useRef} from 'react'
import { useNavigate } from "react-router-dom";

const Test = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("")
  const headerRef = useRef()

  const url = "http://localhost:7000/tasks";
  const redirect = useNavigate()
  const tagRef = useRef()



const handleSubmit =(e)=>{
   e.preventDefault();
    const msg = {title, description, tags}
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(msg)
      }).then(()=>{
        redirect('/')
    })
  
}
  return (


    <div className="agbaballer">
      <Navbar text2={"All Tasks"} />

      
      <form onSubmit={(handleSubmit)} className="pad">
      <div className="testpad">
        <div className="Arrowdiv2">
          <img className="Arrow2" src={Arrow} alt="" />
          <h1 className="headertest1">New Task</h1>
        </div>

      </div>
          <fieldset className="fieldtest1">
            <legend className="legend1">Task Title </legend>
            <input onChange={(e)=>{
                setTitle(e.target.value);
            }}
              className="testinp"
              type="text"
              name=""
              id=""
              placeholder="E.g Project Defense, Assignment ..."
            />
          </fieldset>
          <fieldset className="fieldtest2">
            <legend className="legend1">Description </legend>
            <textarea onChange={(e)=>{
                 setDescription(e.target.value);
            }}
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
            <input ref={tagRef} onChange={(e)=>{
                 setTags(e.target.value);
            }} className="testinp" type="text" name="" id="" />
          </fieldset>
          <button className="btnew">Done</button>
        <a className="top" href="#">Back To Top</a>
        </form>

    </div>
  );
};

export default Test;
