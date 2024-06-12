import React from "react";
import "./Testimonials.scss";
import img1 from "../../assets/images/card1.svg";
import img2 from "../../assets/images/card2.svg";
import img3 from "../../assets/images/card3.svg";
import img4 from "../../assets/images/card4.svg";
import img5 from "../../assets/images/card5.svg";
import arrow from "../../assets/images/arrow.svg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonialsInner">
        <div
          className="item img img1"
          style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
        ></div>
        <div className="item content2">
          <div className="outerText">
            <div className="innerText1">
              <p>“Vaani helped me find new possibilities for my business”</p>
            </div>
            <div className="innerText2">
              <div></div>
              <p>Majnu Gayen</p>
              <p>56 years old</p>
              <p>Shop owner in Mayanagar</p>
            </div>
            <div className="innerText3">
              <button className="innerText3_button">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div
          className="item img img2"
          style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover" }}
        ></div>

        <div className="item content2">
          <div className="outerText">
            <div className="innerText1">
              <p>“Vaani helped me find new possibilities for my business”</p>
            </div>
            <div className="innerText2">
              <div></div>
              <p>Majnu Gayen</p>
              <p>56 years old</p>
              <p>Shop owner in Mayanagar</p>
            </div>
            <div className="innerText3">
              <button className="innerText3_button">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div
          className="item img img3"
          style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover" }}
        ></div>
        <div className="item content2">
          <div className="outerText">
            <div className="innerText1">
              <p>“Vaani helped me find new possibilities for my business”</p>
            </div>
            <div className="innerText2">
              <div></div>
              <p>Majnu Gayen</p>
              <p>56 years old</p>
              <p>Shop owner in Mayanagar</p>
            </div>
            <div className="innerText3">
              <button className="innerText3_button">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div
          className="item img img4"
          style={{ backgroundImage: `url(${img4})`, backgroundSize: "cover" }}
        ></div>
        <div className="item content2">
          <div className="outerText">
            <div className="innerText1">
              <p>“Vaani helped me find new possibilities for my business”</p>
            </div>
            <div className="innerText2">
              <div></div>
              <p>Majnu Gayen</p>
              <p>56 years old</p>
              <p>Shop owner in Mayanagar</p>
            </div>
            <div className="innerText3">
              <button className="innerText3_button">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div
          className="item img img5"
          style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover" }}
        ></div>
        <div className="item content2 viewMore">
          <div className="content2__viewMore">
            <p>View More stories</p>
            <div className="arrow1">
              <img src={arrow} alt="arrow image"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
