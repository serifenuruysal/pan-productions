import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const TestimonialsSlider = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: language === 'EN' ? 'Theatre Enthusiast' : 'Tiyatro Tutkunu',
      image: '/images/testimonials/testimonial-1.jpg',
      rating: 5,
      text:
        language === 'EN'
          ? "Pan Productions has completely transformed my understanding of Turkish theatre. Their performances are absolutely mesmerizing and deeply moving."
          : 'Pan Productions, Türk tiyatrosu hakkındaki anlayışımı tamamen değiştirdi. Performansları kesinlikle büyüleyici ve derinden etkileyici.',
    },
    {
      name: 'James Anderson',
      role: language === 'EN' ? 'Workshop Participant' : 'Atölye Katılımcısı',
      image: '/images/testimonials/testimonial-2.jpg',
      rating: 5,
      text:
        language === 'EN'
          ? "The acting workshops at Pan Academy are world-class. I've learned more in a few sessions than I did in years of self-study."
          : 'Pan Academy\'deki oyunculuk atölyeleri dünya standartlarında. Birkaç seansta, yıllarca kendi kendime çalışarak öğrendiğimden daha fazlasını öğrendim.',
    },
    {
      name: 'Elena Petrova',
      role: language === 'EN' ? 'Professional Actor' : 'Profesyonel Oyuncu',
      image: '/images/testimonials/testimonial-3.jpg',
      rating: 5,
      text:
        language === 'EN'
          ? "Working with Pan Productions was a career highlight. Their dedication to authentic storytelling and cultural bridge-building is unparalleled."
          : 'Pan Productions ile çalışmak kariyerimin en önemli anlarından biriydi. Otantik hikaye anlatımına ve kültürel köprü kurmaya olan bağlılıkları benzersiz.',
    },
    {
      name: 'Michael Chen',
      role: language === 'EN' ? 'Arts Critic' : 'Sanat Eleştirmeni',
      image: '/images/testimonials/testimonial-4.jpg',
      rating: 5,
      text:
        language === 'EN'
          ? "A gem in London's theatre scene. Pan Productions consistently delivers thought-provoking performances that resonate long after the curtain falls."
          : "Londra tiyatro sahnesinin bir mücevheri. Pan Productions, perde kapandıktan sonra bile yankılanan düşündürücü performanslar sunuyor.",
    },
    {
      name: 'Ayşe Yılmaz',
      role: language === 'EN' ? 'Academy Graduate' : 'Akademi Mezunu',
      image: '/images/testimonials/testimonial-5.jpg',
      rating: 5,
      text:
        language === 'EN'
          ? "Pan Academy gave me the confidence and skills to pursue my dream of becoming an actor. The instructors are incredibly supportive and talented."
          : 'Pan Academy, oyuncu olma hayalimi gerçekleştirmem için bana güven ve beceri kazandırdı. Eğitmenler inanılmaz destekleyici ve yetenekli.',
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-gradient-to-br from-card/30 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {language === 'EN' ? 'What People Say' : 'İnsanlar Ne Diyor'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'EN'
              ? 'Hear from our audience, students, and collaborators about their experiences with Pan Productions'
              : 'Seyircilerimiz, öğrencilerimiz ve iş birlikçilerimizden Pan Productions deneyimlerini dinleyin'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full bg-card/50 border-border/60 hover:border-primary/40 transition-all">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="w-10 h-10 text-primary opacity-60" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                        {testimonial.text}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/40">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                          <span className="text-primary font-semibold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card/50 border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 bg-card/50 border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
