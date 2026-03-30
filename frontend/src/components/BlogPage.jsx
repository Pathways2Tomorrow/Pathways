import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    slug: 'ai-careers-2025',
    title: "How AI is Reshaping Career Paths in 2025",
    excerpt: "Discover which careers are thriving with AI and how to position yourself for success in the age of automation.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Dr. Patricia Williams",
    date: "March 28, 2026",
    readTime: "5 min read",
    category: "AI & Future",
    featured: true,
  },
  {
    id: 2,
    slug: 'neurodivergent-career-success',
    title: "Career Success for Neurodivergent Young Adults",
    excerpt: "Flexible pathways and strategies that honor different ways of thinking, learning, and working.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Marcus Chen",
    date: "March 25, 2026",
    readTime: "7 min read",
    category: "Inclusive Careers",
    featured: true,
  },
  {
    id: 3,
    slug: 'first-gen-college-guide',
    title: "First-Generation College Student? Here's Your Career Roadmap",
    excerpt: "Navigate the unwritten rules of career planning when you're the first in your family to attend college.",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Aisha Johnson",
    date: "March 20, 2026",
    readTime: "6 min read",
    category: "Education",
    featured: false,
  },
  {
    id: 4,
    slug: 'personality-test-myths',
    title: "5 Myths About Personality Tests (And What Actually Works)",
    excerpt: "Not all assessments are created equal. Learn what makes research-backed tools different from viral quizzes.",
    image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Dr. Patricia Williams",
    date: "March 15, 2026",
    readTime: "4 min read",
    category: "Assessment",
    featured: false,
  },
  {
    id: 5,
    slug: 'gap-year-guide',
    title: "Making the Most of Your Gap Year: A Career Perspective",
    excerpt: "How to turn your gap year into a powerful career exploration tool without wasting time or money.",
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Marcus Chen",
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Gap Year",
    featured: false,
  },
  {
    id: 6,
    slug: 'values-based-career',
    title: "Why Your Values Matter More Than Your Major",
    excerpt: "The surprising research on why aligning your career with your values leads to greater success and satisfaction.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Aisha Johnson",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Career Planning",
    featured: false,
  },
];

const categories = ["All", "AI & Future", "Inclusive Careers", "Education", "Assessment", "Gap Year", "Career Planning"];

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-[#F8F9FA]" data-testid="blog-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#111827] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#FFD166] text-[#111827] px-4 py-2 rounded-full border-2 border-white font-semibold text-sm mb-6" style={{ boxShadow: '2px 2px 0 0 white' }}>
            Insights & Resources
          </span>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            The Pathways
            <span className="text-[#00A896]"> Blog</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Career insights, research updates, and practical advice for young adults navigating their future.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredPosts.map((post) => (
            <article 
              key={post.id} 
              className="neo-card neo-card-hover overflow-hidden group cursor-pointer"
              data-testid={`featured-post-${post.id}`}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#00A896] text-white px-3 py-1 rounded-full text-xs font-semibold border border-[#111827]">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h2 
                  className="text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#00A896] transition-colors"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User size={14} />
                    {post.author}
                    <span className="mx-2">•</span>
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <ArrowRight className="text-[#00A896]" strokeWidth={2.5} size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm border-2 border-[#111827] transition-all ${
                selectedCategory === category
                  ? 'bg-[#111827] text-white'
                  : 'bg-white text-[#111827] hover:bg-gray-100'
              }`}
              style={{ boxShadow: selectedCategory === category ? 'none' : '2px 2px 0 0 #111827' }}
              data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="neo-card neo-card-hover overflow-hidden group cursor-pointer"
              data-testid={`blog-post-${post.id}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#F8F9FA] text-[#111827] px-2 py-1 rounded text-xs font-semibold border border-gray-200">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 
                  className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#00A896] transition-colors line-clamp-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-[#00A896]">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Get Career Insights Weekly
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join 5,000+ young adults receiving our best career advice every Friday.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 bg-white text-[#111827] border-2 border-[#111827] rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white"
              style={{ boxShadow: '3px 3px 0 0 #111827' }}
              data-testid="blog-newsletter-input"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-[#FFD166] text-[#111827] font-bold border-2 border-[#111827] rounded-lg hover:-translate-y-1 transition-all"
              style={{ boxShadow: '3px 3px 0 0 #111827' }}
              data-testid="blog-newsletter-btn"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
