import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  type: 'current' | 'upcoming' | 'past';
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 'earnest',
      title: 'The Importance of Being Earnest',
      subtitle: 'Current Production',
      description: 'Oscar Wilde\'s brilliant comedy of manners returns to the stage with Pan Productions\' acclaimed cast.',
      image: 'https://www.panproductions.co.uk/file/2019/11/earnest-tower.jpg',
      ctaText: 'Buy Tickets',
      ctaLink: '/productions/earnest',
      type: 'current'
    },
    {
      id: 'workshop',
      title: 'Pan Academy Workshops',
      subtitle: 'Learn with the Professionals',
      description: 'Join our intensive drama workshops and lessons with experienced industry professionals.',
      image: 'https://www.panproductions.co.uk/file/2019/10/PAN-WORKSHOPArtboard-0-1.jpg',
      ctaText: 'Explore Workshops',
      ctaLink: '/academy/workshops',
      type: 'upcoming'
    },
    {
      id: 'company',
      title: 'Pan Productions Story',
      subtitle: 'Founded in 2016',
      description: 'Discover our journey from a small theatre group to London\'s premier independent production company.',
      image: 'https://www.panproductions.co.uk/file/2019/10/cocuk.jpg',
      ctaText: 'Learn More',
      ctaLink: '/about',
      type: 'past'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current':
        return 'bg-accent text-accent-foreground';
      case 'upcoming':
        return 'bg-primary text-primary-foreground';
      case 'past':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span 
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              getTypeColor(slides[currentSlide].type)
            }`}
          >
            {slides[currentSlide].subtitle}
          </span>
        </div>
        
        <h1 className="hero-text mb-6">
          {slides[currentSlide].title}
        </h1>
        
        <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to={slides[currentSlide].ctaLink}>
            <Button variant="spotlight" size="lg" className="px-8 py-3">
              {slides[currentSlide].ctaText}
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" className="px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Play className="w-4 h-4 mr-2" />
            Watch Trailer
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="ml-4 bg-black/20 hover:bg-black/40 text-white border-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="mr-4 bg-black/20 hover:bg-black/40 text-white border-0"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;