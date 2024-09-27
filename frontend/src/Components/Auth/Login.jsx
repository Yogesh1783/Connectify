import React, { Fragment } from "react";
import "./Login.css";
function Login() {
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <form action="">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Log in</button>
            <a href="">forgotten password ?</a>
            <button>Sign Up </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
