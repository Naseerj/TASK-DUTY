import React from "react";
import Arrow from "../../Images/Vector (26).svg";
import Navbar from "../../Navbar/Navbar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditTask.css";


const EditTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const redirect = useNavigate()

  const { id } = useParams();
  const url = `http://localhost:7000/tasks/${id}`;

  const updateData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const { msg } = result;
        console.log(msg);
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
      <div className="ancestors">
        <Navbar text2={"All Tasks"} />

        <div className="fulldiv"></div>
        <form className="form1" action="">
          <div className="parent1">
            <div className="Arrowflex">
              <img src={Arrow} alt="" />
              <h1>Edit Task</h1>
            </div>
          </div>
          <div className="divone">
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
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
              className="txt"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Briefly describe your task.."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            ></textarea>
            <div className="position2">
              <h1>Description</h1>
            </div>
          </div>
          <div className="divthree">
            <input
              onChange={(e) => {
                setTags(e.target.value);
              }}
              className="secondinput"
              type="text"
              value={tags}
            />
            <div className="position3">
              <h1>Tags</h1>
            </div>
          </div>
          {/* <select className="select" name="" id="">
          <option value="">Urgent</option>
          <option value="">Important</option>

        </select> */}
          <button type="submit" onSubmit={handleUpdate} className="btnew">
            Done
          </button>
        </form>
        <a href="">Back To Top</a>
      </div>
    </div>
  );
};

export default EditTask;
