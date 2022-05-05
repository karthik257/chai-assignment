import React, { useEffect, useState, useContext } from "react";
import { ItemContext } from "./ItemContext";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SliderComponent from "./SliderComponent";


export const CheckoutComponent = () => {
  const { selectedItems, setSelectedItems } = useContext(ItemContext);
  const navigate = useNavigate()
  const handlePay = () => {
    alert("Payment successful")
    navigate("/")
    setSelectedItems([])
  }

  return (
    <>
      <div className="checkout-main-container">
      <div>
        <div>
          <AiOutlineArrowLeft onClick={()=>{navigate("/")}}/>
        </div>
        <div>
          <h1>Check out</h1>
        </div>
      </div>
      {selectedItems.map((item) => {
        return (
          <div key={item.id} className="checkout-item-container">
            <div className="left-items">
              <div>{item.name}</div>
              <div>Special Design</div>
              <div> ${item.price} In stock</div>
            </div>
            <div className="right-img">
              <img src={item.image} alt="item" className="img-checkout" />
            </div>
          </div>
        );
      })}
      {/* <SliderComponent/> */}
      <div className="payment-header">
        <h2>Payment</h2>
        <h3 className="add-card">
          <AiOutlinePlus />
          &nbsp; Add New Card
        </h3>
      </div>
      <hr />
      <div className="checkout-order">
        <h4>Order</h4>
        <h4>28.00 $</h4>
      </div>
      <div className="checkout-delivery">
        <h4>Delivery</h4>
        <h4>7.20 $</h4>
      </div>
      <div className="checkout-summary">
        <h4>Summary</h4>
        <h4>35.20 $</h4>
      </div>
      <div className="btn-container">
        <button className="btn-paynow" onClick={handlePay}>Pay Now</button>
        </div>
        </div>
    </>
  );
};
