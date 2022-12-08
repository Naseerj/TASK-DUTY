import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./MyTask.css";
import plus from "../../Images/Vector (25).svg";
import deleteicon from "../../Images/fluent_delete-24-regular.svg";
import editicon from "../../Images/clarity_note-edit-line.svg";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const MyTask = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "fintech app website",
      tags: "Important",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.",
    },
  ]);
  const tagRef2 = useRef()
  const url = "http://localhost:7000/tasks";

 
  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const { msg } = result;
        console.log(msg);
        setTasks(msg);
        if(tasks.tags === 'urgent'){
          tagRef2.current.style.color = 'green'
        }else{
          console.log('bad boy')
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const { id } = useParams();

  const redirect = useNavigate();
  // const url1 = `http://localhost:7000/tasks/${id}`;

  ;
  const handleDelete = (id)=>{
    fetch(`http://localhost:7000/tasks/${id}`, {
      method: 'DELETE',
    }).then(() => {
      redirect('/')
    })
  }

  return (
    <div>
      <Navbar text1={"New Task"} />
      <div className="flex1">
        <h1 className="mytasktext">My Tasks</h1>
        <div className="plus">
          <img className="imgplus" src={plus} alt="" />
          <Link to="/newtask">
            {" "}
            <h2 className="headertask1">Add new Task</h2>
          </Link>
        </div>
      </div>

      <div className="text">
        <section className="allblogs">
          {tasks.map((task) => {
            return (
              <div className="tag" key={task.id}>
                <div className="flextest" key={task.id}>
                  <h1 className="tagstext"> {task.tags} </h1>
                  {/* {tasks.tags === 'urgent'? 'red': 'green' } */}
                  <div className="deletetest">
                    <Link className="editlink" to={`/test2/${task._id}`}>
                      <div className="editdiv">
                        <img className="editimg" src={editicon} alt="" />{" "}
                        <h1 className="editext">Edit</h1>
                      </div>
                    </Link>
                    <Link className="deletelink" to={`/${task._id}`}>
                      <div className="deletediv" onClick={()=>handleDelete(task._id)}>
                        <img className="delete" src={deleteicon} alt="" />
                        <h1 className="deletetext">Delete</h1>
                      </div>
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="bordertest">
                  <h1 className="texttitle">{task.title}</h1>
                  <p> {task.description} </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <a href="#" className="top">Back To Top</a>
    </div>
  );
};

export default MyTask;

