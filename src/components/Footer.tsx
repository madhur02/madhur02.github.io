
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mining-900 text-white relative">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-mining-gradient hover:bg-mining-700 rounded-full p-3 shadow-lg"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-mining-gradient p-3 rounded-lg">
                <div className="text-white font-bold text-xl">SM</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">SURYAVANSHAM</h3>
                <p className="text-sm text-gray-300">MINING & MINERALS PVT. LTD.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading manufacturer and service provider in the mining industry since 2001, 
              delivering quality products and exceptional services across India.
            </p>
            <div className="flex space-x-4">
              <div className="bg-mining-800 p-2 rounded-lg hover:bg-mining-700 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-mining-800 p-2 rounded-lg hover:bg-mining-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-mining-800 p-2 rounded-lg hover:bg-mining-700 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-mining-300 transition-colors">Dolomite Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mining-300 transition-colors">Manganese Ore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mining-300 transition-colors">Iron Ore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mining-300 transition-colors">Antimony Ore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mining-300 transition-colors">Fire Clay Powder</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mining-300 transition-colors">Mining Contracting</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-mining-300 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-mining-300 transition-colors">About Us</a></li>
              <li><a href="#specialities" className="text-gray-300 hover:text-mining-300 transition-colors">Specialities</a></li>
              <li><a href="#stories" className="text-gray-300 hover:text-mining-300 transition-colors">Success Stories</a></li>
              <li><a href="#appointment" className="text-gray-300 hover:text-mining-300 transition-colors">Book Appointment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mining-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-mining-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Indore, Madhya Pradesh</p>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-mining-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 94250 66662</p>
                  <p className="text-gray-300">+91 81200 19345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-mining-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@suryavanshammining.com</p>
                  <p className="text-gray-300">sales@suryavanshammining.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mining-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Suryavansham Mining & Minerals Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-mining-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-mining-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-mining-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
