import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import heroimg from "../assets/heroimg.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import FeatureSection from "./FeatureSection";
import Video1 from "../assets/Video1.png";
import ImageOverlay from "./ImageOverlay";
import Card from "./Cards"
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const HeroSection = () => {
   
  const words = [
    { text: "Engage", emoji: "🤩" },
    { text: "Optimize", emoji: "😎" },
    { text: "$$$", emoji: "🤑" },
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [])


  return (
    <>
      <section className="hero-container">
        <h1 className="hero-title">
          Unlock video’s full potential;
          <br />
          <span className="highlight-text">half of marketers</span> haven’t yet!
        </h1>

        <div className="media-container1">
      <span className="media-box">Media+</span> =
      <span className="engage-text">
        {words[index].text} <span className="emoji">{words[index].emoji}</span>
      </span>
    </div>

        <p className="hero-subtext">
          Netflix-style video discovery for your prospects that turns viewers into customers
        </p>

        <button className="demo-btn">Request a Demo</button>

        <div className="hero-image-container">
          <img src={heroimg} alt="hero-img" className="hero-image" />
        </div>


      </section>
      <div className="company-icons">
        <p className="power-text">Perfected by</p>
        <div className="company-logos">
          <img src={logo1} alt="logo-1" style={{ width: "130px" }} />
          <img src={logo2} alt="logo-1" style={{ width: "130px" }} />
          <img src={logo3} alt="logo-1" style={{ width: "130px" }} />
          <img src={logo4} alt="logo-1" style={{ width: "130px" }} />
          <img src={logo5} alt="logo-1" style={{ width: "130px" }} />
        </div>
      </div>
      <div className="video-management-section">
        <h4 className="highlight-text1">Elevate your video strategy</h4>
        <h2 className="main-heading">Seamless Video Management</h2>
        <p className="sub-text">
          Transform how you engage with your audience using Media+
        </p>

        <div className="stats-container">
          <div className="stats-card">
            <h3>2.5X</h3>
            <h4>Lead Generation</h4>
            <p>Boost watch time and drive more leads</p>
          </div>

          <div className="stats-card">
            <h3>3X</h3>
            <h4>Publish Content Faster with AI</h4>
            <p>Tailor made to get more views</p>
          </div>

          <div className="stats-card">
            <h3>30min</h3>
            <h4>Setup</h4>
            <p>Set up your video CMS in less than 30 minutes</p>
          </div>
        </div>
        <br /><br />
        <button className="demo-btn">Request a Demo</button>
        <br /><br />

        <h4 className="highlight-text1">Why choose Media+?</h4>
        <h2 className="main-heading">Media+ turns video engagement
        </h2>
        <h2 className="main-heading">into customer conversions</h2>

      </div>
      <FeatureSection />

      <div className="video-management-section" style={{ marginTop: "70px" }}>
        <h4 className="highlight-text1">Elevate your video strategy</h4>
        <h2 className="main-heading">Seamless Video Management</h2>
        <p className="sub-text">
          Transform how you engage with your audience using Media+
        </p>
        <img src={Video1} alt="" style={{ maxWidth: "100%" }} />
      </div>

      <div className="banner">
      
      <div className="staggered-columns">
      <div className="staggered-row"><p><span className="outline">Your</span> <span className="bold">Videos</span></p></div>
         <div className="staggered-row"> <p><span className="outline">Your</span> <span className="bold">Brand</span></p></div>
        <div className="staggered-row"><p><span className="outline">Your</span> <span className="bold">Website</span></p></div>
      </div>
      </div>

      <div className="video-management-section" style={{ marginTop: "70px" }}>
        <h4 className="highlight-text1">Media+ in action:</h4>
        <h2 className="main-heading">Customer Spotlight</h2>
        <p className="sub-text">
        See how customers use Media+ to create branded media sites that captivate and convert.
        </p>
        <ImageOverlay/>

      </div>

      <div  className="video-management-section" style={{ marginTop: "40px" }}>
        <h4 className="highlight-text1">Explore</h4>
        <h2 className="main-heading">
        Media+ Features</h2>
        <Card/>
      </div>

        
      <div className="media-banner">
      <div className="banner-content">
        <h1>Get your media library up and running</h1>
        <p>
          Kickstart your media library with up to 25 high-quality videos.
          Upgrade anytime with our flexible add-on plans to upload additional videos.
        </p>
        <ul>
          <li>✔ 25 media upload credits & add-ons</li>
          <li>✔ 1 media site credits & add-ons for more</li>
        </ul>
        <button className="pricing-button">Get Pricing</button>
      </div>
      <div className="banner-image">
        <img src="/half-img.png" alt="Media Library" />
      </div>
    </div>

   <FAQSection/>

     {/* media with image */}

     <div className="media-container">
      <div className="left-section">
        <h2>
          See how your videos can <br />
          make your business <span className="highlight">more $$$</span>
        </h2>
        <img src="/personImage.png" alt="Person Pointing" className="person-img" />
      </div>

      <div className="right-section">
        <div className="form-container">
          <h3>Take the Full Media+ Tour</h3>
          <form>
            <label>Business email</label>
            <input type="email" placeholder="johnsmith@hubilo.com" />

            <div className="name-fields">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Smith" />
              </div>
            </div>

            <label>Company name</label>
            <input type="text" placeholder="Business Company Name" />

            <label>Phone</label>
            <input type="tel" placeholder="(201) 555-0123" />

            <div className="checkbox-container">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                I agree to Hubilo’s{" "}
                <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button className="submit-button">Get a free demo</button>
          </form>
        </div>
      </div>
    </div>
     <Footer/>
     

    </>
  );
};

export default HeroSection;
