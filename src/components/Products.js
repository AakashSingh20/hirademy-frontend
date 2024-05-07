import React from "react";
import { Card } from "./Card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Products = () => {
  const [books, setbooks] = useState([]);

  const fetchBooks = async () => {
    await axios.get("https://softwium.com/api/books").then((res) => {
      // console.log(res.data);
      setbooks(res.data);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className=" mt-2" style={{ marginLeft: "40px", color: "#ef233c" }}>
        <h2>Books</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            style={{
              padding: "20px",
            }}
          >
            <div
              className="container"
              style={{
                height: "100%",
                overflowY: "auto",
              }}
            >
              <div className="row">
                {books.length > 0 ? (
                  <>
                    {books.map((item, num) => {
                      return (
                        <div
                          className="col-md-4 d-flex align-items-center justify-content-center mt-4"
                          key={num}
                        >
                          <Card
                            name={item.title}
                            count={item.pageCount}
                            id={item.id}
                          />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <h3> Loading...</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
