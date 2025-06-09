import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
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
      if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim()) {
        toast({
          variant: "destructive",
          title: "Missing Information",
          description: "Please fill in all required fields.",
        });
        return;
      }

      // Validate message length
      if (formData.message.length < 10) {
        toast({
          variant: "destructive",
          title: "Message Too Short",
          description: "Please provide a more detailed message (minimum 10 characters).",
        });
        return;
      }

      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xqabzbjj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Show success message with green toast
      toast({
        title: "Thank you!",
        description: "Your message has been sent successfully to soikotflorida@gmail.com",
        className: "bg-green-500 text-white border-green-500",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-6 md:py-8 bg-gradient-to-b from-bengali-red/30 via-bengali-light/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Contact Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to learn more about our organization, events, and community programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-bengali-dark mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-bengali-red mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-bengali-dark">Address</p>
                      <p className="text-bengali-dark/70">Soikot, <br />17310 Chenango Ln<br />Tampa, FL 33647-3503</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-bengali-red mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-bengali-dark">Email</p>
                      <a href="mailto:soikotflorida@gmail.com" className="text-bengali-dark/70 hover:text-bengali-red">soikotflorida@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-bengali-red mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-bengali-dark">Phone</p>
                      <p className="text-bengali-dark/70">(727) 643-3691</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-bengali-dark mt-8 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/soikotflorida" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/soikotflorida" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@soikottampabay6527" target="_blank" rel="noopener noreferrer" className="relative group transition-all duration-300">
                    <img 
                      src="/lovable-uploads/9f4f36a8-f7e0-48d2-8951-51cd16731586.png" 
                      alt="YouTube" 
                      className="w-11 h-11 rounded-full"
                    />
                    <div className="absolute inset-0 bg-red-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-bengali-dark mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-bengali-dark mb-1">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="w-full border-gray-300 focus:border-bengali-red focus:ring-bengali-red"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-bengali-dark mb-1">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full border-gray-300 focus:border-bengali-red focus:ring-bengali-red"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-bengali-dark mb-1">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Subject of your message" 
                      className="w-full border-gray-300 focus:border-bengali-red focus:ring-bengali-red"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-bengali-dark mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={5} 
                      className="w-full border-gray-300 focus:border-bengali-red focus:ring-bengali-red"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-bengali-red hover:bg-bengali-red/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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

export default Contact;
