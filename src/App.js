// import logo from './logo.svg';
import "./App.css";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortalLayout from "./PortalLayout";
import Topbar from "./Portfolio/Topbar";
import About from "./Portfolio/About";
import Skill from "./Portfolio/Skill";
import Projcet from "./Portfolio/Projcet";
import Service from "./Portfolio/Service";
import Contact from "./Portfolio/Contact";
import Introduction from "./Portfolio/Introduction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortalLayout />}>
          <Route path="/" element={<Topbar />}></Route>
          <Route path="/intro" element={<Introduction />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="skills" element={<Skill />}></Route>
          <Route path="projects" element={<Projcet />}></Route>
          <Route path="services" element={<Service />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
