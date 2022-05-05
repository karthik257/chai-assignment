import React from 'react'
import { GrFilter } from "react-icons/gr";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export const ProductHeader = (props) => {
  return (
    <div className="featured-container">
      <div>
        <h1 style={{ cursor: "pointer" }}>Featured</h1>
      </div>
      <div className="featured-bottom">
        <div className="item-listed">{props.item} items listed</div>
        <div style={{cursor:"pointer"}}>
          <BiSortAlt2 />
          Sort
          <IoIosArrowDown />
        </div>

        <div style={{cursor:"pointer"}}>
          <GrFilter />
          Filter
        </div>
      </div>
    </div>
  );
}


