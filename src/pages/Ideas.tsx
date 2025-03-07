
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IdeaCard from '@/components/IdeaCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

// Mock data for ideas
const ideas = [
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
  },
  {
    id: '4',
    title: 'Personalized Wellness Program Generator for Busy Entrepreneurs',
    description: 'An app that creates customized wellness programs based on health goals, time constraints, and personal preferences for entrepreneurs on the go.',
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1489659639091-8b687bc4386e?auto=format&fit=crop&q=80&w=600&h=350',
    likes: 63,
    comments: 15,
    date: '3 days ago'
  },
  {
    id: '5',
    title: 'Automated Email Sequence Creator for Client Onboarding',
    description: 'A tool that generates professional, customizable email sequences for freelancers and consultants to streamline their client onboarding process.',
    category: 'Marketing & Advertising',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600&h=350',
    likes: 89,
    comments: 27,
    date: '4 days ago'
  },
  {
    id: '6',
    title: 'AI-Driven Financial Forecasting for Solopreneurs',
    description: 'A financial tool that uses AI to analyze your business data and project future revenue, expenses, and growth opportunities.',
    category: 'Finance & FinTech',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600&h=350',
    likes: 102,
    comments: 36,
    date: '5 days ago'
  }
];

const Ideas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="py-12 bg-accent">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Daily Startup Ideas</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore our collection of unique product ideas for solopreneurs, updated daily with fresh concepts across various industries.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="bg-card border rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search ideas..." className="pl-10" />
                </div>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="tech">Technology & Software</SelectItem>
                    <SelectItem value="health">Health & Wellness</SelectItem>
                    <SelectItem value="education">Education & E-Learning</SelectItem>
                    <SelectItem value="finance">Finance & FinTech</SelectItem>
                    <SelectItem value="marketing">Marketing & Advertising</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle & Productivity</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="comments">Most Commented</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ideas.map(idea => (
                <IdeaCard key={idea.id} {...idea} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">Load More Ideas</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ideas;
