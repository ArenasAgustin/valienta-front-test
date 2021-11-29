import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Location from "./pages/Location/Location";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
