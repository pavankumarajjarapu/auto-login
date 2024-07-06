import React, { useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AutoLogin() {
  let mailRef = useRef();
  let passwordRef = useRef();
  let navigateHome = useNavigate();

  let validation = () => {
    if (
      mailRef.current.value === "pavan@gmail.com" &&
      passwordRef.current.value === "pavan@123"
    ) {
      localStorage.setItem("mail", mailRef.current.value);
      localStorage.setItem("password", passwordRef.current.value);
      sessionStorage.setItem("mail", mailRef.current.value);
      sessionStorage.setItem("password", passwordRef.current.value);
      //   alert(`hello pavan`);
      navigateHome("/home");
    } else {
      alert(`invalid credentials`);
    }
  };
  useEffect(() => { 
    mailRef.current.value = localStorage.getItem("mail");
    passwordRef.current.value = localStorage.getItem("password");
    if(localStorage.getItem("mail") && localStorage.getItem("password")){
        validation()
    }
 
  }, []);

  return (
    <div>
      <div>
        <form>
          <h1>Login</h1>
          <div>
            <label>Mail</label>
            <input type="mail" ref={mailRef}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={passwordRef}></input>
          </div>
          <button
            type="button"
            onClick={() => {
              validation();
            }}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default AutoLogin;
