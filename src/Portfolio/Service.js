import React from "react";

function Service() {
  return (
    <div className="container text-center">
      <br />
      <br />
      <h1>Services</h1>
      <br />
      <br />
      <h4 className="text-start">What I Built</h4>
      
      <div className="row justify-content-center">
        <div className="col-lg-12 mt-3">
          <div className="row justify-content-between">
            <div className="col-lg-4 m-3">
              <div className="card" style={{ maxWidth: "18rem" }}>
                <img
                  src="https://media.istockphoto.com/id/1155611214/vector/front-end-concept-line-icon-simple-element-illustration-front-end-concept-outline-symbol.jpg?s=612x612&w=0&k=20&c=irFBMxVt-T10-toMQ6Tew76hDd-yHK0J7pNzJbdeOIY="
                  className="card-img-top img-fluid"
                  alt="frondend-icon..."
                />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-start">
                    Some quick example text to build on the card title and make
                    up the bulk of the card
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a><br/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-3">
              <div className="card" style={{ maxWidth: "18rem" }}>
                <img
                  src="https://media.istockphoto.com/id/1155611213/vector/back-end-concept-line-icon-simple-element-illustration-back-end-concept-outline-symbol.jpg?s=612x612&w=0&k=20&c=nILgaqfnJ2llXmaz6v8AfK84VHCqEaQWfzaiiZf0gqE="
                  className="card-img-top img-fluid"
                  alt="backend-icon..."
                />
                <div className="card-body">
                  <p className="card-text text-start">
                    Some quick example text to build on the card title and make
                    up the bulk of the card
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Service;
