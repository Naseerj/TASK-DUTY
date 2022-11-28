import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./Navbar/Navbar";
import Landingpage from "./Pages/LandingPage/Landingpage";
import MyTask from "./Pages/My Tasks/MyTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewTask from "./Pages/NewTask/NewTask";
import EditTask from "./Pages/EditTask/EditTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/mytask" element={<MyTask />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/editask/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
