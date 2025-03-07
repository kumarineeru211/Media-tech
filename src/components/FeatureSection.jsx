import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons
import "./FeatureSection.css"; 
 import Visual1 from "../assets/Visual1.png"
 import Visual2 from "../assets/Visual2.png";
 import Visual3 from "../assets/Visual3.png";
 import Visual4 from "../assets/Visual4.png";
import TestimonialCarousel from "./TestimonialCarousel";

const features = [
  {
    title: "Curate your video media collection with an AI-powered library",
    description: "End manual video uploads and tedious metadata tasks! Hubilo AI automates SEO-optimised metadata creation from your media in minutes.",
    image: Visual1,
    bgColor: "#D2DB5129",
    bgColorR: "#D2DB51"
  },
  {
    title: "Build, Brand & Publish your Media+",
    description:
      "Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of your choice.",
    image: Visual2,
    bgColor: "#AFC3CA29",
    bgColorR:"#AFC3CA"
  },
  {
    title: "Gate your media, capture leads & connect your CRM - it’s easy",
    description:
      "Customize forms on Hubilo or import from HubSpot. Seamlessly push data to your CRM and enrich your marketing pipeline.",
    image: Visual3,
    bgColor: "#D8C69E29",
    bgColorR:"#D8C69E"
  },
  {
    title: "Track your views - with detailed analytics.",
    description: "Unlock audience insights! Analyze media performance granularly to create better content and capture intent effectively.",
    image: Visual4,
    bgColor: "#E4875D29",
    bgColorR:"#E4875D"
  },
];

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFeature = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="feature-container">
      {/* Left - Accordion List */}
      <div className="feature-list">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFeature(index)}
            style={{ backgroundColor: activeIndex === index ? feature.bgColor : "#ffffff"  , position: "relative",}}
          >
            {activeIndex === index && (
              <div
                style={{
                  height: "2px",
                  width: "300px",
                  backgroundColor: feature.bgColorR,
                  position: "absolute",
                  bottom: "0",
                  left: "17px",
                }}
              ></div>
            )}
            <div className="feature-header">
              <h3>{feature.title}</h3>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {activeIndex === index && (
              <div
                style={{
                  width: "100px",
                  borderBottom: `3px solid ${feature.bgColorR}`,
                }}
              ></div>
            )}
            {activeIndex === index && <p>{feature.description}</p>}
          </div>
        ))}
      </div>

      {/* Right - Dynamic Image & Background */}
      <div
        className="feature-preview"
        style={{
          backgroundColor:
            activeIndex !== null
              ? features[activeIndex].bgColorR
              : features.bgColorR,
        }}
      >
        {activeIndex !== null && (
          <img src={features[activeIndex].image} alt="Feature Preview" />
        )}
      </div>

    
      
    </div>
    <TestimonialCarousel/>
    
    </>
  );
};

export default FeatureSection;
