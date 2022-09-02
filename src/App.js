import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Home } from "./pages/Home/index";
import { AuthContextComponent } from "./context/authContext";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
