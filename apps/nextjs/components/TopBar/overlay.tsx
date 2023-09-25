// create overlay for topbar
import React, { useEffect } from "react";
import Link from "next/link";
import { MenuButton } from "./menuButton";

const menuButtonStyle = {
  marginLeft: "2rem",
};

const Overlay = ({ isOpen, toggleNav }: any) => {
  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
      <div className="nav-toggle" onClick={toggleNav}>
        {/* <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div> */}
        <MenuButton
          isOpen={isOpen}
          onClick={toggleNav}
          strokeWidth="8"
          color="#484979"
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          width="24"
          height="24"
          style={menuButtonStyle}
        />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        /* CSS-in-JS for styling */
        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }

        .mobile-nav.open {
          transform: translateX(0);
        }

        .nav-toggle {
          position: absolute;
          cursor: pointer;
          right: 0;
          padding: 20px;
          top: 20px;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: #333;
          margin: 4px 0;
          transition: transform 0.3s ease-in-out;
        }

        .bar.open:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .bar.open:nth-child(2) {
          opacity: 0;
        }

        .bar.open:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        nav {
          margin-top: 40px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin: 10px 0;
        }

        a {
          text-decoration: none;
          color: #333;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default Overlay;
