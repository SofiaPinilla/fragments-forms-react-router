import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UserForm from "./components/UserForm/UserForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
