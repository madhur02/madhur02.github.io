
import { Card, CardContent } from '@/components/ui/card';
import { Mountain, Cog, Zap, Leaf, Users, Trophy } from 'lucide-react';

const SpecialitiesSection = () => {
  const specialities = [
    {
      icon: Mountain,
      title: "Premium Ore Extraction",
      description: "Advanced extraction techniques for high-quality dolomite, manganese, iron ore, and antimony with minimal environmental impact.",
      features: ["High-grade ore quality", "Efficient extraction", "Quality control"]
    },
    {
      icon: Cog,
      title: "Modern Equipment",
      description: "State-of-the-art machinery and cutting-edge tools ensuring optimal productivity and safety standards.",
      features: ["Latest technology", "Regular maintenance", "Safety certified"]
    },
    {
      icon: Zap,
      title: "Mining Contracting",
      description: "Comprehensive mining contracting services with experienced teams and proven methodologies.",
      features: ["Expert workforce", "Project management", "Timely delivery"]
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally responsible mining practices that protect ecosystems while maximizing resource utilization.",
      features: ["Eco-friendly methods", "Land restoration", "Waste management"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with deep industry knowledge and decades of mining experience.",
      features: ["Certified experts", "Continuous training", "Safety focused"]
    },
    {
      icon: Trophy,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring all products meet international standards and customer specifications.",
      features: ["ISO standards", "Regular testing", "Customer satisfaction"]
    }
  ];

  return (
    <section id="specialities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mining-800 mb-6">
              Our Core Specialities
            </h2>
            <div className="w-24 h-1 bg-mining-gradient mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the leading choice in mining and minerals industry 
              with our specialized services and expertise.
            </p>
          </div>

          {/* Specialities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialities.map((speciality, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="bg-mining-gradient p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <speciality.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-mining-800 mb-4 group-hover:text-mining-600 transition-colors">
                    {speciality.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {speciality.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {speciality.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-mining-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-mining-gradient rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Our Expertise?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Partner with us for reliable, efficient, and sustainable mining solutions 
                that meet your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-mining-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Request Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-mining-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
