import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      content: t('about.testimonial1'),
      source: t('about.testimonial1Source'),
      rating: 5,
    },
    {
      content: t('about.testimonial2'),
      source: t('about.testimonial2Source'),
      rating: 5,
    },
    {
      content: t('about.testimonial3'),
      source: t('about.testimonial3Source'),
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-card/30 via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            {t('index.testimonials')}
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {t('about.testimonialsTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.testimonialsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Source */}
                <div className="pt-4 border-t border-border/60">
                  <p className="text-sm font-semibold text-primary">
                    {testimonial.source}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
