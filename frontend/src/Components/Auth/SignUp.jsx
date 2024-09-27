import React, { Fragment } from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <form action="">
            <h1>SignUp</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Id" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm-Password" />
            <button>SignUp</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
