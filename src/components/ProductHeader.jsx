import React from "react";
import { GrFilter } from "react-icons/gr";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
// import "./ProductHeader.css";
import {
  Row,
  Col
} from "react-bootstrap/";

export const ProductHeader = (props) => {
  return (
    <div
      className="mt-3 sticky-top p-4 shadow-lg bg-white rounded"
      style={{ backgroundColor: "white" }}
    >
      <Row>
        <Col>
          <h1
            className="display-4 fw-bold fs-1 "
            style={{ color: "#8687C0", cursor: "pointer" }}
          >
            Featured
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <h1
            className="h6 fw-light fs-6 text-secondary"
            style={{ cursor: "pointer" }}
          >
            {props.item} items listed
          </h1>
        </Col>
        <Col className="text-center" sm={3} xs={6}>
          <h1 className="h4 fw-normal fs-5" style={{ cursor: "pointer" }}>
            <BiSortAlt2  />
            Sort
            <IoIosArrowDown />
          </h1>
        </Col>
        <Col className="text-center" sm={3} xs={6}>
          <h1 className="h4 fw-normal fs-5" style={{ cursor: "pointer" }}>
            <GrFilter />
            Filter
          </h1>
        </Col>
      </Row>
    </div>
  );
};
