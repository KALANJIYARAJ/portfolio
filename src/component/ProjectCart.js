import React from "react";

export const ProjectCart = ({ data }) => {
  console.log(data);
  return (
    <div className="col-xl-4 mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card p-3" style={{ maxWidth: "26rem" }}>
            <img
              src="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg
"
              style={{ maxWidth: "24rem", maxHeight: "16rem" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{data.projectTitle}</h5>
              <p className="card-text text-start ">{data.about}</p>
              <a href={data.link} className="btn btn-primary mt-1">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
