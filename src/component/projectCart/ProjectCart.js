import React from "react";
import "../projectCart/projectCart.css";
import { imgData } from "../../imgData";

export const ProjectCart = ({ data }) => {
  const images = imgData.img;

  return (
    <div className="col-xl-4 mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card p-3" style={{ maxWidth: "26rem" }}>
            <img
              src={`${images}/${data.img}`}
              style={{
                maxWidth: "24rem",
                maxHeight: "18rem",
              }}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">{data.projectTitle}</h4>
              <p className="card-text text-start ">{data.about}</p>
              <div className="btn-container">
                <a
                  href={data.frontEnd}
                  className="btn-class btn btn-primary"
                  target={"_blank"}
                >
                  FrontEnd
                </a>
                <a
                  href={data.backEnd}
                  className="btn-class btn btn-primary"
                  target={"_blank"}
                >
                  BackEnd
                </a>
                <a
                  href={data.project}
                  className="btn-class btn btn-primary"
                  target={"_blank"}
                >
                  View Projcet
                </a>
              </div>
              <div className="tech-container">
                {data.tech.map((techImg) => {
                  return (
                    <img
                      src={`${images}/${techImg}`}
                      alt="tech"
                      className="tech-img"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
