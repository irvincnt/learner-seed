import React from "react";
import "../../styles/login.scss";
import loginImg from "../../assets/images/login2.svg";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

export default function Login() {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "irvincnt93@gmail.com",
    password: "1234567890",
  });

  const { email, password } = formValues;

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  return (
    <div className="login">
      <div className="image-login">
        <img src={loginImg} />
      </div>
      <form onSubmit={handlerSubmit} className="auth-login">
        <div className="auth-login__content">
          <h2 className="title">Bienvenido a EDUCA</h2>
          <p className="subtitle">
            Inicie sesión en su cuenta y comience la aventura
          </p>
          <div className="form-group">
            <p className="form-label">Email</p>
            <input
              type="text"
              name="name"
              className="form-control"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
            <p className="form-message">Requerido</p>
          </div>
          <div className="form-group">
            <p className="form-label">Password</p>
            <input
              type="password"
              name="name"
              className="form-control"
              value={password}
              onChange={handleInputChange}
            />
            <p className="form-message">Requerido</p>
          </div>
          <button className="btn">Sing in</button>
        </div>
      </form>
    </div>
  );
}
