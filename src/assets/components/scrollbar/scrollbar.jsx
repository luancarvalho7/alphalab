import React, { useEffect } from 'react';
import './scrollbar.css';

export function Scrollbar() {

  useEffect(() => {
    const thumb = document.getElementById('custom-thumb');

    function updateThumbHeight() {
      const windowHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;
      const thumbHeight = (windowHeight / contentHeight) * windowHeight;
      thumb.style.height = `${thumbHeight}px`;
    }

    function moveThumb() {
      const windowHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;
      const scrollHeight = contentHeight - windowHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const thumbTop = (scrollTop / scrollHeight) * (windowHeight - thumb.clientHeight);
      thumb.style.top = `${thumbTop}px`;
    }

    function touchStart(e) {
      const startY = e.touches[0].clientY;
      const startTop = parseInt(window.getComputedStyle(thumb).top, 10);
      
      function touchMove(e) {
        const deltaY = e.touches[0].clientY - startY;
        const newTop = Math.min(window.innerHeight - thumb.clientHeight, Math.max(0, startTop + deltaY));
        const scrollRatio = newTop / (window.innerHeight - thumb.clientHeight);
        document.documentElement.scrollTop = scrollRatio * (document.documentElement.scrollHeight - window.innerHeight);
      }

      function touchEnd() {
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('touchend', touchEnd);
      }

      document.addEventListener('touchmove', touchMove);
      document.addEventListener('touchend', touchEnd);
    }

    thumb.addEventListener('touchstart', touchStart);

    window.addEventListener('scroll', moveThumb);
    window.addEventListener('resize', updateThumbHeight);

    updateThumbHeight();
    moveThumb();

    return () => {
      window.removeEventListener('scroll', moveThumb);
      window.removeEventListener('resize', updateThumbHeight);
      thumb.removeEventListener('touchstart', touchStart);
    };
  }, []);

  return (
    <div id="custom-scrollbar">
      <div id="custom-thumb" className='bg-gradient'></div>
    </div>
  );
};
