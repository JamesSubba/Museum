import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';

const AirPodsProAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Calculate the progress of the animation based on scroll position
      const scrollProgress = Math.max(0, Math.min((scrollTop - containerTop) / windowHeight, 1));

      // Calculate the current frame based on the scroll progress
      const totalFrames = 180; // Total number of frames
      const newFrame = Math.floor(scrollProgress * totalFrames) + 1;

      if (newFrame !== currentFrame) {
        setCurrentFrame(newFrame);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentFrame]);

  useEffect(() => {
    if (imageRef.current) {
      const img = new Image();
      img.src = `/images/${currentFrame}.jpg`;
      img.onload = () => {
        imageRef.current!.src = img.src;
      };
    }
  }, [currentFrame]);

  return (
    <div style={{ maxHeight: '100%', overflow: 'hidden'  }}>
      <div
        ref={containerRef}
        style={{ position: 'sticky', overflow: 'hidden' , top: 0, maxHeight: '100%', width: '1920px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <img ref={imageRef} style={{ maxWidth: '100%', maxHeight: '100%', position: 'fixed', top: 0, left: 0 }} alt={`Frame ${currentFrame}`} />
      
      </div>
      <div style={{ height: '200vh' }}></div>
      
    </div>
  );
};

export default AirPodsProAnimation;
