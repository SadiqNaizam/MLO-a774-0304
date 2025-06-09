import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Page Components
import SaaSProductLandingPage from "./pages/SaaSProductLandingPage";
import PricingPage from "./pages/PricingPage";
import SignUpPage from "./pages/SignUpPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SaaSProductLandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          {/* Placeholder for individual blog post page, assuming /blog/:slug */}
          {/* <Route path="/blog/:slug" element={<BlogPostPage />} /> */} 
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;