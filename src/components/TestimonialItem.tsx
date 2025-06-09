import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialItemProps {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorAvatarSrc?: string;
  className?: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  quote,
  authorName,
  authorRole,
  authorAvatarSrc,
  className = '',
}) => {
  console.log("Rendering TestimonialItem for:", authorName);
  const authorInitials = authorName
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <Card className={`w-full ${className}`}>
      <CardContent className="pt-6">
        <blockquote className="text-lg italic text-foreground mb-4">
          "{quote}"
        </blockquote>
        <div className="flex items-center space-x-3">
          <Avatar>
            {authorAvatarSrc && <AvatarImage src={authorAvatarSrc} alt={authorName} />}
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{authorName}</p>
            {authorRole && <p className="text-xs text-muted-foreground">{authorRole}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialItem;