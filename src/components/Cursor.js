import React, { useState, useEffect, useRef } from "react";
import "./cursor.css";

function Cursor() {
  const cursorDotOutline = useRef();
  const cursorDot = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  let cursorVisible = useRef(false);
  let cursorEnlarged = useRef(false);

  /**
   * Mouse Moves
   */
  const onMouseMove = event => {
    const { clientX: x, clientY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };
  
  const onMouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };
  
  const onMouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };
  
  const onMouseDown = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };
  
  const onMouseUp = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  
  const onResize = event => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  /**
   * Hooks
   */
  useEffect(() => {
    // Initialize cursor position
    const initCursor = () => {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.opacity = '0';
        cursorDotOutline.current.style.opacity = '0';
      }
    };

    initCursor();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    // Delay the link handling to ensure DOM is ready
    setTimeout(() => {
      handleLinks();
      handleInteractiveElements();
    }, 100);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  /**
   * Position Dot (cursor)
   * @param {event}
   */
  function positionDot(e) {
    cursorVisible.current = true;
    toggleCursorVisibility();
    // Position the dot immediately to mouse position
    endX = e.clientX;
    endY = e.clientY;
    if (cursorDot.current) {
      cursorDot.current.style.top = endY + "px";
      cursorDot.current.style.left = endX + "px";
    }
  }

  /**
   * Toggle Cursor Visibility
   */
  function toggleCursorVisibility() {
    if (cursorDot.current && cursorDotOutline.current) {
      if (cursorVisible.current) {
        cursorDot.current.style.opacity = 1;
        cursorDotOutline.current.style.opacity = 1;
      } else {
        cursorDot.current.style.opacity = 0;
        cursorDotOutline.current.style.opacity = 0;
      }
    }
  }

  /**
   * Toggle Cursor Size
   */
  function toggleCursorSize() {
    if (cursorDot.current && cursorDotOutline.current) {
      if (cursorEnlarged.current) {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
        cursorDotOutline.current.style.transform = "translate(-50%, -50%) scale(5)";
        cursorDotOutline.current.style.opacity = "0.3";
      } else {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorDotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorDotOutline.current.style.opacity = "1";
      }
    }
  }

  /**
   * Handle Links
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
   */
  function handleLinks() {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
        document.body.classList.add('cursor-hover');
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
        document.body.classList.remove('cursor-hover');
      });
    });
  }

  /**
   * Handle Interactive Elements
   * Applies hover effects to buttons, inputs, etc.
   */
  function handleInteractiveElements() {
    const interactiveElements = document.querySelectorAll(
      "button, .button, .nav__link, .services__button, .contact__button"
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener("mouseover", () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
        document.body.classList.add('cursor-hover');
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
        document.body.classList.remove('cursor-hover');
      });
    });

    // Special handling for project cards
    const projectCards = document.querySelectorAll(".project-card-modern");
    projectCards.forEach(el => {
      el.addEventListener("mouseover", () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
        document.body.classList.add('cursor-special');
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
        document.body.classList.remove('cursor-special');
      });
    });

    // Text input handling
    const textInputs = document.querySelectorAll("input, textarea");
    textInputs.forEach(el => {
      el.addEventListener("mouseover", () => {
        document.body.classList.add('cursor-text');
      });
      el.addEventListener("mouseout", () => {
        document.body.classList.remove('cursor-text');
      });
    });
  }

  /**
   * Animate Dot Outline
   * Animates cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = time => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.top = y + "px";
        cursorDotOutline.current.style.left = x + "px";
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDot} id="cursor-dot" />
    </>
  );
}

export default Cursor;
