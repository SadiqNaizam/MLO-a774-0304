import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from '@/components/layout/NavigationMenu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FeatureHighlightItem from '@/components/FeatureHighlightItem';
import PricingPlanCard from '@/components/PricingPlanCard';
import TestimonialItem from '@/components/TestimonialItem';
import AnimatedStatisticDisplay from '@/components/AnimatedStatisticDisplay';

import { CheckCircle, Zap, BarChart, Users, Lightbulb, ShieldCheck, Mail } from 'lucide-react';

const SaaSProductLandingPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('SaaSProductLandingPage loaded');

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Blazing Fast Performance",
      description: "Experience unparalleled speed and efficiency with our optimized platform.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Gain deep insights into your data with our comprehensive analytics tools.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Enterprise-Grade Security",
      description: "Your data is safe with us. We use top-tier security measures.",
    },
  ];

  const testimonials = [
    {
      quote: "This product has revolutionized how we manage our workflow. Highly recommended!",
      authorName: "Alice Johnson",
      authorRole: "CEO, Tech Solutions Inc.",
      authorAvatarSrc: "https://i.pravatar.cc/150?u=alicejohnson",
    },
    {
      quote: "The customer support is fantastic, and the features are exactly what we needed.",
      authorName: "Bob Williams",
      authorRole: "Project Manager, Innovate Ltd.",
      authorAvatarSrc: "https://i.pravatar.cc/150?u=bobwilliams",
    },
  ];

  const pricingPlans = [
    {
      planName: "Basic",
      price: "$29",
      pricePeriod: "/ month",
      description: "For small teams and startups.",
      features: ["10 Projects", "5GB Storage", "Basic Analytics", "Email Support"],
      ctaText: "Choose Basic",
      onCtaClick: () => navigate('/signup?plan=basic'),
    },
    {
      planName: "Pro",
      price: "$79",
      pricePeriod: "/ month",
      description: "For growing businesses.",
      features: ["Unlimited Projects", "50GB Storage", "Advanced Analytics", "Priority Support", "API Access"],
      ctaText: "Choose Pro",
      onCtaClick: () => navigate('/signup?plan=pro'),
      isFeatured: true,
    },
  ];

  const faqItems = [
    {
      value: "item-1",
      question: "What is the main benefit of this SaaS product?",
      answer: "Our product streamlines your workflow, saving you time and resources, and providing actionable insights to grow your business."
    },
    {
      value: "item-2",
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for our Pro plan. No credit card required to get started."
    },
    {
      value: "item-3",
      question: "How secure is my data?",
      answer: "We prioritize security with end-to-end encryption, regular backups, and compliance with industry standards."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavigationMenu onCtaClick={() => navigate('/signup')} />

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            The Future of <span className="text-primary">Your Workflow</span> is Here
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Empower your team with our cutting-edge SaaS solution designed for efficiency and growth.
            Solve [your problem] today.
          </p>
          <Button size="lg" onClick={() => navigate('/signup')} className="text-lg px-8 py-6">
            Start Free 14-Day Trial
          </Button>
          <p className="text-sm text-muted-foreground mt-3">No credit card required.</p>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="SaaS Product Interface Mockup"
            className="mt-12 rounded-lg shadow-2xl mx-auto max-w-3xl"
          />
        </div>
      </header>

      <main className="flex-grow">
        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Powerful Features, Tangible Benefits</h2>
            <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
              Discover how our platform can transform your daily operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureHighlightItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section - Animated Statistics */}
        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Trusted by Thousands Worldwide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedStatisticDisplay
                icon={<Users className="h-10 w-10" />}
                label="Active Users"
                endValue={15000}
                suffix="+"
              />
              <AnimatedStatisticDisplay
                icon={<CheckCircle className="h-10 w-10" />}
                label="Projects Completed"
                endValue={75000}
                suffix="+"
              />
              <AnimatedStatisticDisplay
                icon={<Lightbulb className="h-10 w-10" />}
                label="Positive Reviews"
                endValue={4800}
                suffix="+"
              />
            </div>
          </div>
        </section>
        
        {/* Social Proof Section - Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={index}
                  quote={testimonial.quote}
                  authorName={testimonial.authorName}
                  authorRole={testimonial.authorRole}
                  authorAvatarSrc={testimonial.authorAvatarSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Overview Section */}
        <section id="pricing-overview" className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
              Choose the plan that's right for you. No hidden fees, ever.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {pricingPlans.slice(0,2).map((plan, index) => ( // Show a subset or link to full pricing
                <PricingPlanCard
                  key={index}
                  planName={plan.planName}
                  price={plan.price}
                  pricePeriod={plan.pricePeriod}
                  description={plan.description}
                  features={plan.features}
                  ctaText={plan.ctaText}
                  onCtaClick={plan.onCtaClick}
                  isFeatured={plan.isFeatured}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" onClick={() => navigate('/pricing')}>
                View All Plans
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map(item => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-lg">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Join thousands of satisfied customers and start your free trial today.
            </p>
            <form className="max-w-md mx-auto sm:flex sm:gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/signup'); }}>
              <Label htmlFor="cta-email" className="sr-only">Email address</Label>
              <Input 
                id="cta-email"
                type="email" 
                placeholder="Enter your email" 
                className="mb-4 sm:mb-0 text-foreground bg-background" // Adjust colors for contrast
                required 
              />
              <Button type="submit" size="lg" variant="secondary" className="w-full sm:w-auto">
                Get Started Now
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t bg-background text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved.</p>
          {/* Basic footer links could go here if needed */}
        </div>
      </footer>
    </div>
  );
};

export default SaaSProductLandingPage;