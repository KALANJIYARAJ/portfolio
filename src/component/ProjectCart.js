import React from "react";

export const ProjectCart = ({ data }) => {
  const images =
    "http://localhost:3000/images/" ||
    "https://flourishing-crumble-8d472d.netlify.app/images";

  return (
    <div className="col-xl-4 mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card p-3" style={{ maxWidth: "24rem" }}>
            <img
              src={`${images}/${data.img}`}
              style={{ maxWidth: "22rem", maxHeight: "16rem" }}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">{data.projectTitle}</h4>
              <p className="card-text text-start ">{data.about}</p>
              <a
                href={data.link}
                className="btn btn-primary mt-1"
                target={"_blank"}
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
