import React, { Component } from "react";
import Slider from "react-slick";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "./SliderComponent.css";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="visa-container">
            <div className="visa-title">VISA</div>
            <div className="visa-number">
              <HiOutlineDotsHorizontal />
              <HiOutlineDotsHorizontal />
              <HiOutlineDotsHorizontal />
              <span>3282</span>
            </div>
            <div className="visa-holder-heading">
              <div>Card Holder</div>
              <div>Expires</div>
            </div>
            <div className="visa-holder-details">
              <div>Avcan Doganlar</div>
              <div>12/23</div>
            </div>
          </div>
          <div className="visa-container visa-pink">
            <div className="visa-title">RUPAY</div>
            <div className="visa-number">
              <HiOutlineDotsHorizontal />
              <HiOutlineDotsHorizontal />
              <HiOutlineDotsHorizontal />
              <span>4160</span>
            </div>
            <div className="visa-holder-heading">
              <div>Card Holder</div>
              <div>Expires</div>
            </div>
            <div className="visa-holder-details">
              <div>John Doe</div>
              <div>09/25</div>
            </div>
          </div>
          <div className="visa-container visa-blue">
            <div className="visa-title">Master</div>
            <div className="visa-number">
              <HiOutlineDotsHorizontal />
              <HiOutlineDotsHorizontal />
              <HiOutlineDotsHorizontal />
              <span>5120</span>
            </div>
            <div className="visa-holder-heading">
              <div>Card Holder</div>
              <div>Expires</div>
            </div>
            <div className="visa-holder-details">
              <div>Smith John</div>
              <div>05/27</div>
            </div>
          </div>
        </Slider>
        <br />
        <br />
      </div>
    );
  }
}
