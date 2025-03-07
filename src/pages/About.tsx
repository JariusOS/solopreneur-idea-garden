
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Lightbulb, Zap, Users, MessageSquare, Calendar, Trophy, BadgeCheck, 
  BookOpen, Rocket, Code, Handshake, BarChart 
} from 'lucide-react';

// Testimonial component
const Testimonial = ({ quote, author, role, image }: { quote: string; author: string; role: string; image: string }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <CardTitle className="text-lg">{author}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="italic text-muted-foreground">{quote}</p>
      </CardContent>
    </Card>
  );
};

// Feature component
const Feature = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="py-12 bg-accent">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Gaiad Ideas Bank</h1>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower solopreneurs with innovation, community, and resources to bring their ideas to life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Gaiad Ideas Bank was founded on a simple yet powerful belief: every solopreneur has the potential to create something extraordinary, but often lacks the right ideas, support, and resources to make it happen.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  We've built an exclusive, creator-driven ecosystem where solopreneurs can discover daily inspiration, connect with like-minded innovators, and access the tools and knowledge needed to transform concepts into successful ventures.
                </p>
                <p className="text-lg text-muted-foreground">
                  By limiting our community to 250 members, we ensure meaningful connections, personalized support, and a high-quality experience for everyone involved.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1336" 
                  alt="Solopreneurs collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
              <p className="text-lg text-muted-foreground">
                We've created a unique platform that combines daily inspiration with community support and practical resources.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Feature 
                icon={BookOpen} 
                title="500 Daily Ideas" 
                description="A new, unique product idea every day for 500 days, spanning across various industries." 
              />
              <Feature 
                icon={Users} 
                title="Exclusive Community" 
                description="Limited to 250 members to ensure quality interactions and meaningful connections." 
              />
              <Feature 
                icon={BadgeCheck} 
                title="Premium Resources" 
                description="Access to expert webinars, workshops, and our unique OG Badge NFT." 
              />
              <Feature 
                icon={Rocket} 
                title="Launch Support" 
                description="Dedicated assistance to help you successfully bring your project to market." 
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Daily StartUps</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive one new, unique original product idea MVP per day for 500 days, categorized across various industries and interests.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Product UI Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AI-generated visuals for each idea, making it easier to grasp concepts quickly and visualize potential implementation.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Community Interaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Dedicated chat rooms and discussion boards for real-time conversations, brainstorming, and collaboration.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Weekly Vibe Coding</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Regular sessions where members collaborate to explore the latest AI tools and prototype ideas together.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Collective Ideation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Group sessions to refine ideas, plus opportunities to offer paid consultancy services and mentorship.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Quarterly Webinars</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Regular webinars and expert talks providing valuable insights from experienced entrepreneurs and industry leaders.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Feedback System</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Vote, comment, and provide feedback on ideas, creating an evolving repository where concepts can be iterated upon.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Gamification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Points, badges, and rewards to incentivize participation and create a sense of achievement and friendly competition.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Gaiad OG Badge NFT</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Exclusive, tradable NFT badge signifying membership status, offering both recognition and potential market value.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
              <p className="text-lg text-muted-foreground">
                Hear from our early access members about their experience with Gaiad Ideas Bank.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Testimonial 
                quote="The daily ideas alone are worth the membership. I've already started building an MVP based on one of the concepts shared in my first week." 
                author="Alex Chen" 
                role="SaaS Founder" 
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
              />
              <Testimonial 
                quote="The community aspect is what sets Gaiad apart. Being able to discuss ideas with like-minded solopreneurs has been invaluable for refining my approach." 
                author="Maya Johnson" 
                role="Product Designer" 
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
              />
              <Testimonial 
                quote="Weekly vibe coding sessions have transformed how I approach prototyping. Collaborating with others who bring different skills has accelerated my development process." 
                author="Raj Patel" 
                role="Indie Developer" 
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Join Gaiad Ideas Bank?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Secure your spot as one of our exclusive 250 members and start receiving daily startup ideas to fuel your solopreneur journey.
              </p>
              <Button size="lg" className="bg-gradient-purple">
                <Zap className="h-5 w-5 mr-2" />
                Join the Waitlist
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
