import React from "react";
import book from "./img/book.jpeg";
import "../App.css";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <div id="home" className="main">
        <div
          className="container-fluid row mt-5 mb-5 "
          style={{ height: "80vh" }}
        >
          <div className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center">
            <div className="container">
              <img
                src={book}
                alt="shop"
                style={{
                  width: "80%",
                  height: "100%",
                  borderRadius: "50px",
                }}
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center">Welcome to the Book store</h1>
            <div className="container text-center">
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                aperiam, cumque dolorem nesciunt minima laudantium rerum eum
                totam et, illum consequuntur, necessitatibus dicta veritatis
                quos nihil quasi unde porro iste?
              </h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
