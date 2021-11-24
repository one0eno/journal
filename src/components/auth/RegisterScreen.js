import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validator  from 'validator';
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError} from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export default function RegisterScreen() {

  
  const dispatch = useDispatch()
  const {msgError} = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();


    if(isFormValid()){
      dispatch(startRegisterWithEmailPasswordName(email,password,name))
  
    }
  };

  const isFormValid = () => {

    if(name.trim().length === 0){
      dispatch(setError("El nombre es obligatorio"))
      return false;
    }
    if(!validator.isEmail(email)){
      dispatch(setError("Email no es valido"));
      return false;
    }
    if(password.trim().length === 0){
      dispatch(setError("El password es requerido"));
      return false;
    }
    if(password2.trim().length === 0){
      dispatch(setError("El password2 es requerido"));
      return false;
    }
    if(password.trim().length < 6){ 
      dispatch(setError("El password ha de tener almenos 6 caracteres"));
      return false;
    } 
    if(!validator.equals(password,password2)){  
      dispatch(setError("El password no coincide"));
      return false;
    }
    
    dispatch(removeError());

    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister} className="animate__animated animate__bounce__fadeIn animate__backInDown ">

        { msgError && <div className="auth__alert-error"> { msgError }</div>} 
        
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          placeholder="Email"
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
        <input
          type="password"
          value={password2}
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          placeholder="Confirm password"
          name="password2"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>
        <hr />

        <Link className="link mt-1" to="/auth/login">
          Already register
        </Link>
      </form>
    </>
  );
}
