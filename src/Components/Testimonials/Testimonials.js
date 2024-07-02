import React from "react";
import "./Testimonials.scss";
import img1 from "../../assets/images/card1.svg";
import img2 from "../../assets/images/card2.svg";
import img3 from "../../assets/images/card3.svg";
import img4 from "../../assets/images/card4.svg";
import img5 from "../../assets/images/card5.svg";
import arrow from "../../assets/images/arrow.svg";
import TestimonialCard from "../CommonComponents/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const testimonialsData = [
    {
      content: "Vaani helped me find new possibilities for my business",
      name: "Majnu Gayen",
      age: "56 years old",
      profession: "Shop owner in Mayanagar",
    },
    {
      content: "Vaani helped me find new possibilities for my business",
      name: "Majnu Gayen",
      age: "56 years old",
      profession: "Shop owner in Mayanagar",
    },
    {
      content: "Vaani helped me find new possibilities for my business",
      name: "Majnu Gayen",
      age: "56 years old",
      profession: "Shop owner in Mayanagar",
    },
    {
      content: "Vaani helped me find new possibilities for my business",
      name: "Majnu Gayen",
      age: "56 years old",
      profession: "Shop owner in Mayanagar",
    },
  ];
  return (
    <div className="testimonials">
      <div className="testimonialsInner">
        <div
          className="item img img1"
          style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
        ></div>
        <TestimonialCard
          content={testimonialsData[0].content}
          name={testimonialsData[0].name}
          age={testimonialsData[0].age}
          profession={testimonialsData[0].profession}
        />
        <div
          className="item img img2"
          style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover" }}
        ></div>

        <TestimonialCard
          content={testimonialsData[1].content}
          name={testimonialsData[1].name}
          age={testimonialsData[1].age}
          profession={testimonialsData[1].profession}
        />
        <div
          className="item img img3"
          style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover" }}
        ></div>
        <TestimonialCard
          content={testimonialsData[2].content}
          name={testimonialsData[2].name}
          age={testimonialsData[2].age}
          profession={testimonialsData[2].profession}
        />
        <div
          className="item img img4"
          style={{ backgroundImage: `url(${img4})`, backgroundSize: "cover" }}
        ></div>
        <TestimonialCard
          content={testimonialsData[3].content}
          name={testimonialsData[3].name}
          age={testimonialsData[3].age}
          profession={testimonialsData[3].profession}
        />
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
