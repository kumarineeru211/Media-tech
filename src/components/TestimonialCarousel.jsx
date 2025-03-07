

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; 
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";



const testimonials = [
    {
      quote: "Beautifully showcases our best videos...",
      text: "“Media+ has created our own 'UNI-FLIX.' It’s exactly the OTT platform I’ve been looking for. It beautifully showcases relevant videos for students, sorted by courses, locations, universities, and more—all in a matter of minutes. Plus, I can create the sections I want for our audience.” ",
      image: Avatar1,
      name: "Girish C. Ballolla",
      position: "Founder & CEO, Gen Next Education, Inc.",
    },
    {
      quote: " “A tool that can make it easy to manage our videos with AI...”",
      text: "“For the marketers & go-to-market teams this is a great portal. This feels more like a tool that can make it easy to manage our videos with AI and feels like a part of our own website.” ",
      image: Avatar2,
      name: "Jenifer Ho",
      position: "Marketing Head, ABC Corp",
    },
    {
      quote: "Highly recommended for video hosting!",
      text: "The UI and features are top-notch...",
      image: Avatar3,
      name: "Jane Smith",
      position: "Product Manager, XYZ Ltd.",
    },
  
  ];
  
const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="testimonial-section">
      <h4>Take it from a Customer</h4>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h2>“{testimonial.quote}”</h2>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-position">{testimonial.position}</p>
          </div>
        ))}
       
      </Slider>
      <button style={{backgroundColor:"white",border:"none", padding:"10px 30px" , marginTop:"60px" ,color:"#E4875D" , fontSize:"20px", borderRadius:"10px"}}>Request a Demo</button>
    </div>
  );
};

export default TestimonialCarousel;
