
import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import IdeaCard from '@/components/IdeaCard';
import { 
  Lightbulb, Zap, Users, MessageSquare, Calendar, Trophy, BadgeCheck, BookOpen, 
  Rocket, Code, Handshake, BarChart 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const featuredIdeas = [
  {
    id: '1',
    title: 'AI-Powered Content Calendar Generator for Solopreneurs',
    description: 'A tool that generates personalized content calendars based on industry trends, audience insights, and your unique brand voice.',
    category: 'Marketing & Advertising',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600&h=350',
    likes: 128,
    comments: 32,
    date: 'Today'
  },
  {
    id: '2',
    title: 'Voice-to-Visuals: Convert Verbal Ideas to Visual Mockups',
    description: 'An app that listens to your verbal product descriptions and automatically generates visual mockups, wireframes, and design concepts.',
    category: 'Technology & Software',
    image: 'https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?auto=format&fit=crop&q=80&w=600&h=350',
    likes: 95,
    comments: 18,
    date: 'Yesterday'
  },
  {
    id: '3',
    title: 'Micro-Retreat Planner for Remote Entrepreneurs',
    description: 'A platform that helps solopreneurs plan productive micro-retreats with workspaces, wellness activities, and networking opportunities.',
    category: 'Lifestyle & Productivity',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600&h=350',
    likes: 76,
    comments: 24,
    date: '2 days ago'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="font-medium text-primary">500 days. 500 startup ideas.</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unleashing 
              <span className="text-gradient"> Agentic Solopreneurship</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              An exclusive, creator-driven ecosystem for solopreneurs looking to connect, innovate, and grow with daily startup ideas and a vibrant community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-purple">
                <Zap className="h-4 w-4 mr-2" />
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center">
              <div className="p-2 border rounded-xl overflow-hidden shadow-xl animate-float max-w-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=2070" 
                  alt="Gaiad Ideas Bank Platform Preview" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">500</p>
              <p className="text-muted-foreground">Daily Startup Ideas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">250</p>
              <p className="text-muted-foreground">Exclusive Members</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">18+</p>
              <p className="text-muted-foreground">Industry Categories</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">12</p>
              <p className="text-muted-foreground">Expert Webinars Yearly</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Gaiad Ideas Bank Works</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive platform designed to fuel your solopreneur journey with daily ideas, vibrant community, and essential resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen className="h-6 w-6 text-primary" />}
              title="Daily Startup Ideas"
              description="Receive one unique, original product idea MVP per day for 500 days, spanning across various industries and interests."
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Exclusive Community"
              description="Join a tight-knit community of 250 solopreneurs where you can collaborate, share feedback, and build connections."
            />
            <FeatureCard 
              icon={<MessageSquare className="h-6 w-6 text-primary" />}
              title="Interactive Discussions"
              description="Engage in real-time conversations and brainstorming sessions through dedicated chat rooms and discussion boards."
            />
            <FeatureCard 
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Weekly Vibe Coding"
              description="Participate in regular coding sessions where members collectively explore the latest AI tools and prototype ideas."
            />
            <FeatureCard 
              icon={<Handshake className="h-6 w-6 text-primary" />}
              title="Collective Ideation"
              description="Refine and expand on ideas together, or offer your expertise through consultancy services and mentorship opportunities."
            />
            <FeatureCard 
              icon={<Calendar className="h-6 w-6 text-primary" />}
              title="Quarterly Webinars"
              description="Gain insights from experienced entrepreneurs, business strategists, and tech experts through regular webinar sessions."
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                Learn About All Features
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Ideas Section */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Ideas</h2>
              <p className="text-lg text-muted-foreground">
                Explore some of our latest startup ideas across different categories.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link to="/ideas">View All Ideas</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIdeas.map(idea => (
              <IdeaCard key={idea.id} {...idea} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Join our exclusive community and unlock these premium benefits designed for ambitious solopreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Daily Startup Ideas</h3>
                <p className="text-muted-foreground">
                  500 unique product ideas over 500 days, each with market fit analysis and implementation guidance.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <BadgeCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Gaiad OG Badge NFT</h3>
                <p className="text-muted-foreground">
                  Receive an exclusive, tradable NFT badge that signifies your premium membership status.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Feedback & Evolution System</h3>
                <p className="text-muted-foreground">
                  Vote, comment, and provide feedback on ideas, creating an evolving repository of refined concepts.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Gamification & Rewards</h3>
                <p className="text-muted-foreground">
                  Earn points, badges, and rewards for active participation, building achievement and friendly competition.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Launch Support</h3>
                <p className="text-muted-foreground">
                  Receive dedicated resources and assistance when you're ready to launch your project.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Priority Directory Listings</h3>
                <p className="text-muted-foreground">
                  Get fast-tracked review and approval for featuring your projects in our platform's directory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Solopreneur Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our exclusive waitlist today and be among the first 250 members to access Gaiad Ideas Bank.
            </p>
            <Button size="lg" className="bg-gradient-purple">
              <Zap className="h-5 w-5 mr-2" />
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
