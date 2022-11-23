import React from "react";

const ContactF = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div style={{ backgroundImage: `url("https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, filter: `brightness(90%)` }}>
      <div className="container col-md-6" style={{ height: "75vh" }}>
        <br/> <br/>
        <h2 className="mb-3 mt-" style={{color: "black"}}>Keep In Touch With Travel Advisor ..</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name" style={{color: "black"}}>
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email" style={{color: "black"}}>
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message" style={{color: " white"}}>
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-primary mb-5" type="submit">
            {formStatus}
          </button>
          
        </form>
        
      </div>
      <br/> <br/> <br/> 
    </div>
  );
};
export default ContactF;
