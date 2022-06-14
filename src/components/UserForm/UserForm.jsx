import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
  };

  const clearState = () => {
    setData({ ...initialState });
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
  );
};

export default UserForm;
