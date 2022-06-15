import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserForm.scss"
const UserForm = () => {
    const initialState = {
        username: "",
        email: "",
      };
  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const clearState = () => {
    setData(initialState);
  };

  const handleInputChange = (event) => {
    if ( data.username.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se lanza el formulario", data);
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <>
    <div className="message">
        <span>Normal message</span>
    </div>
    <div className="success">
        <span>Success message</span>
    </div>
        <div className="box-2">
            hola
        </div>
    <div className="box">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}
        value={data.username}
        name="username"
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        value={data.email}
        name="email"
      />
      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>
      {message}
    </form>
    </div>
    </>
  );
};

export default UserForm;
