import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, Calendar } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2016',
      title: 'Foundation',
      description: 'Pan Productions was founded with a vision to create exceptional theatre experiences.'
    },
    {
      year: '2017',
      title: 'First Major Production',
      description: 'Launched our first acclaimed production to sold-out audiences.'
    },
    {
      year: '2018',
      title: 'Pan Academy Launch',
      description: 'Established our educational arm, offering professional workshops and lessons.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Adapted to digital platforms while maintaining our commitment to live theatre.'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Expanding our reach with new partnerships and innovative productions.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Theatre',
      description: 'We believe theatre has the power to transform lives and bring communities together.'
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'Our doors are open to everyone, regardless of background or experience level.'
    },
    {
      icon: Award,
      title: 'Excellence in Performance',
      description: 'We strive for the highest standards in every aspect of our productions.'
    },
    {
      icon: Calendar,
      title: 'Continuous Learning',
      description: 'Through Pan Academy, we nurture the next generation of theatre professionals.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Founded in 2016
          </Badge>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            About Pan Productions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a London-based theatre company dedicated to creating exceptional 
            performances and nurturing theatrical talent through our productions and academy.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pan Productions was born from a shared passion for theatre and a 
                  vision to create meaningful artistic experiences. Founded in 2016, 
                  we began as a small collective of theatre enthusiasts who believed 
                  in the transformative power of live performance.
                </p>
                <p>
                  Over the years, we have grown into one of London's most respected 
                  independent theatre companies, known for our innovative approach 
                  to classic works and our commitment to developing new talent through 
                  Pan Academy.
                </p>
                <p>
                  Today, we continue to push boundaries, create memorable experiences, 
                  and provide a platform for artists to grow and flourish in the 
                  world of theatre.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.panproductions.co.uk/file/2017/02/PAN_LOGO-01.png"
                alt="Pan Productions Team"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="font-heading text-2xl font-bold mb-4 text-primary">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To create exceptional theatrical experiences that inspire, educate, 
                  and bring communities together while providing opportunities for 
                  artists to develop their craft and share their talents.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-accent/5 border-accent/20">
              <CardContent className="p-0">
                <h3 className="font-heading text-2xl font-bold mb-4 text-accent">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To be a leading force in London's theatre scene, recognized for 
                  our artistic excellence, innovative productions, and commitment 
                  to developing the next generation of theatre professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from our productions 
              to our educational programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="production-card text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our humble beginnings to where we are today, here are the 
              key milestones in our story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      {index % 2 === 0 && (
                        <Card className="production-card">
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-primary mb-2">
                              {item.year}
                            </div>
                            <h3 className="font-heading text-lg font-semibold mb-2">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    
                    <div className={`flex-1 ${index % 2 !== 0 ? 'pl-8' : 'pr-8'}`}>
                      {index % 2 !== 0 && (
                        <Card className="production-card">
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-primary mb-2">
                              {item.year}
                            </div>
                            <h3 className="font-heading text-lg font-semibold mb-2">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;