import { useState, useEffect, useCallback } from 'react';

export function useSlides(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Click navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const width = window.innerWidth;
      
      if (x > width * 0.8) {
        nextSlide();
      } else if (x < width * 0.2) {
        prevSlide();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [nextSlide, prevSlide]);

  // Auto-hide keyboard hint
  useEffect(() => {
    const timer = setTimeout(() => {
      const hint = document.querySelector('.keyboard-hint');
      if (hint) {
        (hint as HTMLElement).style.opacity = '0';
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    progress
  };
}