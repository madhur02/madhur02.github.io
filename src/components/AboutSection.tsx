
import { CheckCircle, Pickaxe, Truck, Factory, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    "Leading manufacturer since 2001",
    "Modernized machines and cutting-edge tools",
    "In-depth mining knowledge and experience",
    "Range aligned with market trends",
    "Comprehensive mining contracting services"
  ];

  const services = [
    { icon: Pickaxe, title: "Dolomite Products", description: "High-quality dolomite for various industrial applications" },
    { icon: Factory, title: "Manganese Ore", description: "Premium manganese ore for steel and alloy production" },
    { icon: Truck, title: "Iron Ore", description: "Superior iron ore meeting international standards" },
    { icon: Wrench, title: "Mining Contracting", description: "Complete mining solutions and contracting services" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mining-800 mb-6">
              About Suryavansham Mining
            </h2>
            <div className="w-24 h-1 bg-mining-gradient mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 2001, Global Mines and Minerals has been a leading Manufacturer and Service Provider in the mining industry, 
            consistently delivering excellence for over two decades. 
            The company operates under the name Suryavansham Mining, envisioned by Mr. Manish Nayak (Ex-IAS officer) and Mrs. Sangeeta Nayak, 
            whose leadership and vision continue to drive our commitment to quality, innovation, and sustainable growth in the mining sector.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-mining-800 mb-6">
                Our Legacy of Excellence
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are the leading Manufacturer and Service Provider of Dolomite Product, Manganese Ore, 
                Antimony Ore, Iron Ore, Fire Clay Powder, Stibnite Product, Laterite Product, Bauxite Product 
                and Mining Contracting Services.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We utilize the inputs from modernized machines and cutting-edge tools to ensure that range 
                offered is in line with existing market trends and customer demands. We are also engaged in 
                Mining Contracting Services with in-depth knowledge and experience of mining.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-mining-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mining Operations"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-mining-gradient opacity-20"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="text-3xl font-bold text-mining-800">2001</div>
                <div className="text-mining-600 font-medium">Established</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-mining-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-mining-800 mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
