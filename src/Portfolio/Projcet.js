import React from "react";
import { ProjectCart } from "../component/ProjectCart";
import { datas } from "../datas";

function Projcet() {
  return (
    <div className="container text-center">
      <br />
      <br />
      <h1>Projects</h1>
      <br />
      <br />
      <h4 className="text-start">What I Built</h4>

      <div className="row justify-content-start">
        {datas.map((data) => {
          return <ProjectCart data={data} />;
        })}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Projcet;
