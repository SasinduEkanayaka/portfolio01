import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
import ten from "../assets/10.png";
import eleven from "../assets/11.png";
import twelve from "../assets/12.png";
import thirteen from "../assets/13.png";
import fourteen from "../assets/14.png";
import fifteen from "../assets/15.png";
import sixteen from "../assets/16.png";
import seventeen from "../assets/17.png";
import eighteen from "../assets/18.png";
import twenty from "../assets/20.png";
import "./portfolio.css"

const ProjectCard = ({ image, title, description, link, alt, category }) => {
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

  const getCategoryLabel = (cat) => {
    switch(cat) {
      case 'figma': return 'Design';
      case 'figmaWeb': return 'Web Design';
      case 'figmaMobile': return 'Mobile Design';
      case 'fullstack': return 'Full Stack';
      case 'frontend': return 'Frontend';
      default: return 'Project';
    }
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
        {/* Category Badge */}
        {category && (
          <div className={`category-badge ${category}`}>
            {getCategoryLabel(category)}
          </div>
        )}
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const swiperRef = useRef(null);
  const portfolioRef = useRef(null);

  const projectCategories = {
    figmaWeb: [
      {
        image: three,
        title: "Tourism Website",
        description: "A stylish and responsive tourism website design crafted in Figma for a seamless user journey.",
        link: "https://www.figma.com/proto/Af72rawUzfcztLVAmDT6fA/Untitled?node-id=3-3&p=f&t=KU3zc0QY65l8fJ4H-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3",
        alt: "tourism website",
        category: "figmaWeb"
      },
      {
        image: four,
        title: "Tourism Design",
        description: "A clean Figma design for a Sri Lanka tourism site with a soft, cloud-themed layout.",
        link: "https://www.figma.com/proto/TrK6HME2gCH0dMXvKGE8WZ/Untitled?node-id=3-267&t=pyVySSQiGAEYJTJp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A267",
        alt: "tourism design",
        category: "figmaWeb"
      },
      {
        image: five,
        title: "Badminton Website",
        description: "A sleek Figma design for booking badminton courts in Sri Lanka with an easy, user-friendly layout.",
        link: "https://www.figma.com/proto/sr7jicvVKqEGFUp1qo6lL8/Badminton?node-id=4-152&p=f&t=PZNasupMVbW2B3j4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        alt: "Badminton App",
        category: "figmaWeb"
      },
      {
        image: ten,
        title: "Service Center",
        description: "A modern Figma layout for a service center website with booking and service tracking features.",
        link: "https://www.figma.com/proto/vBjaqDvySYS1gSQYjdk6oW/service-project?node-id=1-642&p=f&t=UrZgz2TGY58rpIH3-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
        alt: "Service Center",
        category: "figmaWeb"
      },
      {
        image: eleven,
        title: "Ai Portfolio",
        description: "A modern AI-themed portfolio UI designed in Figma with a sleek, user-friendly layout.",
        link: "https://www.figma.com/proto/28AjEJT5fonjuNJZJ9PaI7/Untitled?node-id=1-81&p=f&t=sUHLCwWROmKZ7WVE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        alt: "ai portfolio",
        category: "figmaWeb"
      },
      {
        image: twelve,
        title: "POS Dashboard",
        description: "A clean and intuitive POS dashboard UI for managing sales, inventory, and reports.",
        link: "https://www.figma.com/proto/lgL5Zgj3GyWC7dYfnfTiix/clothing-shop?node-id=75-4791&t=9qqHCFaluHzqfWZ7-1&scaling=min-zoom&content-scaling=fixed&page-id=27%3A4731&starting-point-node-id=75%3A4791",
        alt: "pos dashboard",
        category: "figmaWeb"
      },
      {
        image: thirteen,
        title: "Health Dashboard",
        description: "A modern health dashboard UI for tracking wellness, fitness, and medical stats.",
        link: "https://www.figma.com/proto/6X9QA8fYUbfc4SBUTrAGk1/Healthcare?node-id=2-9582&p=f&t=eiDrEBUVSKUstnFP-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A9582",
        alt: "Health Dashboard",
        category: "figmaWeb"
      }
    ],
    figmaMobile: [
      {
        image: fourteen,
        title: "medi center Application",
        description: "A user-friendly medical app design for booking appointments and accessing healthcare services.",
        link: "https://www.figma.com/design/wKEQryh5BVOmwOEfSPp4tn/Untitled?node-id=0-1&p=f&t=KrXJNn9RuhMP9o1l-0",
        alt: "medi center Application",
        category: "figmaMobile"
      },
      {
        image: sixteen,
        title: "Beach clean Application",
        description: "An eco-friendly app design to organize and promote beach cleaning events.",
        link: "https://www.figma.com/proto/zch9coybqR1IJnhTmsp3hl/MAD?node-id=1-2539&starting-point-node-id=1%3A2539&t=CZq320zyK4DfSgMy-1",
        alt: "beach clean Application",
        category: "figmaMobile"
      },
      {
        image: eighteen,
        title: "Food Order Application",
        description: "Simple and user-friendly food ordering app design made in Figma.",
        link: "https://www.figma.com/proto/giN4n9PsScAIL3C3UoCAtr/IT22562760?node-id=1-221&p=f&t=qNeYi9xjXaDewISI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A221",
        alt: "Food Order Application",
        category: "figmaMobile"
      },
      {
        image: twenty,
        title: "Hutch Cliq Application",
        description: "Modern and sleek app redesign focused on improved usability and fresh visuals.",
        link: "https://www.figma.com/proto/P6u3RiJ2Pp1Nxr5BYU7WCD/Hutch?node-id=3-7488&starting-point-node-id=3%3A7488&t=bBGGy3xiYI9EXIw7-1",
        alt: "Hutch Cliq Application",
        category: "figmaMobile"
      }
    ],
    fullstack: [
        {
        image: six,
        title: " TourCraft",
        description: "A dynamic tourism website built with the MERN stack to Sri Lanka’s travel options.",
        link: "https://github.com/malakasadeep/ITP24_B9_09_Tourism_Management_System-MERN.git",
        alt: "tourism website",
        category: "fullstack"
      },
         {
        image: nine,
        title: "Yewon Lanka",
        description: "A clean, responsive tourism website for showcasing tours and services across Sri Lanka.",
        link: "https://yalayewontours.lk/",
        alt: "tourism website",
        category: "fullstack"
      },
        {
        image: eight,
        title: "Happiness Villa",
        description: "A responsive hotel website near Yala, built with PHP, CSS, and JavaScript.",
        link: "https://happinessvillayala.lk/",
        alt: "tourism website",
        category: "fullstack"
      }
    ],
    frontend: [
       {
        image: seven,
        title: " E-Commerce Website",
        description: "A stylish e-commerce site built with React for smooth and responsive shopping.",
        link: "https://fashion-nexus.vercel.app/",
        alt: "Service Center",
        category: "frontend"
      },
        {
        image: fifteen,
        title: " Tourism Website",
        description: "A clean, responsive tourism website built with WordPress to showcase Sri Lanka tours.",
        link: "",
        alt: "Service Center",
        category: "frontend"
      },
        {
        image: seventeen,
        title: "Fitnees website",
        description: "A responsive fitness website built with WordPress for gym promotions and bookings.",
        link: "",
        alt: "Service Center",
        category: "frontend"
      }
    ]
  };

  const getAllProjects = () => {
    return [...projectCategories.figmaWeb, ...projectCategories.figmaMobile, ...projectCategories.fullstack, ...projectCategories.frontend];
  };

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return getAllProjects();
    }
    if (activeCategory === 'figma') {
      return [...projectCategories.figmaWeb, ...projectCategories.figmaMobile];
    }
    return projectCategories[activeCategory] || [];
  };

  const projects = getFilteredProjects();

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px 0px' }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Start autoplay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.autoplay && projects.length > 1) {
        swiperRef.current.autoplay.start();
        setIsAutoPlaying(true);
      }
    }, 500); // Start autoplay after component loads

    return () => clearTimeout(timer);
  }, [projects.length]);

  // Track autoplay status
  useEffect(() => {
    if (!swiperRef.current) return;

    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.autoplay) {
        const isRunning = swiperRef.current.autoplay.running;
        setIsAutoPlaying(isRunning);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Handle category changes and slider updates
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      setCurrentSlide(0);
      setProgress(0);
    }
  }, [activeCategory]);

  // Handle category changes with smooth transitions
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 150);
  };

  const toggleAutoPlay = () => {
    if (!swiperRef.current) return;
    
    if (isAutoPlaying) {
      swiperRef.current.autoplay?.stop();
      setIsAutoPlaying(false);
    } else {
      swiperRef.current.autoplay?.start();
      setIsAutoPlaying(true);
    }
  };

  const forceRestartAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
      setTimeout(() => {
        swiperRef.current.autoplay.start();
        setIsAutoPlaying(true);
      }, 100);
    }
  };

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setCurrentSlide(index);
      setProgress(0);
    }
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="portfolio" id="portfolio" ref={portfolioRef}>
      {/* Portfolio Header */}
      <div className={`portfolio-header ${isVisible ? 'slide-in-up' : ''}`}>
        {/* Category Filter */}
        <div className="category-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'figma' || activeCategory === 'figmaWeb' || activeCategory === 'figmaMobile' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('figma')}
          >
            Figma Design
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'fullstack' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('fullstack')}
          >
            Full Stack
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('frontend')}
          >
            Frontend
          </button>
        </div>

        {/* Figma Subcategory Filter - Only shown when Figma Design is active */}
        {(activeCategory === 'figma' || activeCategory === 'figmaWeb' || activeCategory === 'figmaMobile') && (
          <div className="subcategory-filter">
            <button 
              className={`sub-filter-btn ${activeCategory === 'figmaWeb' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('figmaWeb')}
            >
              <span className="sub-icon">🌐</span>
              Web Design
            </button>
            <button 
              className={`sub-filter-btn ${activeCategory === 'figmaMobile' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('figmaMobile')}
            >
              <span className="sub-icon">📱</span>
              Mobile Design
            </button>
          </div>
        )}

        {/* Category Info */}
        <div className="category-info">
          {activeCategory === 'all' && (
            <span className="category-description">
              All projects ({getAllProjects().length} total)
            </span>
          )}
          {activeCategory === 'figma' && (
            <span className="category-description">
              All Figma designs - Web & Mobile ({projectCategories.figmaWeb.length + projectCategories.figmaMobile.length} projects)
            </span>
          )}
          {activeCategory === 'figmaWeb' && (
            <span className="category-description">
              Web UI/UX designs using Figma ({projectCategories.figmaWeb.length} projects)
            </span>
          )}
          {activeCategory === 'figmaMobile' && (
            <span className="category-description">
              Mobile app designs using Figma ({projectCategories.figmaMobile.length} projects)
            </span>
          )}
          {activeCategory === 'fullstack' && (
            <span className="category-description">
              Complete web applications with backend & frontend ({projectCategories.fullstack.length} projects)
            </span>
          )}
          {activeCategory === 'frontend' && (
            <span className="category-description">
              Frontend-focused applications ({projectCategories.frontend.length} projects)
            </span>
          )}
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={60}
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        loop={projects.length > 2}
        loopedSlides={projects.length}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true
        }}
        speed={1200}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            if (swiper.autoplay && projects.length > 1) {
              swiper.autoplay.start();
              setIsAutoPlaying(true);
            }
          }, 100);
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
          setProgress(0);
        }}
        onAutoplayTimeLeft={(swiper, time, progress) => {
          setProgress((1 - progress) * 100);
        }}
        className="portfolio-slider"
        breakpoints={{
          320: { 
            slidesPerView: 1, 
            spaceBetween: 20,
            centeredSlides: true 
          },
          768: { 
            slidesPerView: 2, 
            spaceBetween: 30,
            centeredSlides: true 
          },
          1024: { 
            slidesPerView: 3, 
            spaceBetween: 60,
            centeredSlides: true 
          }
        }}
      >
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <SwiperSlide key={`${activeCategory}-${index}-${project.title}`} className="portfolio-slide">
              <ProjectCard {...project} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="portfolio-slide empty-state">
            <div className="empty-state-card">
              <div className="empty-state-icon">🚀</div>
              <h3>Coming Soon</h3>
              <p>Frontend projects are currently in development. Check back soon!</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* Controls */}
      <div className={`auto-scroll-controls ${isVisible ? 'controls-animate-in' : ''}`}>
        {/* Scroll Status */}
        <div className="scroll-status">
          <div className={`status-indicator-dot ${isAutoPlaying ? 'active' : ''}`}></div>
          <span className="status-text">
            {isAutoPlaying ? 'Auto-scrolling' : 'Paused'}
          </span>
          {/* Debug info */}
          <small style={{ marginLeft: '0.5rem', color: '#9ca3af', fontSize: '0.7rem' }}>
            ({projects.length} slides)
          </small>
        </div>

        {/* Auto-play Toggle */}
        <button 
          className={`auto-scroll-toggle ${isAutoPlaying ? 'active' : ''}`}
          onClick={toggleAutoPlay}
          aria-label={isAutoPlaying ? 'Pause auto-scroll' : 'Start auto-scroll'}
        >
          {isAutoPlaying ? (
            <Pause className="play-pause-icon" />
          ) : (
            <Play className="play-pause-icon" />
          )}
          <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
        </button>

        {/* Restart Button for debugging */}
        <button 
          className="restart-btn"
          onClick={forceRestartAutoplay}
          title="Force restart autoplay"
        >
          🔄
        </button>

        {/* Progress Dots */}
        <div className="progress-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`progress-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              title={`Project ${index + 1} of ${projects.length}`}
            />
          ))}
          <span className="slide-counter">
            {currentSlide + 1} / {projects.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${progress}%`,
              opacity: isAutoPlaying ? 1 : 0.5 
            }}
          />
        </div>

        {/* Navigation */}
        <div className="portfolio-navigation">
          <button 
            className="nav-arrow" 
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button 
            className="nav-arrow" 
            onClick={goNext}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Works;
