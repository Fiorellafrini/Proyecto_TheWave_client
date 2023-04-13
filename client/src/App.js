import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import FormProduct from "./components/FormProduct/FromProduct.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/form" element={<FormProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
