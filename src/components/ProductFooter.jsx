import React from "react";
import { CgHome } from "react-icons/cg";
import { BsSearch, BsCartDash } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import "./ProductFooter.css";
import { Row, Col } from "react-bootstrap/";

export const ProductFooter = (props) => {
  return (
    <>
      <Row className="text-center">
        <Col sm={3} xs={6}>
          <p className="fw-bold fs-2 text-black">
            {" "}
            <CgHome style={{ cursor: "pointer" }} />
          </p>
        </Col>
        <Col sm={3} xs={6}>
          <p className="fw-bold fs-2 text-secondary">
            {" "}
            <BsSearch style={{ cursor: "pointer" }} />
          </p>
        </Col>
        <Col sm={3} xs={6}>
          <p className="fw-bold fs-2 text-secondary">
            <span className="cart">
              <BsCartDash
                className="icon disabled"
                style={{ cursor: "pointer" }}
              />
              <span className="cart-count">{props.len}</span>
            </span>
          </p>
        </Col>
        <Col sm={3} xs={6}>
          <p className="fw-bold fs-2 text-secondary">
            {" "}
            <HiOutlineDotsHorizontal style={{ cursor: "pointer" }} />
          </p>
        </Col>
      </Row>
    </>
  );
};

