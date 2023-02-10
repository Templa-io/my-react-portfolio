import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import WorkPage from "./components/Work/WorkPage";
import AboutPage from "./components/About/AboutPage";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="skills" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
