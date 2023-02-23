import React from "react";
import "../introduction/introduction.css";
import { imgData } from "../../imgData";
function Introduction() {
  return (
    // <div className="container text-center mt-5">
    //   <div
    //     className="row align-items-center bg-light"
    //     style={{ padding: "0px" }}
    //   >
    //     <div className="col-lg-8">
    //       <img
    //         src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         className="img-fluid"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="col-lg-4 mt-3 ">
    //       <div className="row   ">
    //         <div className="col-12">
    //           <div className="card-body">
    //             <h1 className="card-title">Hi, I am Kalanjiya Raj M</h1>
    //             <br />
    //             <h3 className="card-title">I am a Full-Stack Developer.</h3>
    //             <br />
    //             <br />
    //             <div className="row">
    //               <div className="col-12">
    //                 <a
    //                   href="https://stackoverflow.com/users/20807131/raj"
    //                   target="_blank"
    //                 >
    //                   <img
    //                     className="me-2"
    //                     alt="stackoverflow.com"
    //                     src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"
    //                   />
    //                 </a>
    //                 {/* <a
    //                   href="https://www.instagram.com/invites/contact/?i=zlybgkgymtqn&utm_content=4gucicu"
    //                   target="_blank"
    //                 >
    //                   <img
    //                     alt="instagram.com"
    //                     src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"
    //                   />
    //                 </a> */}
    //                 <a href="https://github.com/KALANJIYARAJ" target="_blank">
    //                   <img
    //                     className="me-2"
    //                     alt="github.com"
    //                     src="https://img.icons8.com/doodle/40/000000/github--v1.png"
    //                   />
    //                 </a>
    //                 <a
    //                   href="https://www.linkedin.com/in/kalanjiya-raj-130385169/"
    //                   target="_blank"
    //                 >
    //                   <img
    //                     className="me-2"
    //                     alt="www.linkedin.com"
    //                     src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
    //                   />
    //                 </a>
    //               </div>
    //               <br />
    //               <br />

    //               <div className="col-12">
    //                 <a
    //                   href="https://drive.google.com/file/d/1D3FHexFQBXtCjdND5irGg6RdFbfgElXe/view?usp=sharing"
    //                   target={"_blank"}
    //                   className="btn btn-primary mt-1"
    //                   style={{ width: "11rem" }}
    //                 >
    //                   Resume
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className="introContainer">
        <div className="introBox1">
          <div className="introBox1Icon">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <h3 class="introBox1Name">Hi,I'm KalanjiyaRaj</h3>
          <h4 className="introBox1Postion">Full Stack-Developer</h4>
          <p className="introBox1Study">
            I have completed my MERN stack development course and I am eager to
            apply my technical skills to create engaging web applications.
            Currently, I am looking for a job in which I got trained in
            technologies like React Js, Node JS and MongoDB.
          </p>
        </div>
        <div className="introBox2">
          <img
            src={`${imgData.img}/Raj-Photo.png`}
            alt="my-photo"
            className="introBox2Img"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
