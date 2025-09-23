import React from 'react';

const PartnersCarousel = () => {
  const partners = [
    {
      name: 'Tower Theatre',
      logo: 'https://via.placeholder.com/150x80/333/fff?text=Tower+Theatre',
    },
    {
      name: 'London Arts Council',
      logo: 'https://via.placeholder.com/150x80/333/fff?text=Arts+Council',
    },
    {
      name: 'Cultural Foundation',
      logo: 'https://via.placeholder.com/150x80/333/fff?text=Cultural+Found',
    },
    {
      name: 'Theatre Network',
      logo: 'https://via.placeholder.com/150x80/333/fff?text=Theatre+Net',
    },
    {
      name: 'London Borough',
      logo: 'https://via.placeholder.com/150x80/333/fff?text=Borough',
    },
    {
      name: 'Drama Foundation',
      logo: 'https://via.placeholder.com/150x80/333/fff?text=Drama+Found',
    },
  ];

  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl font-semibold text-muted-foreground">
            Our Partners & Supporters
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll hover:pause">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;