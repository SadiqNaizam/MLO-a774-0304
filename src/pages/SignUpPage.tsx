import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from '@/components/layout/NavigationMenu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Eye, EyeOff, TriangleAlert } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

type SignUpFormValues = z.infer<typeof formSchema>;

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('SignUpPage loaded');
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    console.log("Sign Up Submitted:", data);
    // Simulate API call
    setSubmissionStatus(null); // Clear previous status
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Example success:
    // setSubmissionStatus({ type: 'success', message: 'Account created successfully! Redirecting...' });
    // setTimeout(() => navigate('/dashboard'), 2000); // Redirect to a dashboard or confirmation page

    // Example error:
    // setSubmissionStatus({ type: 'error', message: 'An account with this email already exists.' });
    
    // For this example, let's assume success and redirect to landing page
    setSubmissionStatus({ type: 'success', message: 'Account created successfully! Welcome aboard.' });
     setTimeout(() => {
        // In a real app, you'd redirect to a user dashboard or similar
        navigate('/'); 
     }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <NavigationMenu onCtaClick={() => navigate('/signup')} />
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold">Create Your Account</CardTitle>
            <CardDescription>Join us and start your journey with SaaSProduct.</CardDescription>
          </CardHeader>
          <CardContent>
            {submissionStatus && (
              <Alert variant={submissionStatus.type === 'error' ? 'destructive': undefined} className="mb-4">
                 {submissionStatus.type === 'error' && <TriangleAlert className="h-4 w-4" />}
                <AlertTitle>{submissionStatus.type === 'success' ? 'Success!' : 'Error'}</AlertTitle>
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
                        <Input id="fullName" placeholder="John Doe" {...field} />
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
                        <Input id="email" type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            placeholder="********" 
                            {...field} 
                          />
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Creating Account..." : "Sign Up"}
                </Button>
              </form>
            </Form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Button variant="link" className="p-0 h-auto font-medium text-primary" onClick={() => navigate('/login')}> {/* Assuming a /login route exists */}
                Log in
              </Button>
            </p>
          </CardContent>
        </Card>
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground">
         <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUpPage;