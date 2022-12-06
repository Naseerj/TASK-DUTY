import React, { useRef } from "react";
import "./NewTask1.css";
import Arrow from "../../Images/Vector (26).svg";
import Navbar from "../../Navbar/Navbar";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("")
  const headerRef = useRef()

  const url = "http://localhost:7000/tasks";
  const redirect = useNavigate()

const handleSubmit =(e)=>{
   e.preventDefault();
    // console.log(title, description)
    const msg = {title, description, tags}
    // console.log(body)
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(msg)
      }).then(()=>{
        redirect('/')
    })
  
}


  return (
    <div className="ancestors">
      <Navbar text2={"All Tasks"} />

      <div className="fulldiv"></div>
      <form onSubmit={handleSubmit} className="form1" action="">
        <div className="parent1">
          <div className="Arrowflex">
            <img src={Arrow} alt="" />
            <h1>New Task</h1>
          </div>
        </div>
        <div className="divone">
          <input   onChange={(e) => {
            setTitle(e.target.value);
          }}
            className="firstinput"
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
          />
          <div className="position1">
            <h1>Task Title</h1>
          </div>
        </div>
        <div className="divtwo">
          <textarea
           onChange={(e) => {
            setDescription(e.target.value);
          }}
            className="txt"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Briefly describe your task.."
          ></textarea>
          <div className="position2">
            <h1>Description</h1>
          </div>
        </div>
        <div className="divthree">
          <input  onChange={(e)=>{
            setTags(e.target.value)
          }} className="secondinput" type="text" />
          <div className="position3">
            <h1>Tags</h1>
          </div>
        </div>
        {/* <select className="select" name="" id="">
          <option value="">Urgent</option>
          <option value="">Important</option>

        </select> */}
        <button className="btnew2">Done</button>
      </form>
      <div className="topdiv">
      <a  className="top" href="">Back To Top</a>
      </div>
    </div>
  );
};

export default NewTask;
