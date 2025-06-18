
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AppointmentSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      // Basic validation
      if (!formData.name || !formData.email || !formData.phone || !formData.service) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
    
      try {
        const response = await fetch('/api/send-appointment-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          toast({
            title: "Appointment Requested!",
            description: "Details sent successfully. We'll get back to you shortly.",
          });
        } else {
          toast({
            title: "Error",
            description: "Failed to send your details. Please try again later.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Network Error",
          description: "Unable to send request. Please check your connection.",
          variant: "destructive",
        });
      }
    
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    };
    

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const services = [
    "Dolomite Products",
    "Manganese Ore",
    "Iron Ore",
    "Antimony Ore",
    "Fire Clay Powder",
    "Stibnite Products",
    "Laterite Products",
    "Bauxite Products",
    "Mining Contracting Services",
    "General Consultation"
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ];

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mining-800 mb-6">
              Book an Appointment
            </h2>
            <div className="w-24 h-1 bg-mining-gradient mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation with our mining experts to discuss your requirements 
              and explore how we can help your business succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-mining-800 mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Ready to discuss your mining and mineral requirements? Our experienced team 
                  is here to provide expert guidance and customized solutions for your business needs.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-mining-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-mining-100 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-mining-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-mining-800 mb-2">Phone</h4>
                        <p className="text-gray-300">+91 94250 66662</p>
                        <p className="text-gray-300">+91 81200 19345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-mining-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-mining-100 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-mining-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-mining-800 mb-2">Email</h4>
                        <p className="text-gray-600">info@suryavanshammining.com</p>
                        <p className="text-gray-600">sales@suryavanshammining.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-mining-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-mining-100 p-3 rounded-lg">
                        <Building className="h-6 w-6 text-mining-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-mining-800 mb-2">Office</h4>
                        <p className="text-gray-600">
                          Indore, Madhya Pradesh, India<br />
                          Business Hours: Mon-Fri 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Appointment Form */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-mining-gradient text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Calendar className="h-6 w-6" />
                  <span>Schedule Appointment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>Full Name *</span>
                      </label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>Email *</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span>Phone *</span>
                      </label>
                      <Input
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>Company</span>
                      </label>
                      <Input
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Required *</label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Preferred Date</span>
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Preferred Time</span>
                      </label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>Message</span>
                    </label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-mining-gradient hover:bg-mining-700 text-white py-3 text-lg">
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
