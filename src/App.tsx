import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import MyProjects from "./components/MyProjects";
import Home from "./components/Frontend/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/my-projects" element={<MyProjects />} />

        <Route path="/Frontend" element={<Home/>}/>
        <Route path="/Frontend/my-projects" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
