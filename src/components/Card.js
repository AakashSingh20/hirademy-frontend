import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, count, id }) => {
  return (
    <>
      <div className="card" style={{ width: "350px" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <Link to={`/product/${id}`}>
              <h5
                className="card-title"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                {name}
              </h5>
            </Link>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <h6>{count} Pages</h6>
          </div>
        </div>
      </div>
    </>
  );
};
