import React from "react";
import "./Footer.scss";
import arrow_small from "../../assets/images/arrow_small.svg";
import youtube from "../../assets/images/youtube.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import x from "../../assets/images/x.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__stay">
        <p className="footer__stay__heading">Stay in touch</p>
        <div className="footer__stay__signUp">
          <input
            className="footer__stay__signUp__inputMail"
            placeholder="Enter email"
            type="email"
            id="email"
            name="email"
          />
          <button className="footer__stay__signUp__newsLetter">
            <p className="footer__stay__signUp__newsLetter__text">
              Sign up to our newsletter
            </p>
            <img src={arrow_small} alt="arrow logo"></img>
          </button>
        </div>
        <div className="footer__stay__signUp__logos">
          <div className="footer__stay__signUp__logo">
            <img src={youtube} alt="youtube logo"></img>
          </div>
          <div className="footer__stay__signUp__logo">
            <img src={linkedin} alt="linkedin logo"></img>
          </div>
          <div className="footer__stay__signUp__logo">
            <img src={instagram} alt="instagram logo"></img>
          </div>
          <div className="footer__stay__signUp__logo">
            <img src={facebook} alt="facebook logo"></img>
          </div>
          <div className="footer__stay__signUp__logo">
            <img src={x} alt="x logo"></img>
          </div>
        </div>
      </div>
      <div className="footer__links1"></div>
      <div className="footer__links2">
        <ul className="footer__links2__items">
          <li className="footer__links2__item">
            <a href="">About us</a>
          </li>
          <li className="footer__links2__item">
            <a href="">Partners</a>
          </li>
          <li className="footer__links2__item">
            <a href="">Services</a>
          </li>
          <li className="footer__links2__item">
            <a href="">Newsletters</a>
          </li>
          <li className="footer__links2__item">
            <a href="">Events</a>
          </li>
        </ul>
      </div>
      <div className="footer__links3">
        <ul className="footer__links3__items">
          <li className="footer__links3__item">
            <a href="">FAQ's</a>
          </li>
          <li className="footer__links3__item">
            <a href="">Contact us</a>
          </li>
          <li className="footer__links3__item">
            <a href="">Feedback</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
