
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, TrendingUp, MapPin, Calendar } from 'lucide-react';

const SuccessStoriesSection = () => {
  const stories = [
    {
      project: "Maharashtra Steel Complex",
      location: "Pune, Maharashtra",
      year: "2023",
      description: "Successfully supplied 50,000 tons of high-grade iron ore for steel production, completing the project 2 weeks ahead of schedule.",
      impact: "Increased production efficiency by 35%",
      client: "Tata Steel Limited",
      rating: 5
    },
    {
      project: "Dolomite Mining Contract",
      location: "Rajasthan",
      year: "2022",
      description: "Executed complete mining contracting services for a major dolomite extraction project with zero safety incidents.",
      impact: "Extracted 100,000 tons with 99.8% purity",
      client: "Hindustan Zinc Ltd",
      rating: 5
    },
    {
      project: "Manganese Ore Supply",
      location: "Odisha",
      year: "2023",
      description: "Provided premium manganese ore for battery manufacturing, meeting strict quality specifications for automotive industry.",
      impact: "Enabled production of 10,000 EV batteries",
      client: "Exide Industries",
      rating: 5
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Project Manager",
      company: "Tata Steel",
      text: "Suryavansham Mining has been our trusted partner for over 5 years. Their commitment to quality and timely delivery is unmatched.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Procurement Head",
      company: "Hindustan Zinc",
      text: "The quality of their dolomite products and professional mining services has significantly improved our operational efficiency.",
      rating: 5
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mining-800 mb-6">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-mining-gradient mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped our clients achieve their mining and mineral processing goals 
              with innovative solutions and exceptional service.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {stories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{story.year}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-mining-800 mb-2 group-hover:text-mining-600 transition-colors">
                    {story.project}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center space-x-1 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{story.location}</span>
                  </div>

                  {/* Client */}
                  <div className="text-sm font-medium text-mining-600 mb-4">
                    Client: {story.client}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Impact */}
                  <div className="bg-mining-50 p-3 rounded-lg border-l-4 border-mining-500">
                    <div className="flex items-center space-x-2 text-mining-700">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-semibold">Impact:</span>
                    </div>
                    <p className="text-sm text-mining-600 mt-1">{story.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-mining-400 mb-4" />
                  <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-mining-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-mining-600 font-medium">{testimonial.company}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-mining-gradient rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-mining-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-mining-100">Tons Processed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-mining-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">23</div>
                <div className="text-mining-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
