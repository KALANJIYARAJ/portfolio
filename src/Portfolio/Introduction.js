import React from "react";

function Introduction() {
  return (
    <div className="container text-center mt-5">
      <div
        className="row align-items-center bg-light"
        style={{ padding: "0px" }}
      >
        <div className="col-lg-8">
          <img
            src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-lg-4 mt-3 ">
          <div className="row   ">
            <div className="col-12">
              <div className="card-body">
                <h1 className="card-title">Hi i am Kalanjiya Raj M</h1>
                <br />
                <h3 className="card-title">
                  I am a Front-End & Back-End / Full-Stack Developer.
                </h3>
                <br />
                <br />
                <div className="row">
                  <div className="col-12">
                    <a
                      href="https://stackoverflow.com/users/20807131/raj"
                      target="_blank"
                    >
                      <img
                        className="me-2"
                        alt="stackoverflow.com"
                        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"
                      />
                    </a>
                    {/* <a
                      href="https://www.instagram.com/invites/contact/?i=zlybgkgymtqn&utm_content=4gucicu"
                      target="_blank"
                    >
                      <img
                        alt="instagram.com"
                        src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"
                      />
                    </a> */}
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
                    </a>
                  </div>
                  <br />
                  <br />

                  <div className="col-12">
                    <a
                      href="https://docs.google.com/document/d/1_gWo4BlB1qtiB6GuaXuC2EdhW0dLie9m/edit?usp=share_link&ouid=104346778547040128571&rtpof=true&sd=true"
                      className="btn btn-primary mt-1"
                      style={{ width: "11rem" }}
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
