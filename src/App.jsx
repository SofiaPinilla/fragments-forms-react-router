import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UserForm from "./components/UserForm/UserForm";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserForm />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
