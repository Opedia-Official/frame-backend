import { Grid } from "@mui/material";
import React, { useState } from "react";

import profile from "../assects/menubar/The Sandbox.png";
import background from "../assects/menubar/AstroNutzNFT.png";

import TransferList from "../utils/ListTransfer";

function Setting() {
  const [seletedNav, setSeletedNav] = useState("账户");
  return (
    <div className="wrapper setting-main">
      <Grid container spacing={1}>
        <Grid item md={2}>
          <div className="setting-sidebar">
            <h4>设置</h4>
            {/* options */}
            <div className="btns">
              {["账户", "通知", "优惠", "帮助", "收益"].map((i) => (
                <button
                  onClick={() => setSeletedNav(i)}
                  className={`sidebar-btn ${i == seletedNav ? "active" : ""}  `}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item md={10}>
          {seletedNav === "账户" && <Account />}
          {seletedNav === "通知" && <Notice />}
          {seletedNav === "优惠" && <Discount />}
          {seletedNav === "帮助" && <Help />}
          {seletedNav === "收益" && <Income />}
        </Grid>
      </Grid>
    </div>
  );
}

export default Setting;

function Account() {
  return (
    <div className="account">
      <h1>账户设置</h1>
      <Grid container>
        <Grid item md={6}>
          <small>用户名称</small>
          <input type="text" placeholder="Elvis Khoo" />
          <small>个人简介</small>
          <input
            type="text"
            placeholder="Mind Blowing NFT Creator Let Us Grow Together!"
          />
          <small>电子邮件</small>
          <input type="text" placeholder="elviskhoocreative@gmail.com" />
          <small>钱包地址</small>
          <input
            type="text"
            placeholder="0xA678Saa5b4a7bapsm68caf0bfab93d3ljaP58d1f"
          />
          <button className="submit">Submit</button>
        </Grid>
        <Grid item md={6} className="px-5">
          <div className="images d-flex justify-content-between">
            <div className="img">
              <p className="text-center">Profile image</p>
              <img width={200} height={200} src={profile} alt="" />
            </div>
            <div className="img">
              <p className="text-center">Background image</p>
              <img width={200} height={200} src={background} alt="" />
            </div>
          </div>

          <p className="pt-md-5">账户链接</p>
          <div className="social">
            <input type="text" placeholder="Elvis Khoo" />
            <input type="text" placeholder="Elvis Khoo" />
            <input type="text" placeholder="Elvis Khoo" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
function Income() {
  return <div>Income</div>;
}
function Help() {
  return <div>Help</div>;
}
function Discount() {
  return <div>Discount</div>;
}
function Notice() {
  return (
    <div className="account">
      <h1>账户设置</h1>
      <Grid container>
        <Grid item md={6}>
          <TransferList />

          <small>钱包地址</small>
          <input
            type="text"
            placeholder="0xA678Saa5b4a7bapsm68caf0bfab93d3ljaP58d1f"
          />
          <button className="submit">Submit</button>
        </Grid>
        <Grid item md={6} className="px-5">
          <TransferList />
        </Grid>
      </Grid>
    </div>
  );
}
