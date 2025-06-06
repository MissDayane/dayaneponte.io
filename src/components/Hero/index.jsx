import React from 'react';
import { useRef, useEffect } from 'react';
import {HeroContainer, HeroContent, CTA, Dayane} from './Styles.js'
import DayaneIMG from '../../assets/Dayane.png'; 
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const ctaRef = useRef(null);
  const decorationRef = useRef(null);
   useEffect(() => {
    const button = ctaRef.current;
    const decoration = decorationRef.current;

    if (!button || !decoration) return;

    const handleMouseMove = (e) => {
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
     
      button.style.transform = `translate(
        ${(x - centerX) * 0.1}px,
        ${(y - centerY) * 0.1}px
      )`;

      decoration.style.left = `${x - 10}px`;
      decoration.style.top = `${y - 10}px`;
    };

    const handleMouseLeave = () => {
      button.style.transform = '';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);



/*-----------------------------------------------------------------------------------------*/


  return (
    <HeroContainer>
      <HeroContent className="text-content">
        <h1>Código & Design</h1>
        <p>Transformando ideias em experiências digitais impactantes. UX/UI Designer & Front-End Developer.</p>
        <CTA>
          <a href="#cta-link" className="cta-button">Explore: Coleção de cases que me orgulham</a>
        </CTA>
      </HeroContent>

      <HeroContent className="image-content">
        <Dayane>
          <img src={DayaneIMG} alt="Dayane" className="profile-image" />
        </Dayane>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;