import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import {
  
  startLoginEmailPassword,
  startGoogleLogin,
} from "../../actions/auth";

export default function LoginScreen() {

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const [formvalues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formvalues;

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("email:", email);
    console.log("password:", password);

    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin} 
        className="animate__animated animate__bounce__fadeIn animate__backInDown ">
        <input
          type="text"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          placeholder="email"
          name="email"
        />
        <input
          type="password"
          value={password}
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          placeholder="Password"
          name="password"
        />
        
        <button disabled={ loading } className="btn btn-primary btn-block" type="submit">
          Login
        </button>
        <hr />
        <div className="auth__social-networks" onClick={handleGoogleLogin}>
          <p>Entrar con google</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Crear nueva cuenta
        </Link>
      </form>
    </>
  );
}
