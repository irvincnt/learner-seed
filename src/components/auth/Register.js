import React from "react";
import registerImg from "../../assets/images/login.svg";
import "../../styles/register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="image-register">
        <img src={registerImg} />
      </div>
      <div className="auth-register">
        <div className="auth-register__content">
          <h2 className="title">La aventura comienza aquí</h2>
          <p className="subtitle">
            Haga que la administración de su aplicación sea fácil y divertida!
          </p>
          <div className="form-group">
            <p className="form-label">Username</p>
            <input name="name" className="form-control" />
            <p className="form-message">Requerido</p>
          </div>
          <div className="form-group">
            <p className="form-label">Email</p>
            <input name="name" className="form-control" />
            <p className="form-message">Requerido</p>
          </div>
          <div className="form-group">
            <p className="form-label">Password</p>
            <input name="name" className="form-control" />
            <p className="form-message">Requerido</p>
          </div>
          <button className="btn">Sing in</button>
        </div>
      </div>
    </div>
  );
}
