import React from "react";
import { ProjectCart } from "../component/projectCart/ProjectCart";
import { datas } from "../datas";

function Projcet() {
  return (
    <div className="container text-center">
      <br />
      <br />
      <h1>My Projects</h1>
      <br />
      <br />

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
