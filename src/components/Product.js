import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Footer } from "./Footer";

export const Product = () => {
  const [singleData, setsingleData] = useState(null);

  const { id } = useParams();

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(`https://softwium.com/api/books/${id}`);
      setsingleData(response.data);
    } catch (error) {
      console.error("Error fetching single product:", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "calc(100vh - 48px)" }}
      >
        <div className="row">
          <div className="col-md-10">
            {singleData ? (
              <div className="text-center">
                <h2>{singleData.title}</h2>
                <p className="text-muted">ISBN: {singleData.isbn}</p>
                <p>Authors: {singleData.authors}</p>
                <p>Page Count: {singleData.pageCount}</p>
              </div>
            ) : (
              <h4>Loading...</h4>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
