import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact_page = () => {
  const handleClick = () => {
    alert("Message Sent");
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rt96k9c",
        "template_zbzb3r1",
        e.target,
        "user_O6syUzpkaDVtAL4X8Fb6E"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="container">
      <div className="row spacing">
        <div className="col center">
          <h1>Contact Jazzy's Team!</h1>
        </div>
      </div>
      <div className="row spacing">
        <div className="col">
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div>
              <label>Name</label>
              <input class="form-control" type="text" name="user_name" />
              <small id="emailHelp" class="form-text text-muted">
                Please enter your First and Last Name
              </small>
            </div>
            <div>
              <label>Email</label>
              <input class="form-control" type="email" name="user_email" />
              <small id="emailHelp" class="form-text text-muted">
                Enter your email
              </small>
            </div>
            <div>
              <label>Message</label>
              <textarea class="form-control" name="message" />
              <small id="emailHelp" class="form-text text-muted">
                Enter your question or concern
              </small>
            </div>
            <div className="tiny-spacing">
              <button
                type="submit"
                onClick={handleClick}
                className=" btn btn-outline-primary btn-lg btn-block">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_page;
