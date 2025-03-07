
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  likes: number;
  comments: number;
  date: string;
}

const IdeaCard = ({ id, title, description, category, image, likes, comments, date }: IdeaCardProps) => {
  return (
    <Card className="card-hover overflow-hidden h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-accent text-accent-foreground mb-2">
            {category}
          </Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="text-xl line-clamp-2">
          <Link to={`/ideas/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-4 flex-grow">
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1 h-auto p-1">
            <Heart size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground text-sm">{likes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center gap-1 h-auto p-1">
            <MessageSquare size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground text-sm">{comments}</span>
          </Button>
        </div>
        
        <Button variant="ghost" size="sm" className="h-auto p-1">
          <Share2 size={16} className="text-muted-foreground" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;
