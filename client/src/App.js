import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
