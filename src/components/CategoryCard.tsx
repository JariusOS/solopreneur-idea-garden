
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  count: number;
}

const CategoryCard = ({ id, title, description, icon, count }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${id}`}>
      <Card className="card-hover h-full flex flex-col transition-all">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-md flex items-center justify-center bg-primary/10 mb-3">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="pb-4 flex-grow">
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardContent>
        
        <CardFooter className="text-sm text-muted-foreground">
          {count} ideas
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CategoryCard;
