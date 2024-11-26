import React, { useEffect, useState } from 'react';
import HeroSection from '../components/landing_page/HeroSection';
import VideoSection from '../components/landing_page/VideoSection';
import AboutSection from '../components/landing_page/AboutSection';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Efectos visuales (no afectan el flujo del diseño)
  const heroStyle = {
    transform: `scale(${1 + scrollY / 1000})`,
  };

  const aboutStyle = {
    transform: `translateY(${scrollY / 20}px)`,
  };

  const videoStyle = {
    transform: `translateY(${scrollY / 20}px)`,
  };

  return (
    <>
      <div className="first-section">
        <div className="first-content" style={heroStyle}>
          <HeroSection />
        </div>
      </div>

      <div className="video-section">
        <div className="video-content" style={aboutStyle}>
          <VideoSection />
        </div>
      </div>

      <div className="about-section">
        <div className="about-content" style={videoStyle}>
          <AboutSection />
        </div>
      </div>
    </>
  );
}

export default Home;
