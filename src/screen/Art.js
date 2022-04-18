import React from "react";
import BannerSlider from "../components/BannerSlider";
import CreateBanner from "../components/CreateBanner";
import CreateSupport from "../components/CreateSupport";
import Filter from "../components/Filter";
// import CreateBanner from "../components/create/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newslatter from "../components/Newslatter";
import Products from "../components/Products";
import Recomandation from "../components/Recomandation";
import SliderC from "../components/Slider";
import TestimonialSlider from "../components/TestimonialSlider";
// import CreateSupport from "../components/create/Support";

function Art() {
  return (
    <>
      <SliderC />
      <BannerSlider />

      <Products />
      <TestimonialSlider />
      {/* <CreateSupport /> */}
      {/* <Slider />
      
      <Recomandation />
      <Newslatter /> */}
    </>
  );
}

export default Art;
