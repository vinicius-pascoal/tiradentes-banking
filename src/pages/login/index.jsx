import React, { useState } from "react";
import BaseLogin from "../../assets/components/baseLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goTo = useNavigate();
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        goTo("/dashboard", { replace: true });
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <>
      <BaseLogin>
        <form className="formularioLogin" onSubmit={handleSubmit}>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
          <button type="submit">Login</button>
          <div className="loginLinks">
            <a href="/criarConta">criar conta</a>
            <a href="/RecuperarConta">Recuperar senha</a>
          </div>
        </form>
      </BaseLogin>
    </>
  );
}

export default Login;
