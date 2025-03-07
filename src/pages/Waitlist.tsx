
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Waitlist = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    occupation: '',
    expertise: '',
    referral: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Waitlist submission:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist!",
      });
    }, 1500);
  };

  const interestOptions = [
    "Daily Startup Ideas",
    "Community Networking",
    "Weekly Vibe Coding",
    "Expert Resources",
    "All Features"
  ];

  const occupationOptions = [
    "Entrepreneur",
    "Developer",
    "Designer",
    "Marketer",
    "Consultant",
    "Content Creator",
    "Student",
    "Other"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 md:py-20">
        <div className="container max-w-3xl">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-8" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {!isSuccess ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Be among the first 250 solopreneurs to access Gaiad Ideas Bank and unleash your entrepreneurial potential.
                </p>
              </div>

              <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium mb-1">
                        Primary Interest
                      </label>
                      <Select 
                        onValueChange={(value) => handleSelectChange('interest', value)}
                        value={formData.interest}
                      >
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="What interests you most?" />
                        </SelectTrigger>
                        <SelectContent>
                          {interestOptions.map(option => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="occupation" className="block text-sm font-medium mb-1">
                        Occupation
                      </label>
                      <Select 
                        onValueChange={(value) => handleSelectChange('occupation', value)}
                        value={formData.occupation}
                      >
                        <SelectTrigger id="occupation">
                          <SelectValue placeholder="Select your occupation" />
                        </SelectTrigger>
                        <SelectContent>
                          {occupationOptions.map(option => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="expertise" className="block text-sm font-medium mb-1">
                        Areas of Expertise
                      </label>
                      <Input 
                        id="expertise"
                        name="expertise"
                        placeholder="E.g., AI, marketing, web development"
                        value={formData.expertise}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="referral" className="block text-sm font-medium mb-1">
                        How did you hear about us?
                      </label>
                      <Input 
                        id="referral"
                        name="referral"
                        placeholder="Friend, social media, etc."
                        value={formData.referral}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-purple"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Join Waitlist
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">You're on the List!</h1>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Thank you for joining the Gaiad Ideas Bank waitlist. We'll notify you as soon as we're ready to welcome our first 250 members.
              </p>
              <Button onClick={() => navigate('/')} className="bg-gradient-purple">
                Back to Home
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Waitlist;
