import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import gsap from 'gsap';

export default function Hero() {
  const { navigateTo } = useShop();
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Subtle editorial sequence
      tl.from(imageRef.current, {
        opacity: 0,
        scale: 1.04,
        duration: 1.4,
        ease: 'power2.out'
      })
      .from(eyebrowRef.current, {
        y: 18,
        opacity: 0,
        duration: 0.7
      }, '-=1.1')
      .from(line1Ref.current, {
        y: 28,
        opacity: 0,
        duration: 0.8
      }, '-=0.6')
      .from(line2Ref.current, {
        y: 28,
        opacity: 0,
        duration: 0.8
      }, '-=0.6')
      .from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7
      }, '-=0.5')
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7
      }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Side: Marketing Editorial Content */}
          <div className="hero-content">
            <span className="hero-eyebrow" ref={eyebrowRef}>
              NEW SEASON. NEW YOU.
            </span>
            
            <h1 className="hero-heading">
              <span className="hero-heading-line1" ref={line1Ref}>Effortless Style.</span>
              <span className="hero-heading-line2" ref={line2Ref}>Timeless You.</span>
            </h1>

            <p className="hero-description" ref={descRef}>
              Elevated essentials and modern silhouettes crafted for confidence, comfort & everyday elegance.
            </p>

            <div className="hero-cta-group" ref={ctaRef}>
              <button 
                className="hero-btn-primary"
                onClick={() => navigateTo('shop', 'all')}
                aria-label="Shop New Arrivals"
              >
                <span>SHOP NEW ARRIVALS</span>
                <ArrowRight size={15} className="hero-btn-arrow" />
              </button>

              <button 
                className="hero-btn-secondary"
                onClick={() => navigateTo('lookbook')}
                aria-label="Explore Collection"
              >
                <span>EXPLORE COLLECTION</span>
              </button>
            </div>
          </div>

          {/* Right Side: Editorial Fashion Campaign Photo */}
          <div className="hero-media-wrapper">
            <div className="hero-image-container" ref={imageRef}>
              <img 
                src="/images/hero/hero-model.png" 
                alt="Belgaum Luxury Fashion Campaign - Woman in beige tailored suit" 
                className="hero-editorial-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
