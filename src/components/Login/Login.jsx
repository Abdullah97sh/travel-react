import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState } from "react";
import ReactJsAlert from "reactjs-alert";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    pass: "",
  });

  const [status, setStatus] = useState(false);
  const [type, setType] = useState("error");
  const [title, setTitle] = useState(
    "Email or Password is not correct!! please try again"
  );
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const localLogin = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    // check if email & pass NOT empty
    if (userLogin.email == "" || userLogin.pass == "") {
      return setStatus(true);
    }
    console.log(localLogin);
    const isRegister = localLogin.find(
      (e) =>
        userLogin.email === e.email &&
        userLogin.pass === e.pass
    );

    if (isRegister) {
      localStorage.setItem("Login", true);
      navigate("/home",{replace:true});
    } else {
      return setStatus(true);
    }
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-6 mt-5">
        <form onSubmit={handelLogin}>
          <MDBInput
            className="mb-4"
            type="email"
            id="form1Example1"
            label="Email address"
            name="email"
            value={userLogin.email}
            onChange={(e) =>
              setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value,
              })
            }
          />

          <MDBInput
            className="mb-4"
            type="password"
            id="form1Example2"
            label="Password"
            name="pass"
            value={userLogin.pass}
            onChange={(e) =>
              setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value,
              })
            }
          />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form1Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" block>
            Sign in
          </MDBBtn>
        </form>
      </div>
      {
        <ReactJsAlert
          status={status} // true or false
          type={type} // success, warning, error, info
          title={title}
          Close={() => setStatus(false)}
        />
      }
    </div>
  );
}

export default Login;
