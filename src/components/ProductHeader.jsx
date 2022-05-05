import React from 'react'
import { GrFilter } from "react-icons/gr";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export const ProductHeader = (props) => {
  return (
    <div className="featured-container">
      <div>
        <h1>Featured</h1>
      </div>
      <div className="featured-bottom">
        <div className="item-listed">{props.item} items listed</div>
        <div className="">
          <BiSortAlt2 />
          Sort
          <IoIosArrowDown />
        </div>

        <div className="">
          <GrFilter />
          Filter
        </div>
      </div>
    </div>
  );
}


