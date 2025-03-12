import React, { useState, useRef, useEffect } from 'react';
import './images.css';

const SwiperSlider = () => {
  const images = [
    { src: "/slider1.png", alt: "Fashion Website", title: "Agora", description: "An elegant fashion website", link: "https://ondemand.hubilo.io/agora" },
    { src: "/slider2.png", alt: "AI Telehealth Website", title: "Ignition", description: "AI-powered telehealth solutions", link: "https://ondemand.hubilo.io/ignition" },
    { src: "/slider3.png", alt: "Safety Culture Website", title: "Azuga", description: "Ensuring workplace safety", link: "https://ondemand.hubilo.io/azuga" },
    { src: "/slider4.png", alt: "Tech Startup Website", title: "GenNext", description: "Innovative tech solutions", link: "https://uniflix.tv/" }
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Reset active index when switching between mobile and desktop
      if (mobile) {
        setActiveIndex(0);
      } else {
        setActiveIndex(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // For mobile view, we use the original images array
  // For desktop view, we use extended array for looping effect
  const extendedImages = isMobile ? images : [...images, ...images.slice(0, 2)];

  const nextSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    
    if (isMobile) {
      // Simple circular navigation for mobile
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setTransitioning(false), 500);
    } else {
      // Desktop logic with extended images
      setActiveIndex((prevIndex) => {
        if (prevIndex >= extendedImages.length - 2) {
          setTimeout(() => {
            setTransitioning(false);
            setActiveIndex(1);
          }, 500);
          return extendedImages.length - 2;
        }
        setTimeout(() => setTransitioning(false), 500);
        return prevIndex + 1;
      });
    }
  };

  const prevSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    
    if (isMobile) {
      // Simple circular navigation for mobile
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setTransitioning(false), 500);
    } else {
      // Desktop logic with extended images
      setActiveIndex((prevIndex) => {
        if (prevIndex <= 0) {
          setTimeout(() => {
            setTransitioning(false);
            setActiveIndex(images.length - 1);
          }, 500);
          return 0;
        }
        setTimeout(() => setTransitioning(false), 500);
        return prevIndex - 1;
      });
    }
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
        style={{ 
          transform: isMobile 
            ? `translateX(-${activeIndex * 100}%)` 
            : `translateX(calc(-${(activeIndex - 1) * 33.33}%))`,
          transition: transitioning ? 'transform 0.5s ease-in-out' : 'none'
        }}
      >
        {extendedImages.map((image, index) => (
          <div 
            className={`swiper-slide ${index === activeIndex ? 'active' : ''}`}
            key={index} 
            onClick={() => setSelectedImage(image)}
          >
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