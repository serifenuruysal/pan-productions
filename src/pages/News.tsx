import React from 'react';
import { ExternalLink } from 'lucide-react';
import NewsletterSection from '@/components/NewsletterSection';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

const News = () => {
  const { t } = useLanguage();
  const newsItems = [
    {
      title: t('news.item1.title'),
      image: "/images/news/importance-of-being-earnest-1.jpg",
      link: "https://theblogoftheatrethings.com/2020/01/08/review-the-importance-of-being-earnest-played-by-immigrants-at-tower-theatre/",
      description: t('news.item1.description')
    },
    {
      title: t('news.item2.title'),
      image: "/images/news/importance-of-being-earnest-2.jpg",
      link: "https://thisweekculture.com/article/aylin-bozok-the-importance-of-being-earnest-played-by-immigrants/",
      description: t('news.item2.description')
    },
    {
      title: t('news.item3.title'),
      image: "/images/news/importance-of-being-earnest-3.jpg",
      link: "https://bemyguest.org.uk/theatre/the-importance-of-being-earnest-tower-theatre/",
      description: t('news.item3.description')
    },
    {
      title: t('news.item4.title'),
      image: "/images/news/importance-of-being-earnest-4.jpg",
      link: "https://bakchormeeboy.com/2019/11/12/in-londons-off-west-end-2020-the-importance-of-being-earnest-played-by-immigrants-at-tower-theatre-preview/",
      description: t('news.item4.description')
    },
    {
      title: t('news.item5.title'),
      image: "/images/news/importance-of-being-earnest-5.jpg",
      link: "https://thetheatretimes.com/about-the-importance-of-being-earnest/",
      description: t('news.item5.description')
    },
    {
      title: t('news.item6.title'),
      image: "/images/news/importance-of-being-earnest-6.jpg",
      link: "https://www.londontheatre1.com/reviews/play/the-importance-of-being-earnest-played-by-immigrants/",
      description: t('news.item6.description')
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="News & Press | Pan Productions Theatre Company London"
        description="Latest news, press coverage, and media features about Pan Productions. Stay updated with our theatrical announcements and reviews."
        keywords="Pan Productions news, theatre news London, press coverage, theatre reviews, Pan Productions media"
        url="/news"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-heading font-bold mb-6 text-foreground">
              {t('news.title1')} <span className="text-primary">{t('news.title2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('news.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newsItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/hero-slide-1.jpg';
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-primary h-8 w-8" />
                  </div>
                </div>

                {/* Title */}
                <div className="p-4 bg-background">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default News;