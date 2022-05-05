import React, { useEffect, useState, useContext } from "react";
import { ItemContext } from "./ItemContext";
import {  AiOutlinePlus } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SliderComponent from "./SliderComponent";

export const CheckoutComponent = () => {
  const { selectedItems, setSelectedItems } = useContext(ItemContext);
  const navigate = useNavigate();
  const handlePay = () => {
    alert("Payment successful... Redirecting to Home");
    navigate("/");
    setSelectedItems([]);
  };
  const [total, setTotal] = useState(0);
const [data,setData] = useState([])

  useEffect(() => {
    function getSum() {
      let sum = 0;
      for (let i = 0; i < selectedItems.length; i++) {
        sum += selectedItems[i].price;
      }
      setTotal(sum);
    }
    getSum();
    console.log(selectedItems);
    const group = {};

    selectedItems.forEach((e) => {
      const o = (group[e.name] = group[e.name] || { ...e, qty: 0 });
      o.qty += e.qty;
    });

    var res = Object.values(group);
    console.log(res);
    setData(res)


  }, [selectedItems]);



  const devlieryCharge = 7.2;
  return (
    <>
      <div className="checkout-main-container">
        <div>
          <div style={{ cursor: "pointer", fontSize: "2rem" }}>
            <HiOutlineArrowNarrowLeft
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div>
            <h1>Check out</h1>
          </div>
        </div>
        {data.map((item) => {
          return (
            <div key={item.id} className="checkout-item-container">
              <div className="left-items">
                <div style={{ padding: "5px", cursor: "pointer" }}>
                  {item.name} x {item.qty+1}
                </div>
                <div style={{ padding: "5px", cursor: "pointer" }}>
                  Special Design
                </div>
                <div style={{ padding: "5px", cursor: "pointer" }}>
                  {" "}
                  ${item.price} In stock
                </div>
              </div>
              <div className="right-img">
                <img
                  src={item.image}
                  alt="item"
                  className="img-checkout"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          );
        })}
        <div className="payment-header">
          <h2>Payment</h2>
          <h3 className="add-card" style={{ cursor: "pointer" }}>
            <AiOutlinePlus />
            &nbsp; Add New Card
          </h3>
        </div>
        <SliderComponent />

        <hr />
        <br />
        <div className="checkout-order">
          <h4>Order</h4>
          <h4>{total} $</h4>
        </div>
        <div className="checkout-delivery">
          <h4>Delivery</h4>
          <h4>{devlieryCharge} $</h4>
        </div>
        <div className="checkout-summary">
          <h4>Summary</h4>
          <h4>{Math.ceil(total + devlieryCharge)} $</h4>
        </div>
        <div className="btn-container">
          <button className="btn-paynow" onClick={handlePay}>
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
};
