import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          variant: "destructive",
          title: "Invalid Email",
          description: "Please enter a valid email address.",
        });
        return;
      }

      // Validate required fields
      if (!formData.firstName.trim() || !formData.lastName.trim()) {
        toast({
          variant: "destructive",
          title: "Missing Information",
          description: "Please fill in your first and last name.",
        });
        return;
      }

      // Send form data to server API
      const response = await fetch('https://soikot-tampa-bay-backend.onrender.com:3001/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      // Show success message
      toast({
        title: "Success!",
        description: "You have been subscribed to our mailing list.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: ''
      });
    } catch (error) {
      console.error('Error subscribing:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-bengali-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-bengali-red mr-2">সৈকত</span>
              <span className="text-xl font-medium">Soikot</span>
            </div>
            <p className="text-gray-300 mb-4">
              The Bengali Association of Tampa Bay, promoting and preserving Bengali culture, language, and traditions.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Soikot. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-bengali-red transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-bengali-red transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-bengali-red transition-colors">Events</a></li>
              <li><a href="#culture" className="text-gray-300 hover:text-bengali-red transition-colors">Culture</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-bengali-red transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/by-laws" className="text-gray-300 hover:text-bengali-red transition-colors">By-Laws</a></li>
              <li><a href="/exec-committee" className="text-gray-300 hover:text-bengali-red transition-colors">Executive Committee</a></li>
              <li><a href="/sponsors" className="text-gray-300 hover:text-bengali-red transition-colors">Sponsors</a></li>
              <li><a href="/sponsorship-rates" className="text-gray-300 hover:text-bengali-red transition-colors">Sponsorship Rates</a></li>
              <li><a href="https://anyflip.com/bookcase/qdje" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-bengali-red transition-colors">Probaho</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Join our mailing list</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our mailing list to stay updated with our events and activities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name" 
                  className="px-4 py-2 text-bengali-dark rounded focus:outline-none"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name" 
                  className="px-4 py-2 text-bengali-dark rounded focus:outline-none"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 text-bengali-dark rounded-l focus:outline-none"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <button 
                  type="submit"
                  className="bg-bengali-red hover:bg-bengali-red/90 px-4 py-2 rounded-r transition-colors disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Soikot is a 501(c)(3) non-profit organization
          </p>
          
          {/* <div className="flex items-center">
            <span className="text-gray-400 text-sm">Made with</span>
            <Heart className="w-4 h-4 text-bengali-red mx-1" />
            <span className="text-gray-400 text-sm">for the Bengali community</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
