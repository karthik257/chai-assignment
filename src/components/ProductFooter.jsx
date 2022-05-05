import React from 'react'
import { CgHome } from "react-icons/cg";
import { BsSearch, BsCartDash } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "./ProductFooter.css";


export const ProductFooter = (props) => {

  return (
    <div className="product-footer-container">
      <div style={{ cursor: "pointer" }}>
        <CgHome />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsSearch />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsCartDash /> - {props.len}
      </div>
      <div style={{ cursor: "pointer" }}>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
}
