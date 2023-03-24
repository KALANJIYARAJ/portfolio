import React from "react";
import { config } from "../../config";
import "../introduction/introduction.css";

function Introduction() {
  return (
    <div className="introContainer">
      <div className="introWrapper">
        <div className="introBox1">
          <img
            className="introBoxImg"
            src={`${config.img}/Raj-Photo.png`}
            alt="Raj-Photo"
          />
        </div>
        <div className="introBox2">
          <h3 className="introBox2Name">Hi, I'm KalanjiyaRaj</h3>
          <h3 className="introBox2Work">I am a Full-Stack Developer</h3>
          <p className="introBox2Details">
            I have completed my MERN stack development course and I am eager to
            apply my technical skills to create engaging web applications.
            Currently, I am looking for a job in which I got trained in
            technologies like React Js, Node JS and MongoDB.
          </p>
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
          <div className="introBox2BtnContainer">
            <a
              href="https://drive.google.com/file/d/1_EMjPbaTvHzStYtaSBsbi8oH40Iv9iYA/view?usp=sharing"
              className="introBox2Btn"
              target={"_blank"}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
