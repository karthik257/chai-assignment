import React from 'react'
import { CgHome } from "react-icons/cg";
import { BsSearch, BsCartDash } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


export const ProductFooter = (props) => {

  return (
    <div className="product-footer-container">
      <div>
        <CgHome />
      </div>
      <div>
        <BsSearch />
      </div>
      <div>
        <BsCartDash /> - { props.len}
      </div>
      <div>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
}
