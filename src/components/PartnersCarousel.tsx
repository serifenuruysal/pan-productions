import React from 'react';

const PartnersCarousel = () => {
  const partners = [
    {
      name: 'O2 Academy Islington',
      logo: '/images/partners/o2-academy-islington.png',
    },
    {
      name: 'Islington Assembly Hall',
      logo: '/images/partners/islington-assembly-hall.png',
    },
    {
      name: 'Arcola Theatre',
      logo: '/images/partners/arcola-theatre.png',
    },
    {
      name: 'Acoustic Brasserie',
      logo: '/images/partners/acoustic-brasserie.png',
    },
    {
      name: 'C.N.A Catering Logistics Limited',
      logo: '/images/partners/cna-catering.png',
    },
    {
      name: 'Morgan Has Solicitors',
      logo: '/images/partners/morgan-has-solicitors.png',
    },
    {
      name: 'FoodArt UK Limited',
      logo: '/images/partners/foodart-uk.png',
    },
    {
      name: 'Gama',
      logo: '/images/partners/gama.png',
    },
    {
      name: 'Hackney Showroom',
      logo: '/images/partners/hackney-showroom.png',
    },
    {
      name: 'Union Chapel',
      logo: '/images/partners/union-chapel.png',
    },
    {
      name: 'Millfield Theatre',
      logo: '/images/partners/millfield-theatre.png',
    },
    {
      name: 'Sütdiyari',
      logo: '/images/partners/sutdiyari.png',
    },
    {
      name: 'WAVA Design',
      logo: '/images/partners/wava-design.png',
    },
    {
      name: 'Yum Yum Thai Cuisine',
      logo: '/images/partners/yumyum-thai.png',
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 rounded-2xl p-12 border border-border/60">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Our Partners & Supporters
            </h3>
          </div>

          <div className="relative">
            {/*
              We keep the animated marquee (animate-scroll) but also allow users
              to manually scroll the row. On touch devices this enables swipe/drag.
            */}
            <div
              className="-mx-6 px-6 overflow-x-auto scroll-smooth touch-pan-x"
              role="list"
              aria-label="Partners and supporters"
              tabIndex={0}
            >
              <div className="flex space-x-12 animate-scroll hover:pause min-w-max">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center relative w-24 h-24 bg-background/50 rounded-3xl border border-border/30 hover:border-primary/30 transition-colors overflow-hidden backdrop-blur-sm"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="relative z-10 w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                  />
                  <img
                    src={partner.logo}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-150"
                    aria-hidden="true"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center relative w-24 h-24 bg-background/50 rounded-3xl border border-border/30 hover:border-primary/30 transition-colors overflow-hidden backdrop-blur-sm"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="relative z-10 w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                  />
                  <img
                    src={partner.logo}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-150"
                    aria-hidden="true"
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;