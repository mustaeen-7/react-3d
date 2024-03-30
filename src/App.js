import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logo.svg";
import IconLaptop from "./images/icon-laptop.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYoutube from "./images/icon-youtube.svg";
import "./App.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Wrapper>
      <Spline
        class="spline"
        scene="https://prod.spline.design/T9zzJwHBeNhUvNFq/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>
          Collaborate with people from all around the world. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Officiis dolores a enim vel
          animi sint
        </p>
        <button>
          <img src={IconLaptop} alt="Download" />
          Download for Windows
        </button>
      </Content>
      <Social>
        <div />
        <img src={IconTwitter} alt="Twitter" />
        <img src={IconYoutube} alt="Youtube" />
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x:hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right:auto,
      left:50%,
      margin-left:-600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.48) translateX(-50px);
    }
  }
`;
const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }
  button:hover {
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
  h1,
  button,
  p {
    margin: 0 30px 0px 100px;
  }
`;
const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0px 100px;
  padding: 0;
  list-style: none;

  li {
    list-style: none;
    margin: 0;
    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 2px solid rgba(255, 255, 255, 0);
      border-radius: 18px;
      transition: 0.8s;
    }
    a:hover {
      border: 2px solid rgba(255, 255, 255, 0.8);
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 100%,
      #aa0eb2 100%
    );
  }
`;
