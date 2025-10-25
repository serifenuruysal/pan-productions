import React from 'react';
import HeroSection from '@/components/HeroSection';
import NewsletterSection from '@/components/NewsletterSection';
import PartnersCarousel from '@/components/PartnersCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Theater, 
  GraduationCap, 
  Newspaper, 
  Calendar, 
  Users, 
  Award 
} from 'lucide-react';

const Index = () => {
  const highlights = [
    {
      icon: Theater,
      title: "Current Productions",
      description: "Experience our acclaimed theatrical performances featuring talented casts and captivating stories.",
      link: "/productions",
      image: "https://www.panproductions.co.uk/file/2019/11/earnest-tower.jpg"
    },
    {
      icon: GraduationCap,
      title: "Pan Academy",
      description: "Professional workshops and lessons for actors of all levels, taught by industry experts.",
      link: "/academy",
      image: "https://www.panproductions.co.uk/file/2019/10/PAN-WORKSHOPArtboard-0-1.jpg"
    },
    {
      icon: Newspaper,
      title: "News & Press",
      description: "Stay updated with our latest news, reviews, and press coverage from the theatre world.",
      link: "/news",
      image: "https://www.panproductions.co.uk/file/2019/10/cocuk.jpg"
    }
  ];

  const stats = [
    { icon: Award, value: "50+", label: "Productions" },
    { icon: Users, value: "1000+", label: "Students Taught" },
    { icon: Calendar, value: "8", label: "Years Experience" },
    { icon: Theater, value: "10+", label: "Venue Partners" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="font-heading text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Discover Pan Productions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From professional theatre productions to comprehensive drama education, 
              we bring stories to life and nurture the next generation of performers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="production-card group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <Link to={item.link}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Partners Carousel */}
      <PartnersCarousel />
    </div>
  );
};

export default Index;
