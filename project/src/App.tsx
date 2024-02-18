import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Market from "./pages/market";
import Storage from "./pages/storage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/market" Component={Market} />
        <Route path="/storage" Component={Storage} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
