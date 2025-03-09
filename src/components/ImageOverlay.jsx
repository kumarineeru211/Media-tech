import React, { useState, useRef } from 'react';
import './images.css';

const SwiperSlider = () => {
  
  const images = [
    { src: "/slider1.png", alt: "Fashion Website", title: "Agora", description: "An elegant fashion website", link: " https://ondemand.hubilo.io/agora" },
    { src: "/slider2.png", alt: "AI Telehealth Website", title: "Ignition", description: "AI-powered telehealth solutions", link: " https://ondemand.hubilo.io/ignition" },
    { src: "/slider3.png", alt: "Safety Culture Website", title: "Azuga", description: "Ensuring workplace safety", link: "https://ondemand.hubilo.io/azuga" },
    { src: "/slider4.png", alt: "Tech Startup Website", title: "GenNext", description: "Innovative tech solutions", link: "https://uniflix.tv/" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="swiper-container">
      <div 
        className="swiper-wrapper"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="swiper-slide" key={index} onClick={() => setSelectedImage(image)}>
            <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="swiper-button-prev" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="swiper-button-next" onClick={nextSlide}>
        &#10095;
      </div>

      {selectedImage && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            <a href={selectedImage.link} className="overlay-button">
              Check out media
            </a>
            <button className="overlay-close" onClick={() => setSelectedImage(null)}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperSlider;
