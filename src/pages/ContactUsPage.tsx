import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from '@/components/layout/NavigationMenu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, TriangleAlert, CheckCircle } from 'lucide-react';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactUsPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('ContactUsPage loaded');
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Contact Form Submitted:", data);
    setSubmissionStatus(null);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For this example, assume success
    setSubmissionStatus({ type: 'success', message: 'Your message has been sent! We will get back to you shortly.' });
    form.reset(); // Reset form fields
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavigationMenu onCtaClick={() => navigate('/signup')} />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or need support, feel free to reach out.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {submissionStatus && (
                <Alert variant={submissionStatus.type === 'error' ? 'destructive': undefined} className="mb-6">
                  {submissionStatus.type === 'success' ? <CheckCircle className="h-4 w-4" /> : <TriangleAlert className="h-4 w-4" />}
                  <AlertTitle>{submissionStatus.type === 'success' ? 'Message Sent!' : 'Error'}</AlertTitle>
                  <AlertDescription>{submissionStatus.message}</AlertDescription>
                </Alert>
              )}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="fullName">Full Name</FormLabel>
                        <FormControl>
                          <Input id="fullName" placeholder="Your Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <FormControl>
                          <Input id="email" type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="subject">Subject</FormLabel>
                        <FormControl>
                          <Input id="subject" placeholder="Regarding..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <FormControl>
                          <Textarea id="message" placeholder="Your message here..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Other ways to reach us.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a href="mailto:support@saasproduct.com" className="text-primary hover:underline">
                      support@saasproduct.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">123 SaaS Street, Tech City, TX 75001</p>
                  </div>
                </div>
              </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                    <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t bg-muted/10 text-center text-muted-foreground mt-16">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;