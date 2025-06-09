import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react'; // Example icon

interface FeatureHighlightItemProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureHighlightItem: React.FC<FeatureHighlightItemProps> = ({
  icon = <CheckCircle className="h-8 w-8 text-primary" />,
  title,
  description,
  className = '',
}) => {
  console.log("Rendering FeatureHighlightItem:", title);
  return (
    <Card className={`w-full ${className}`}>
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        {icon}
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureHighlightItem;