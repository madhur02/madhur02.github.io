
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, UserCheck, Phone, MapPin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative">
      {/* Top Contact Bar */}
      <div className="bg-mining-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@suryavanshammining.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white shadow-lg relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-mining-gradient p-3 rounded-lg">
                <div className="text-white font-bold text-xl">SM</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-mining-800">SURYAVANSHAM</h1>
                <p className="text-sm text-mining-600">MINING & MINERALS PVT. LTD.</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-mining-700 hover:text-mining-500 transition-colors font-medium">Home</a>
              <a href="#about" className="text-mining-700 hover:text-mining-500 transition-colors font-medium">About Us</a>
              <a href="#specialities" className="text-mining-700 hover:text-mining-500 transition-colors font-medium">Specialities</a>
              <a href="#stories" className="text-mining-700 hover:text-mining-500 transition-colors font-medium">Success Stories</a>
              <a href="#appointment" className="text-mining-700 hover:text-mining-500 transition-colors font-medium">Book Appointment</a>
              <Button variant="outline" className="border-mining-600 text-mining-600 hover:bg-mining-50">
                <UserCheck className="mr-2 h-4 w-4" />
                Customer Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button variant="ghost" onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
              <div className="py-4 px-4 space-y-4">
                <a href="#home" className="block text-mining-700 hover:text-mining-500 transition-colors font-medium">Home</a>
                <a href="#about" className="block text-mining-700 hover:text-mining-500 transition-colors font-medium">About Us</a>
                <a href="#specialities" className="block text-mining-700 hover:text-mining-500 transition-colors font-medium">Specialities</a>
                <a href="#stories" className="block text-mining-700 hover:text-mining-500 transition-colors font-medium">Success Stories</a>
                <a href="#appointment" className="block text-mining-700 hover:text-mining-500 transition-colors font-medium">Book Appointment</a>
                <Button variant="outline" className="w-full border-mining-600 text-mining-600 hover:bg-mining-50">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Customer Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
