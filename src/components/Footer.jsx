import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Sections */}
        <div className="footer-content">
          <div className="footer-sections">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li>Webinar+</li>
                <li>Media+</li>
                <li>Generate Interest 👀</li>
                <li>Capture Intent 🤔</li>
                <li>Prove Impact 💥</li>
                <li>Repurpose Content ✍️</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Who are you</h4>
              <ul>
                <li>Demand Gen Marketer</li>
                <li>Content Marketer</li>
                <li>Event Marketer</li>
                <li>Field Marketer</li>
                <li>Marketing Op</li>
                <li>CMO</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>People who love us</li>
                <li>People who hate us</li>
                <li>Our Webinars</li>
                <li>Our Thoughts</li>
                <li>Help!</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>About Us</h4>
              <ul>
                <li>Mission + Values</li>
                <li>The Head Honchos</li>
                <li>The Gossip</li>
                <li>Our Contact Deets</li>
                <li>Join the team!</li>
              </ul>
            </div>
          </div>

          {/* Image below text sections */}
          <div className="footer-image">
            <img src="/footerimg1.png" alt="footer-img1" width={200} />
          </div>
        </div>

        {/* Right Section - Contact & Socials */}
        <div className="footer-contact">
          <div className="contact-section">
          <h4>Contact us</h4>
          <p>to see what Webinar+ can do for your business</p>
          <div className="email-input">
            <input type="email" placeholder="Enter your email" />
            <button>
              <IoIosArrowRoundForward size={22} />
            </button>
          </div>
          </div>

          <div>
        <div className="g2-reviews">
            <img src="/footerimg2.png" alt="footer-img2" />
          </div>
          <div className="social-icons">
            <FaLinkedin size={42} />
            <FaFacebook size={42} />
            <FaTwitter size={42} />
            <FaInstagram size={42} />
          </div>
        </div>
         
        </div>
     
      </div>

      {/* Footer Bottom */}
      
        
        <div className="footer-links">
          <div>© 2022 Hubilo. All rights reserved</div>
          <div className="footer-links2">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Security and Compliance</a>
          <a href="#">Cookie Policy</a>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;
