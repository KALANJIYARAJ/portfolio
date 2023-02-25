import axios from "axios";
import React, { useState } from "react";
import { config } from "../../config";
import "../contact/contact.css";

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const values = { name, email, message };

  const sentMessage = async () => {
    try {
      console.log(values);
      const sentMail = await axios.post(`${config.api}/mail`, values);
      alert(sentMail.data.message);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container">
      <br />
      <br />
      <h1 className="text-center p-3">Contact</h1>
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-lg-6 p-3">
          <h3>Connect with me</h3>
          <p>
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>

          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setName(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control"
                rows="3"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-dark" onClick={() => sentMessage()}>
              Send
            </button>
          </form>
        </div>
        <div className="col-lg-6 p-3 text-end">
          <h1>Email</h1>
          <a href="mailto:kalanjiyaraj01@gmail.com">kalanjiyaraj01@gmail.com</a>
          <br />
          <br />
          <br />
          <h1>Address</h1>
          <p>
            Ramapuram, Chennai-600087
            <br />
            Tamil Nadu
            <br />
            India
          </p>
          <br />
          <br />
          <h1>Social</h1>
          {/* <a
            href="https://stackoverflow.com/users/20807131/raj"
            target="_blank"
          >
            <img
              className="me-2"
              alt="stackoverflow.com"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"
            />
          </a>

          <a href="https://github.com/KALANJIYARAJ" target="_blank">
            <img
              className="me-2"
              alt="github.com"
              src="https://img.icons8.com/doodle/40/000000/github--v1.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kalanjiya-raj-130385169/"
            target="_blank"
          >
            <img
              className="me-2"
              alt="www.linkedin.com"
              src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
            />
          </a> */}
          <div className="introBox2IconContainer">
            <a
              className="introBox2IconContainerLink"
              href="https://github.com/KALANJIYARAJ"
              target={"_blank"}
            >
              <img
                className="introBox2IconContainerLinkImg"
                src={`${config.img}/github.png`}
                alt="logo"
              />
            </a>

            <a
              className="introBox2IconContainerLink"
              href="https://www.linkedin.com/in/kalanjiya-raj-130385169/"
              target={"_blank"}
            >
              <img
                className="introBox2IconContainerLinkImg"
                src={`${config.img}/linkedin.png`}
                alt="logo"
              />
            </a>

            <a
              className="introBox2IconContainerLink"
              href="https://stackoverflow.com/users/20807131/raj"
              target={"_blank"}
            >
              <img
                className="introBox2IconContainerLinkImg"
                src={`${config.img}/stack-overflow.png`}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Contact;
