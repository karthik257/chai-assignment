import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "./ItemContext";
import { ProductHeader } from "./ProductHeader";
import { ProductFooter } from "./ProductFooter";
import "./ProductList.css";


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
    let qty=0
    if(found) qty=found.qty+1
    const item = {
      id,
      name,
      price,
      image,
      qty
    };
    setSelectedItems((prev) => {
      return [...prev, item];
    });
};
  


// const [clickedImg,setClickedImg]=useState(false)
  return (
    <div>
      <ProductHeader item={data.length} />

      <div className="product-container">
        {data.map((item) => {
          return (
            <div
              className="item-individual"
              onClick={() => {
                handleItem(item);
              }}
              key={item.id}
            >
              <div>
                <img
                  src={item.image}
                  alt="product"
                  className="img-product cls"
                  // onClick={() => {
                  //   setClickedImg(prev=>!prev)
                  // }}
                  // style={clickedImg?{ border: "2px solid red" }:null}
                />
              </div>
              <div className="item-name-price">
                <div>{item.name}</div>
                <div>${item.price}</div>
              </div>
              <div className="special-design">Special Design</div>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            if (selectedItems.length > 0) {
              navigate("/checkout");
            } else {
              alert("Please select product first");
            }
          }}
          className="btn-buy"
        >
          Buy Now
        </button>
      </div>
      <ProductFooter len={ selectedItems.length}/> 
    </div>
  );
};
