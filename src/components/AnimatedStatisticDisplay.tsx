import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AnimatedStatisticDisplayProps {
  label: string;
  endValue: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  icon?: React.ReactNode;
}

const AnimatedStatisticDisplay: React.FC<AnimatedStatisticDisplayProps> = ({
  label,
  endValue,
  prefix = '',
  suffix = '',
  duration = 2.5,
  className = '',
  icon,
}) => {
  console.log("Rendering AnimatedStatisticDisplay:", label, "to", endValue);
  return (
    <Card className={`text-center ${className}`}>
      <CardHeader className="pb-2">
        {icon && <div className="mx-auto mb-2 text-primary">{icon}</div>}
        <CardTitle className="text-base font-medium text-muted-foreground">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-primary">
          <CountUp
            start={0}
            end={endValue}
            duration={duration}
            separator=","
            prefix={prefix}
            suffix={suffix}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimatedStatisticDisplay;