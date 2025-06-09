import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingPlanCardProps {
  planName: string;
  price: string; // e.g., "$29" or "Free"
  pricePeriod?: string; // e.g., "/ month"
  description: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
  isFeatured?: boolean;
  className?: string;
}

const PricingPlanCard: React.FC<PricingPlanCardProps> = ({
  planName,
  price,
  pricePeriod = '/ month',
  description,
  features,
  ctaText,
  onCtaClick,
  isFeatured = false,
  className = '',
}) => {
  console.log("Rendering PricingPlanCard:", planName);
  return (
    <Card className={`w-full flex flex-col ${isFeatured ? 'border-primary shadow-lg' : ''} ${className}`}>
      <CardHeader className="pb-4">
        {isFeatured && (
          <div className="text-xs uppercase font-semibold text-primary mb-1">Most Popular</div>
        )}
        <CardTitle className="text-2xl font-bold">{planName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-extrabold">{price}</span>
          {price.toLowerCase() !== 'free' && price.toLowerCase() !== 'custom' && (
            <span className="text-muted-foreground">{pricePeriod}</span>
          )}
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={onCtaClick}
          variant={isFeatured ? 'default' : 'outline'}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingPlanCard;