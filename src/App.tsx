import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import MyProjects from "./components/MyProjects";
import { LandingPage } from "./components/LandingPage";
import About from "./components/About";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/projects" element={<MyProjects />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
