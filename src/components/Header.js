import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";

import logo from "../assects/brandLogo.png";
import searchimg from "../assects/market/AstroNutzNFT.png";
import searchimg1 from "../assects/market/Axie Infinity.png";
import searchimg2 from "../assects/market/Pyromaniacs.png";
import searchimg4 from "../assects/market/The Sandbox.png";
import signinuser from "../assects/home/user.jpg";
import menubar from "../assects/home/menu.svg";
import menubarX from "../assects/menubar/cross.svg";
import arrowM from "../assects/menubar/Next Button.svg";
import arrowB from "../assects/menubar/Previous Button.svg";
import country from "../assects/home/america.jpg";
import userPink from "../assects/menubar/pinkprofile.svg";

import binance from "../assects/connect/Binance_Logo.png";
import metamask from "../assects/connect/Metamask_Logo-01.png";
import tronlink from "../assects/connect/Tronlink Wallet_Logo-01.png";
import CustomizedSwitches from "../utils/SwitchC";
import { server } from "../config";
import axios from 'axios'

function Header(props) {
  const [active, setActive] = useState("Home");
  const [isSearch, setIsSearch] = useState(null);
  const [isdropdown, setIsdropdown] = useState(false);

  const [submenus, setSubmenus] = useState("mainsub");

  useEffect(() => {
    console.log(active);
  }, [active]);

  const searchHandler = (e) => {
    setIsSearch(e.target.value);
  };

  const handleSearch = () => {
    window.location.href = "/search";
  };

  const handledropdown = () => {
    setIsdropdown(!isdropdown);
  };
  const handledropdownmenu = () => {};

  const SignOutHandler = () => {
    localStorage.setItem("logedIn", false);
  };


  const logoutHandler = async() => {
    await axios
    .post(`${server}/api/user/loginout`,{}, {
      headers: {
        Token: localStorage.getItem('Token'),
      },
    })
    .then(res=>console.log(res))
    console.log('log OUt successfully')
    const {ethereum} = window;
const accounts = await ethereum.request({method: 'eth_accounts'});
if (accounts && accounts.length > 0) {
    console.log("user is connected");
    
    await window.ethereum.disconnect();
} else {
    console.log("user not connected");
}
      window.localStorage.removeItem("Token")
      window.localStorage.removeItem("defaultAddress")
      window.localStorage.removeItem("userInfo")
      window.localStorage.removeItem("lang")
  };



  // useEffect(()=>{
  //   userInfo()
  // },[userInfo])

  return (
    // <div className="navbar">
    <nav class="wrapper navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <Link className={`Link navbar-brand me-auto`} to="/">
          <img
            style={{ width: "138px", height: "60px" }}
            src={logo}
            alt="alt"
          />
        </Link>

        <div className="search-wrap">
          <input
            style={{ position: "relative", width: "200px!important" }}
            className="search"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            onChange={(e) => searchHandler(e)}
            placeholder="搜索收藏品和用户资料"
          />

          <div
            className={`search-list `}
            style={{
              display: isSearch ? "block" : "none",
            }}
          >
            <div class="card">
              <ul class="list-group list-group-flush">
                <li className="search-item">收藏品</li>

                {/* items */}
                <Link
                  onClick={() => setIsSearch(null)}
                  className="Link"
                  to="/searchItem"
                >
                  <div className="search-list-item">
                    <div className="search-author">
                      <img src={searchimg} alt="" />
                      <p>Pyromaniacs</p>
                    </div>
                    <span className="items">1,375 items</span>
                  </div>
                </Link>
                {/* items */}
                {/* items */}
                <Link
                  onClick={() => setIsSearch(null)}
                  className="Link"
                  to="/searchItem"
                >
                  <div className="search-list-item">
                    <div className="search-author">
                      <img src={searchimg1} alt="" />
                      <p>alientelevision</p>
                    </div>
                    <span className="items">1,084 items</span>
                  </div>
                </Link>
                <Link
                  onClick={() => setIsSearch(null)}
                  className="Link"
                  to="/searchItem"
                >
                  <div className="search-list-item">
                    <div className="search-author">
                      <img src={searchimg2} alt="" />
                      <p>OctoAliens</p>
                    </div>
                    <span className="items">1,084 items</span>
                  </div>
                </Link>
                {/* items */}
                <li className="search-item">用户</li>

                {/* items */}
                <Link
                  onClick={() => setIsSearch(null)}
                  className="Link"
                  to="/user"
                >
                  <div className="search-list-item">
                    <div className="search-author">
                      <img src={searchimg4} alt="" />
                      <p>Ne-Yance</p>
                    </div>
                  </div>
                  {/* items */}
                </Link>
                {/* items */}
                <Link
                  onClick={() => setIsSearch(null)}
                  className="Link"
                  to="/user"
                >
                  <div className="search-list-item">
                    <div className="search-author">
                      <img src={logo} alt="" />
                      <p>StanEmi</p>
                    </div>
                  </div>
                  {/* items */}
                </Link>
                {/* items */}
                <Link
                  onClick={() => setIsSearch(null)}
                  className="Link"
                  to="/user"
                >
                  <div className="search-list-item">
                    <div className="search-author">
                      <img src={signinuser} alt="" />
                      <p>NopGG</p>
                    </div>
                  </div>
                  {/* items */}
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <img
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              // marginRight: "10px",
            }}
            src={menubar}
            alt=""
          />
        </button>
        <div
          class="collapse navbar-collapse navbarMenu"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav alcauto  mb-2 mb-lg-0">
            <li class="nav-item" style={{ position: "relative" }}>
              <a class="nav-link active" aria-current="page">
                <Link
                  onClick={() => setActive("market")}
                  className={`Link  ${active === "market" && "active"}`}
                  to="/market"
                >
                  市场
                </Link>
              </a>

              {/* dropdownmenu */}
              <ul class="dropdown">
                {/* <li>
                  <a href="#">Sub-1</a>
                </li>
                <li>
                  <a href="#">Sub-2</a>
                </li>
                <li>
                  <a href="#">Sub-3</a>
                </li> */}
                <li class="nav-item" onClick={() => setActive("page2")}>
                  <a
                    class="nav-link active"
                    aria-current="page"
                    // style={{ color: "red" }}
                  >
                    <Link
                      onClick={() => setActive("create")}
                      className={`Link ${active === "create" && "active"}`}
                      // className={`Link ${active === "page2" && "active"}`}
                      // to="/market"
                      to="/art"
                    >
                      Art
                    </Link>
                  </a>
                </li>
                <li class="nav-item " onClick={() => setActive("page2")}>
                  <a
                    class="nav-link active"
                    aria-current="page"
                    // style={{ color: "red" }}
                  >
                    <Link
                      onClick={() => setActive("create")}
                      className={`Link ${active === "create" && "active"}`}
                      // className={`Link ${active === "page2" && "active"}`}
                      to="/music"
                    >
                      music
                    </Link>
                  </a>
                </li>
                <li class="nav-item " onClick={() => setActive("page2")}>
                  <a
                    class="nav-link active"
                    aria-current="page"
                    // style={{ color: "red" }}
                  >
                    <Link
                      onClick={() => setActive("create")}
                      className={`Link ${active === "create" && "active"}`}
                      // className={`Link ${active === "page2" && "active"}`}
                      to="/game"
                    >
                      game
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item " onClick={() => setActive("page2")}>
              <a
                class="nav-link active"
                aria-current="page"
                // style={{ color: "red" }}
              >
                <Link
                  onClick={() => setActive("connect")}
                  className={`Link ${active === "connect" && "active"}`}
                  // className={`Link ${active === "page2" && "active"}`}
                  to="/connect"
                >
                  创建
                </Link>
              </a>
            </li>
            <li class="nav-item " onClick={() => setActive("blog")}>
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "red" }}
              >
                <Link
                  // className={`Link`}
                  className={`Link ${active === "blog" && "active"}`}
                  to="/blog"
                >
                  blog
                </Link>
              </a>
            </li>
            <li class="nav-item " onClick={() => setActive("profile")}>
              <a
                onClick={SignOutHandler}
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "red" }}
              >
                <div className="img">
                  <Link className={`Link `} to="/profile">
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                      src={signinuser}
                      alt=""
                    />
                  </Link>
                </div>
              </a>
            </li>
            <li
              class="nav-item "
              onClick={() => setActive("About")}
              style={{
                marginLeft: "30px",
              }}
            >
              {localStorage.getItem("logedIn") === "true" ? (
                <a
                  onClick={SignOutHandler}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "red" }}
                >
                  <div className="img">
                    <Link className={`Link `} to="/signin">
                      <img
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                          // marginRight: "10px",
                        }}
                        src={country}
                        alt=""
                      />
                    </Link>
                  </div>
                </a>
              ) : (
                <div className="img">
                  <Link className={`Link `} to="/signin">
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        // marginRight: "10px",
                      }}
                      src={country}
                      alt=""
                    />
                  </Link>
                </div>
                // <a
                //   class="nav-link active"
                //   aria-current="page"
                //   href="#"
                //   style={{ color: "red" }}
                // >
                //   <Link className={`Link `} to="/signin">
                //     Sign In
                //   </Link>
                // </a>
              )}
            </li>
            <li
              class="nav-item "
              style={{
                marginLeft: "30px",
              }}
            >
              <div className="img">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    // marginRight: "10px",
                  }}
                  onClick={() => handledropdown()}
                  src={isdropdown ? menubarX : menubar}
                  alt=""
                />
              </div>
              {isdropdown && (
                <div className="nav-sub">
                  <div class="card">
                    <div class="card-header"></div>
                    {submenus === "mainsub" ? (
                      <div class="card-body">
                        <div className="profile-settings">
                          <p className="profile-item">我的钱包</p>
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              // marginRight: "10px",
                            }}
                            onClick={() => {
                              setSubmenus("coins");
                              handledropdownmenu();
                            }}
                            src={arrowM}
                            alt="image"
                          />
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">每日挑战</p>
                          <Link
                            to="/setting"
                            onClick={() => {
                              setIsdropdown(false);
                            }}
                          >
                            <img
                              style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "50%",
                                // marginRight: "10px",
                              }}
                              src={arrowM}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">奖励</p>
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              // marginRight: "10px",
                            }}
                            onClick={() => handledropdownmenu()}
                            src={arrowM}
                            alt=""
                          />
                        </div>

                        {/* login section */}
                        <div className="profile-settings">
                          <p className="profile-item">登出</p>
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              // marginRight: "10px",
                            }}
                            onClick={ logoutHandler}
                            src={arrowM}
                            alt=""
                          />
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">设置</p>
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              // marginRight: "10px",
                            }}
                            onClick={() => handledropdownmenu()}
                            src={arrowM}
                            alt=""
                          />
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">夜间模式</p>
                          <CustomizedSwitches />
                        </div>
                      </div>
                    ) : submenus === "coins" ? (
                      <Coins
                        setSubmenus={setSubmenus}
                        handledropdownmenu={handledropdownmenu}
                      />
                    ) : submenus === "wallets" ? (
                      // wallets section
                      <Wallet
                        setSubmenus={setSubmenus}
                        handledropdownmenu={handledropdownmenu}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default Header;

function Wallet({ setSubmenus, handledropdownmenu }) {
  return (
    <div>
      <p>user wallets</p>
      <img
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          // marginRight: "10px",
        }}
        onClick={() => {
          setSubmenus("mainsub");
          handledropdownmenu();
        }}
        src={arrowB}
        alt="image"
      />
    </div>
  );
}

function Coins({ setSubmenus, handledropdownmenu }) {
  return (
    <div>
      <div class="card-body">
        <div className="profile-settings">
          <p className="profile-item">
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                marginRight: "30px",
                // marginRight: "10px",
              }}
              onClick={() => {
                setSubmenus("coins");
                handledropdownmenu();
              }}
              src={userPink}
              alt="image"
            />
            我的钱包
          </p>
        </div>
        <p className="profil-des">连接与我们提供可用的钱包 或创建一个新的</p>

        {/* coins div `` */}
        {/* coin1 */}
        <div className="coins">
          <div className="coin-div d-flex justify-content-between">
            <p className="profile-item">
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "30px",
                  // marginRight: "10px",
                }}
                onClick={() => {
                  setSubmenus("coins");
                }}
                src={binance}
                alt="image"
              />
              我的钱包
            </p>
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                // marginRight: "10px",
              }}
              onClick={() => {
                setSubmenus("wallets");
              }}
              src={arrowM}
              alt="image"
            />
          </div>
          {/* coin1 */}
          <div className="coin-div d-flex justify-content-between">
            <p className="profile-item">
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "30px",
                }}
                onClick={() => {
                  setSubmenus("coins");
                }}
                src={metamask}
                alt="image"
              />
              我的钱包
            </p>
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                // marginRight: "10px",
              }}
              onClick={() => {
                setSubmenus("wallets");
              }}
              src={arrowM}
              alt="image"
            />
          </div>
          {/* coin1 */}
          <div className="coin-div d-flex justify-content-between">
            <p className="profile-item">
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "30px",
                  // marginRight: "10px",
                }}
                onClick={() => {
                  setSubmenus("wallets");
                }}
                src={tronlink}
                alt="image"
              />
              我的钱包
            </p>
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                // marginRight: "10px",
              }}
              onClick={() => {
                setSubmenus("wallets");
              }}
              src={arrowM}
              alt="image"
            />
          </div>
        </div>
        <div className="coin-footer d-flex justify-content-between">
          <p className="profile-item">显示更多选项</p>
        </div>
      </div>
      <div className="submenu-container">
        <img
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            // marginRight: "10px",
          }}
          onClick={() => {
            setSubmenus("wallets");
            handledropdownmenu();
          }}
          src={arrowB}
          alt="image"
        />
      </div>
    </div>
  );
}
