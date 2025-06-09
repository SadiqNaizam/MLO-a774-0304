import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from '@/components/layout/NavigationMenu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PricingPlanCard from '@/components/PricingPlanCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('PricingPage loaded');

  const pricingPlans = [
    {
      planName: "Starter",
      price: "Free",
      pricePeriod: "",
      description: "Perfect for individuals and hobbyists.",
      features: ["1 Project", "1GB Storage", "Basic Features", "Community Support"],
      ctaText: "Get Started Free",
      onCtaClick: () => navigate('/signup?plan=starter'),
    },
    {
      planName: "Basic",
      price: "$29",
      pricePeriod: "/ month",
      description: "For small teams and startups getting off the ground.",
      features: ["10 Projects", "15GB Storage", "Core Features", "Email Support"],
      ctaText: "Choose Basic",
      onCtaClick: () => navigate('/signup?plan=basic'),
    },
    {
      planName: "Pro",
      price: "$79",
      pricePeriod: "/ month",
      description: "For growing businesses needing more power.",
      features: ["Unlimited Projects", "50GB Storage", "Advanced Features", "Priority Support", "API Access"],
      ctaText: "Choose Pro",
      onCtaClick: () => navigate('/signup?plan=pro'),
      isFeatured: true,
    },
    {
      planName: "Enterprise",
      price: "Custom",
      pricePeriod: "",
      description: "Tailored solutions for large organizations.",
      features: ["Dedicated Infrastructure", "Unlimited Storage", "Premium Support", "Custom Integrations", "SLA"],
      ctaText: "Contact Sales",
      onCtaClick: () => navigate('/contact-us?type=enterprise'),
    },
  ];

  const faqItems = [
    {
      value: "item-1",
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time from your account dashboard. Prorated charges or credits will be applied."
    },
    {
      value: "item-2",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also support invoicing."
    },
    {
      value: "item-3",
      question: "Is there a discount for annual billing?",
      answer: "Yes, we offer a discount equivalent to two months free if you choose to pay annually. You can select this option during checkout."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavigationMenu onCtaClick={() => navigate('/signup')} />

      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Find the Perfect Plan for You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, flexible pricing that scales with your needs. No surprises.
          </p>
        </header>

        {/* Pricing Plans Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
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
              className="h-full" // Ensure cards are same height
            />
          ))}
        </section>

        {/* Comparison Table (Simplified for example) */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Compare Features</h2>
            <Card>
                <CardContent className="p-6">
                    <p className="text-muted-foreground">
                        A detailed feature comparison table would go here, allowing users to see differences between plans side-by-side.
                        For brevity, this is a placeholder. In a real application, this would be a comprehensive table.
                    </p>
                    {/* Example: could use shadcn/ui Table component here */}
                </CardContent>
            </Card>
        </section>


        {/* FAQ Section */}
        <section id="faq" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Frequently Asked Questions</h2>
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
        </section>
      </main>

      <footer className="py-8 border-t bg-background text-center text-muted-foreground mt-16">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;