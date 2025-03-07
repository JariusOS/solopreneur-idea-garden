
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, MessageSquare, Calendar, Code, LucideIcon, User, Clock } from 'lucide-react';

const CommunityFeature = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: LucideIcon; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const EventCard = ({ 
  title, 
  date, 
  time, 
  host, 
  attendees 
}: { 
  title: string; 
  date: string; 
  time: string; 
  host: string; 
  attendees: number;
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-primary/10 text-primary">Upcoming</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{attendees}</span>
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <User className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Hosted by {host}</span>
          </div>
          <Button className="w-full mt-4">Join Event</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="py-12 bg-accent">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Community</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  Connect with fellow solopreneurs, share ideas, attend events, and grow together.
                </p>
              </div>
              <Button className="bg-gradient-purple">
                Join the Community
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Community Features</h2>
                    <div className="space-y-8">
                      <CommunityFeature 
                        icon={MessageSquare} 
                        title="Discussion Forums" 
                        description="Engage in conversations, share feedback, and participate in brainstorming sessions with other members."
                      />
                      <CommunityFeature 
                        icon={Calendar} 
                        title="Virtual Events" 
                        description="Attend webinars, workshops, and networking sessions led by experienced entrepreneurs and industry experts."
                      />
                      <CommunityFeature 
                        icon={Code} 
                        title="Vibe Coding Sessions" 
                        description="Join weekly collaborative coding sessions where members explore new tools and prototype ideas together."
                      />
                      <CommunityFeature 
                        icon={Users} 
                        title="Mentorship Opportunities" 
                        description="Connect with mentors or offer your expertise to help guide fellow solopreneurs from concept to launch."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                    <div className="space-y-6">
                      <EventCard 
                        title="AI Tools for Solopreneurs Workshop" 
                        date="Oct 15, 2023" 
                        time="2:00 PM - 3:30 PM EST" 
                        host="Sarah Johnson" 
                        attendees={42}
                      />
                      <EventCard 
                        title="Weekly Vibe Coding: E-commerce Solutions" 
                        date="Oct 18, 2023" 
                        time="11:00 AM - 1:00 PM EST" 
                        host="Michael Chen" 
                        attendees={28}
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline">View All Events</Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 text-center p-8 border rounded-lg bg-muted/30">
                  <h2 className="text-2xl font-bold mb-4">Join Our Vibrant Community</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                    Become part of our exclusive community of 250 solopreneurs and unlock all these amazing features and opportunities.
                  </p>
                  <Button size="lg" className="bg-gradient-purple">
                    Join the Waitlist
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="events">
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-4">Events Coming Soon</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Our events calendar is being prepared. Join the waitlist to be notified when we launch our first community events.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="discussions">
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-4">Discussions Coming Soon</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Our community discussion forums are being set up. Join the waitlist to participate in conversations with fellow solopreneurs.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="members">
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-4">Member Directory Coming Soon</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Our member directory is being prepared. Join the waitlist to connect with innovative solopreneurs from around the world.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
