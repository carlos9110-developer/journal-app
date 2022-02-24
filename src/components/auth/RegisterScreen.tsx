import {  Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from "../../actions/ui";

import { useDispatch, useSelector } from "react-redux";
import validator from 'validator';
import { uiError } from "../../interfaces/uiError";
import { storeInterface } from '../../interfaces/storeInterface';
import { startRegisterWithEmailPasswordName } from "../../actions/auth";




export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const  msgError  =   useSelector<storeInterface>( state => state.ui.msgError  );

  


  const [ formValues, handleInputChange ] = useForm({
    name:'Carlos',
    email: "carlos@hotmail",
    password: "123456",
    password2: "123456",
  });


  const { name, email, password, password2  } = formValues;

  const extraerMsj = (mensaje:any) => {
    return mensaje;
  }


  const handleRegister = (e:React.FormEvent) => {
    e.preventDefault();

    if(  isFormValid()  ){
      dispatch( startRegisterWithEmailPasswordName(email, password, name))
    }

  }
  

  const isFormValid = () => {

    if( name.trim().length < 2 ){
      dispatch( setError("name is requerid") );
      return false;
    }

    else if( !validator.isEmail(email) ){
      dispatch( setError("email no es valido") );
      return false;
    }

    else if( password !== password2 || password.length < 5 ){
      dispatch( setError("password no es valido") );
      return false;
    }

    dispatch( removeError() );

    return true;

  }

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>

        {
          extraerMsj(msgError) && 
          (
            <div className="auth__alert-error">
                { extraerMsj(msgError) }
            </div>
          )
        }

        

        <input 
          type="text"
          placeholder='Name'
          name='name'
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input 
          type="text"
          placeholder='email'
          name='email'
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input 
          type="password"
          placeholder='Password'
          name='password'
          className="auth__input"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />

        <input 
          type="password"
          placeholder='Confirm Password'
          name='password2'
          className="auth__input"
          autoComplete="off"
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type='submit'
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>

        
        
        <Link 
          to="/auth/login"
          className="link"
        >
          Already registered?
        </Link>

      </form>

    </>
  )
}
