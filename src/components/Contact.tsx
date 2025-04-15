import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';
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

      // Send form data to server API
      const response = await fetch(`${import.meta.env.API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Show success message
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
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
    <section id="contact" className="py-16 md:py-24 bg-bengali-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bengali-dark">Contact <span className="text-bengali-red">Us</span></h2>
          <div className="w-24 h-1 bg-bengali-red mx-auto mt-4 mb-6"></div>
          <p className="text-bengali-dark/80 max-w-3xl mx-auto">
            Get in touch with us to learn more about our organization, events, and programs.
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
                  <a href="https://www.facebook.com/soikotflorida" target="_blank" rel="noopener noreferrer" className="bg-bengali-red p-2 rounded-full text-white hover:bg-bengali-red/90 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/soikotflorida?igsh=OTkyZmRxOGhyN3A3" target="_blank" rel="noopener noreferrer" className="bg-bengali-red p-2 rounded-full text-white hover:bg-bengali-red/90 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://chat.whatsapp.com/FrzJPrGWd36FIRbb177Kcy" target="_blank" rel="noopener noreferrer" className="bg-bengali-red p-2 rounded-full text-white hover:bg-bengali-red/90 transition-colors">
                    <MessageCircle className="w-5 h-5" />
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
