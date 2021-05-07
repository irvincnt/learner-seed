import React, { useState } from "react";
import registerImg from "../../assets/images/login.svg";
import { useForm } from "../../hooks/useForm";
import "../../styles/register.scss";
import validator from "validator";

export default function Register() {
  const [errors, setErrors] = useState({});

  const [formValues, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formValues;

  const handlerRegister = (e) => {
    e.preventDefault();

    const errorsForm = validate();
    if (Object.keys(errorsForm).length > 0) {
      setErrors(errorsForm);
    } else {
      setErrors({});
    }
  };

  const validate = () => {
    const errors = {};
    if (username.trim().length === 0) {
      errors.username = "Error en name";
    }

    if (!validator.isEmail(email)) {
      errors.email = "Error en email";
    }

    if (password.length < 8) {
      errors.password = "Password must be 8 or more characters";
    } else if (password !== password2) {
      errors.password = "Password not match";
      errors.password2 = "Password not match";
    }

    return errors;
  };

  return (
    <div className="register">
      <div className="image-register">
        <img src={registerImg} />
      </div>
      <form onSubmit={handlerRegister} className="auth-register">
        <div className="auth-register__content">
          <h2 className="title">La aventura comienza aquí</h2>
          <p className="subtitle">
            Haga que la administración de su aplicación sea fácil y divertida!
          </p>
          <div className="form-group">
            <p className="form-label">Username</p>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.username && (
              <p className="form-message">{errors.username}</p>
            )}
          </div>
          <div className="form-group">
            <p className="form-label">Email</p>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.email && <p className="form-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <p className="form-label">Password</p>
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.password && (
              <p className="form-message">{errors.password}</p>
            )}
          </div>
          <div className="form-group">
            <p className="form-label">Password 2</p>
            <input
              name="password2"
              type="password"
              value={password2}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.password2 && (
              <p className="form-message">{errors.password2}</p>
            )}
          </div>
          <button className="btn">Sing in</button>
        </div>
      </form>
    </div>
  );
}
