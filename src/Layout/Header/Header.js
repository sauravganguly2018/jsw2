import React from "react";
import "./Header.scss";
import jsw_vaani_logo from "../../assets/images/jsw_vaani_logo.svg";
import location_on from "../../assets/images/location_on.svg";
import a from "../../assets/images/a.svg";
import accessibility_new from "../../assets/images/accessibility_new.svg";
import login from "../../assets/images/login.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__upper">
        <div className="header__image">
          <img src={jsw_vaani_logo} alt="jsw vaani logo" />
        </div>
        <div className="header__content">
          <div className="header__location">
            <img src={location_on} alt="location logo" />
            <p className="header__location__text">Baranagar</p>
          </div>
          <img src={a} alt="a logo" />
          <img src={accessibility_new} alt="accessibility logo" />
          <div className="header__login">
            <p className="header__login__text">Login</p>
            <img src={login} alt="login arrow logo" />
          </div>
        </div>
      </div>
      <div className="header__lower">
        <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                About us
              </a>
              <ul className="nav__sublist">
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 1
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 2
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Partners
              </a>
              <ul className="nav__sublist">
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 1
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 2
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Services
              </a>
              <ul className="nav__sublist">
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 1
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 2
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Events
              </a>
              <i class="fa-solid fa-caret-down"></i>
              <ul className="nav__sublist">
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 1
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 2
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Contact us
              </a>
              <ul className="nav__sublist">
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 1
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 2
                  </a>
                </li>
                <hr></hr>
                <li className="nav__subitem">
                  <a className="nav__sublink" href="#">
                    Sub-item 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
