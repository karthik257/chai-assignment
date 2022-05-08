import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "./ItemContext";
import { ProductHeader } from "./ProductHeader";
import { ProductFooter } from "./ProductFooter";
// import "./ProductList.css";
import { Row, Col, Image, Button } from "react-bootstrap/";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const { selectedItems, setSelectedItems } = useContext(ItemContext);

  const navigate = useNavigate();

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleItem = ({ id, name, price, image }) => {
    let found = selectedItems.findLast((itemId) => itemId.id === id);
    let qty = 0;
    if (found) qty = found.qty + 1;
    const item = {
      id,
      name,
      price,
      image,
      qty,
    };
    setSelectedItems((prev) => {
      return [...prev, item];
    });
  };

  return (
    <div>
      <ProductHeader item={data.length} />
      <Row className="">
        {data.map((item) => {
          return (
            <Col xs={12} sm={6} lg={4} key={item.id}>
              <div
                className="mt-5 shadow-lg p-3 mb-5 bg-white rounded"
                onClick={() => {
                  handleItem(item);
                }}
                style={{ minHeight: "500px", cursor: "pointer" }}
              >
                <div>
                  <Image
                    src={item.image}
                    alt="product"
                    className="rounded fluid"
                    style={{ height: "350px", width: "100%" }}
                  />
                </div>
                <Row>
                  <Col className="text-start fw-bold fs-5 text-dark">
                    {item.name}
                  </Col>
                  <Col className="text-end fw-normal fs-6 text-dark">
                    ${item.price}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-start fw-light fs-6 text-secondary">
                    Special Design
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            className="w-50 pt-3 pb-3 m-5"
            onClick={() => {
              if (selectedItems.length > 0) {
                navigate("/checkout");
              } else {
                alert("Please select product first");
              }
            }}
            style={{ backgroundColor: "#8687C0", cursor: "pointer" }}
          >
            Buy Now
          </Button>
        </Col>
      </Row>

      <ProductFooter len={selectedItems.length} />
    </div>
  );
};
