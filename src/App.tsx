import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/my-projects" element={<MyProjects />} />
      </Routes>
    </>
  );
}

export default App;
