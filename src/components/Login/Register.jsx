import React from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import ReactJsAlert from "reactjs-alert";

function Register() {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  });

  const [status, setStatus] = useState(false);
  const [type, setType] = useState("error");
  const [title, setTitle] = useState("All fields required");
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];

  const handleRegister = (e) => {
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem("users")) || [];

    if (
      !register.firstName ||
      !register.lastName ||
      !register.email ||
      !register.pass
    ) {
      return setStatus(true);
    }

    const isExist = localData.find((e) => {
      e.email = register.email;
    });
    if (isExist) {
      return alert("This Email IS Used");
    } else {
      allUsers.push(register);
      localStorage.setItem("users", JSON.stringify(allUsers));
      console.log("done");
    }
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-6 mt-5">
        <img
          src="https://wallpaperaccess.com/full/185289.jpg"
          className="img-fluid shadow-4 mb-5"
          alt="..."
        />
        
        <form onSubmit={handleRegister}>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                id="form3Example1"
                label="First name"
                name="firstName"
                value={register.firstName}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                id="form3Example2"
                label="Last name"
                name="lastName"
                value={register.lastName}
                onChange={(e) =>
                  setRegister({
                    ...register,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="email"
            id="form3Example3"
            label="Email address"
            name="email"
            value={register.email}
            onChange={(e) =>
              setRegister({
                ...register,
                [e.target.name]: e.target.value,
              })
            }
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form3Example4"
            label="Password"
            name="pass"
            value={register.pass}
            onChange={(e) =>
              setRegister({
                ...register,
                [e.target.name]: e.target.value,
              })
            }
          />

          <MDBBtn type="submit" className="mb-4" block>
            Register
          </MDBBtn>

          {/* <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div> */}
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

export default Register;
