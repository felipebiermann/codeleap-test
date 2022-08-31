import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Home } from "./pages/Home/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
