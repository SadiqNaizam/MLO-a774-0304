import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavigationMenu from '@/components/layout/NavigationMenu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  imageUrl?: string;
  tags: string[];
}

const placeholderBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'boosting-productivity-with-saas',
    title: '10 Ways Our SaaS Boosts Team Productivity',
    date: 'October 26, 2023',
    author: 'Jane Doe, Product Manager',
    excerpt: 'Discover actionable strategies and features within our platform that can significantly enhance your team\'s efficiency and collaboration.',
    category: 'Productivity',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    tags: ['SaaS', 'Productivity', 'Teamwork']
  },
  {
    id: '2',
    slug: 'understanding-data-analytics',
    title: 'The Beginner\'s Guide to Understanding Data Analytics in SaaS',
    date: 'October 15, 2023',
    author: 'John Smith, Data Scientist',
    excerpt: 'Data can be daunting. This guide breaks down the basics of SaaS analytics and how to leverage them for business growth.',
    category: 'Analytics',
    imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop',
    tags: ['Data', 'Analytics', 'Business Intelligence']
  },
  {
    id: '3',
    slug: 'secure-remote-work',
    title: 'Ensuring Secure Remote Work with Our Platform',
    date: 'September 28, 2023',
    author: 'Alice Brown, Security Lead',
    excerpt: 'Remote work is the new norm. Learn how our security features keep your data safe, no matter where your team is.',
    category: 'Security',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['Security', 'Remote Work', 'Compliance']
  },
  {
    id: '4',
    slug: 'future-of-saas-integrations',
    title: 'The Future of SaaS: Seamless Integrations',
    date: 'September 10, 2023',
    author: 'Mike Lee, Integrations Specialist',
    excerpt: 'Explore how our robust API and upcoming integrations will streamline your tech stack and workflows.',
    category: 'Integrations',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
    tags: ['API', 'Integrations', 'Workflow Automation']
  },
  // Add more posts for pagination
   {
    id: '5',
    slug: 'customer-success-stories',
    title: 'Customer Success Stories: How SaaSProduct Transformed Businesses',
    date: 'August 22, 2023',
    author: 'Sarah Chen, Customer Success',
    excerpt: 'Read real-life examples of how companies like yours are achieving remarkable results with our platform.',
    category: 'Case Studies',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    tags: ['Customers', 'Success Stories', 'ROI']
  },
   {
    id: '6',
    slug: 'ai-in-saas',
    title: 'The Role of AI in Modern SaaS Platforms',
    date: 'August 5, 2023',
    author: 'Dr. AI Expert',
    excerpt: 'An overview of how Artificial Intelligence is shaping the capabilities and future of SaaS solutions.',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    tags: ['AI', 'Machine Learning', 'Future Tech']
  }
];

const POSTS_PER_PAGE = 4;

const BlogIndexPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('BlogIndexPage loaded');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return placeholderBlogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Search is live, but this could trigger a specific search action if needed
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
       window.scrollTo(0, 0); // Scroll to top on page change
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavigationMenu onCtaClick={() => navigate('/signup')} />

      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Our Blog</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, news, and updates from the SaaSProduct team. Stay informed and inspired.
          </p>
        </header>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2">
            <div className="relative flex-grow">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Search articles, topics, tags..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="pl-10"
                />
            </div>
            <Button type="submit">Search</Button>
          </form>
          {/* Potential filter dropdowns for categories/tags could go here */}
        </section>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <section className="grid md:grid-cols-2 gap-8">
            {currentPosts.map(post => (
              <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {post.imageUrl && (
                  <Link to={`/blog/${post.slug}`} className="block">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                  </Link>
                )}
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                  <CardTitle className="text-xl md:text-2xl hover:text-primary transition-colors">
                     <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex-col items-start">
                  <div className="mb-3">
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="mr-1 mb-1 text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug}`} className="w-full">
                    <Button variant="outline" className="w-full">Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </section>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Articles Found</h2>
            <p className="text-muted-foreground">
              Sorry, we couldn't find any articles matching your search criteria. Try a different term.
            </p>
          </div>
        )}

        {/* Pagination Section */}
        {totalPages > 1 && (
          <section className="mt-12 md:mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {/* Add Ellipsis logic if many pages - for now, simple list */}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        )}
      </main>

      <footer className="py-8 border-t bg-muted/10 text-center text-muted-foreground mt-16">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogIndexPage;