import React, { useRef } from 'react'
import Navbar from '../../Navbar/Navbar';
import { useParams, } from 'react-router-dom';
import { useNavigate, } from 'react-router-dom';
import Arrow from "../../Images/Vector (26).svg";
import { useState, useEffect } from 'react';

const Test2 = () => {
    const { id } = useParams();
    const url = `http://localhost:7000/tasks/${id}`;
    const redirect = useNavigate()
  
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
  
    
    
  
    const updateData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          const { msg } = result;
          // console.log(msg);
          setTitle(msg.title);
          setDescription(msg.description);
          setTags(msg.tags)
        });
    };
    
  
    useEffect(() => {
      updateData();
    }, []);
  
    const handleUpdate = (e) => {
      e.preventDefault();
      const msg = { title, description, tags };
      console.log(msg);
      fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msg),
      }).then(() => {
        redirect("/");
      });
    };
  
  return (
    <div>
            <div className="agbaballer">
      <Navbar text2={"All Tasks"} />

      
      <form  className="pad">
      <div className="testpad">
        <div className="Arrowdiv2">
          <img className="Arrow2" src={Arrow} alt="" />
          <h1 className="headertest1">Edit Task</h1>
        </div>

      </div>
          <fieldset className="fieldtest1">
            <legend className="legend1">Task Title </legend>
            <input value={title} onChange={(e)=>{
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
            <textarea value={description} onChange={(e)=>{
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
            <input value={tags} onChange={(e)=>{
                 setTags(e.target.value);
            }} className="testinp" type="text" name="" id="" />
          </fieldset>
          <button onClick={(handleUpdate)} className="btnew">Done</button>
        <a className='top' href="#">Back To Top</a>
        </form>

    </div>
    </div>
  )
}

export default Test2