import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { ArrowUpRight, ExternalLink } from 'lucide-react';

import Sidebar from "../assets/hutch.png";
import Ecommerce from "../assets/ecommerce.png";
import HOC from "../assets/hoc.png";
import MusicApp from "../assets/musicapp.png";
import Center from "../assets/center.png";
import Tour from "../assets/tour.png";
import "./portfolio.css"

const ProjectCard = ({ image, title, description, link, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.016);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div 
        ref={cardRef}
        className="project-card-modern"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 
            `perspective(1000px) rotateY(${(mousePos.x - 0.5) * 10}deg) rotateX(${(mousePos.y - 0.5) * -10}deg) scale(1.02)` : 
            'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Subtle Background Effects */}
        <div className="card-background">
          <svg className="morph-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="subtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f8fafc', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: '#f1f5f9', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
            <polygon 
              points={`${50 + Math.sin(time) * 5},${20 + Math.cos(time * 0.8) * 3} ${80 + Math.sin(time * 1.2) * 4},${30 + Math.cos(time) * 4} ${90 + Math.sin(time * 0.6) * 3},${70 + Math.cos(time * 1.5) * 5} ${60 + Math.sin(time * 1.8) * 6},${85 + Math.cos(time * 0.4) * 4} ${20 + Math.sin(time * 0.9) * 5},${75 + Math.cos(time * 1.1) * 3} ${10 + Math.sin(time * 1.4) * 3},${40 + Math.cos(time * 0.7) * 4}`}
              fill="url(#subtleGradient)"
            />
          </svg>
        </div>

        {/* Grid Pattern */}
        <div className="grid-pattern"></div>

        {/* Image Container */}
        <div className="image-container">
          <img 
            src={image} 
            alt={alt}
            className="project-image"
          />
          <div className="image-overlay"></div>
        </div>

        {/* Content */}
        <div className="card-content">
          <div className="card-header">
            <h3 className="project-title">{title}</h3>
            <ArrowUpRight 
              size={20} 
              className="arrow-icon"
              style={{
                transform: isHovered ? 'translate(4px, -4px) rotate(45deg)' : 'translate(0, 0) rotate(0deg)'
              }}
            />
          </div>
          <p className="project-description">{description}</p>
          
          {/* Status Indicator */}
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>Live Project</span>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="hover-glow"></div>
      </div>
    </a>
  );
};

function Works() {
  const projects = [
    {
      image: Sidebar,
      title: "Hutch",
      description: "UI/UX Design",
      link: "https://www.figma.com/proto/P6u3RiJ2Pp1Nxr5BYU7WCD/Hutch?node-id=3-7488&starting-point-node-id=3%3A7488&t=9ldhB8iHsSqS71Ke-1",
      alt: "Hutch Project"
    },
    {
      image: Tour,
      title: "Tour App",
      description: "Mobile Development",
      link: "https://mysliit-my.sharepoint.com/:v:/g/personal/it22562760_my_sliit_lk/EVUpcuNHvuZPrXmdrhEg6EMBz7VDMG-0cva8F16c9kxriw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ygN30S",
      alt: "Tour Application"
    },
    {
      image: MusicApp,
      title: "Music App",
      description: "Mobile Design",
      link: "https://www.figma.com/proto/zch9coybqR1IJnhTmsp3hl/MAD?node-id=1-2539&starting-point-node-id=1%3A2539&t=UlrZltEO9vs7nfwx-1",
      alt: "Music Application"
    },
    {
      image: Ecommerce,
      title: "Badminton",
      description: "Sports App Design",
      link: "https://www.figma.com/proto/sr7jicvVKqEGFUp1qo6lL8/Badminton?node-id=4-152&t=XI3UDz9FOi8vZLla-1",
      alt: "Badminton App"
    },
    {
      image: HOC,
      title: "HOC Platform",
      description: "Web Development",
      link: "https://mysliit-my.sharepoint.com/:v:/g/personal/it22562760_my_sliit_lk/EdHodJ_XxuVOrRCBHUFtMsgBR423d5o8I1rw2bp1iOWeIg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=345pwU",
      alt: "HOC Project"
    },
    {
      image: Center,
      title: "Service Center",
      description: "Platform Design",
      link: "https://www.figma.com/proto/vBjaqDvySYS1gSQYjdk6oW/service-project?node-id=1-642&p=f&t=LIA30gmhCB024fpr-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
      alt: "Service Center"
    }
  ];

  return (
    <div className="portfolio" id="portfolio">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Works;
