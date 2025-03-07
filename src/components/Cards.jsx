import React from "react";

import { FaVideo, FaCog, FaPalette, FaPlayCircle, FaChartBar, FaRocket } from "react-icons/fa";
import "./cards.css";

const features = [
  {
    icon: <FaVideo className="icon" />, 
    title: "Media Library",
    details: [
      "25 video uploads included, 1 Media site with options to add more",
      "Upload videos directly from your computer",
      "Import past event recordings in a few clicks",
      "Effortlessly set up new events or import details"
    ]
  },
  {
    icon: <FaCog className="icon" />, 
    title: "Automated Process",
    details: [
      "AI-generated metadata",
      "AI-generated thumbnails, transcripts & speaker lists",
      "AI-generated tags by category & audience",
      "Auto-transfer videos from Hubilo webinars & digital events to Media+"
    ]
  },
  {
    icon: <FaPalette className="icon" />, 
    title: "Branding & Personalization",
    details: [
      "Use your logo and accent color; choose light or dark themes",
      "Create a unique media site URL with your own domain",
      "Use preference forms to deliver tailored content to your audience"
    ]
  },
  {
    icon: <FaPlayCircle className="icon" />, 
    title: "Video Player",
    details: [
      "Top video quality with descriptions, speaker info, resources, and recommendations",
      "Integrated CTAs for better engagement",
      "Ask questions and share content easily",
      "Navigate through video chapters seamlessly"
    ]
  },
  {
    icon: <FaChartBar className="icon" />, 
    title: "Deep Analytics",
    details: [
      "Comprehensive analytics on your media engagement",
      "Video level analytics",
      "Audience level analytics"
    ]
  },
  {
    icon: <FaRocket className="icon" />, 
    title: "Boost Your Pipeline",
    details: [
      "CTAs linked to MAP/CRM",
      "Gate your content with forms",
      "Capture pipeline and engagement data via CRM (HubSpot)"
    ]
  }
];

const FeatureCard = ({ icon, title, details }) => {
  return (
    <div className="feature-card">
      <div className="feature-header">{icon} {title}</div>
      <ul className="feature-list">
      <hr  style={{}}/>
        {details.map((item, index) => (
          
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const MediaLibraryUI = () => {
  return (
    <div className="media-library-ui">
      <div className="container">
      <img src="/circleimg.png" alt="cicle" className="circle-img" />
      <img src="/megiaimg.png" alt="media img"  className="media-img"/>
        <div className="grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaLibraryUI;
