
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { 
  Laptop, Heart, GraduationCap, BarChart4, Target, Coffee, 
  ShoppingBag, Plane, UtensilsCrossed, Gamepad2, Home, Speaker, Database, 
  Sparkles, Building2, Users 
} from 'lucide-react';

// Mock data for categories
const categories = [
  {
    id: 'tech',
    title: 'Technology & Software',
    description: 'Innovative software solutions, SaaS products, and tech tools for various industries and needs.',
    icon: <Laptop className="h-6 w-6 text-primary" />,
    count: 87
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    description: 'Products and services focused on physical and mental wellbeing, fitness, and healthcare.',
    icon: <Heart className="h-6 w-6 text-primary" />,
    count: 64
  },
  {
    id: 'education',
    title: 'Education & E-Learning',
    description: 'Platforms and tools for knowledge sharing, skill development, and educational content.',
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    count: 56
  },
  {
    id: 'finance',
    title: 'Finance & FinTech',
    description: 'Financial management tools, investment platforms, and innovative payment solutions.',
    icon: <BarChart4 className="h-6 w-6 text-primary" />,
    count: 42
  },
  {
    id: 'marketing',
    title: 'Marketing & Advertising',
    description: 'Tools for brand promotion, content creation, and marketing campaign management.',
    icon: <Target className="h-6 w-6 text-primary" />,
    count: 53
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Productivity',
    description: 'Solutions for improving daily routines, personal organization, and work efficiency.',
    icon: <Coffee className="h-6 w-6 text-primary" />,
    count: 61
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    description: 'Online store concepts, product ideas, and retail innovations for digital markets.',
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    count: 38
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    description: 'Travel planning tools, accommodation solutions, and experience-based services.',
    icon: <Plane className="h-6 w-6 text-primary" />,
    count: 29
  },
  {
    id: 'food',
    title: 'Food & Beverage',
    description: 'Culinary innovations, food delivery concepts, and beverage product ideas.',
    icon: <UtensilsCrossed className="h-6 w-6 text-primary" />,
    count: 34
  },
  {
    id: 'entertainment',
    title: 'Entertainment & Gaming',
    description: 'Media streaming services, gaming platforms, and entertainment solutions.',
    icon: <Gamepad2 className="h-6 w-6 text-primary" />,
    count: 45
  },
  {
    id: 'smart-home',
    title: 'Smart Home & IoT',
    description: 'Connected devices, home automation solutions, and Internet of Things innovations.',
    icon: <Home className="h-6 w-6 text-primary" />,
    count: 27
  },
  {
    id: 'marketing',
    title: 'Marketing & Advertising',
    description: 'Creative advertising solutions, marketing automation, and brand building tools.',
    icon: <Speaker className="h-6 w-6 text-primary" />,
    count: 39
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description: 'Tools for data collection, analysis, visualization, and business intelligence.',
    icon: <Database className="h-6 w-6 text-primary" />,
    count: 31
  },
  {
    id: 'development',
    title: 'Personal Development',
    description: 'Self-improvement tools, coaching platforms, and personal growth resources.',
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    count: 48
  },
  {
    id: 'realestate',
    title: 'Real Estate & PropTech',
    description: 'Property management solutions, real estate platforms, and construction innovations.',
    icon: <Building2 className="h-6 w-6 text-primary" />,
    count: 19
  },
  {
    id: 'remote',
    title: 'Remote Work & Collaboration',
    description: 'Tools for distributed teams, virtual collaboration, and remote work management.',
    icon: <Users className="h-6 w-6 text-primary" />,
    count: 52
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="py-12 bg-accent">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore startup ideas organized by industry, interest, and specialization to find concepts that align with your expertise.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map(category => (
                <CategoryCard key={category.id} {...category} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
