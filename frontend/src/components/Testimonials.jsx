import Marquee from 'react-fast-marquee';
import { Quote } from 'lucide-react';

const TESTIMONIAL_1 = "https://images.pexels.com/photos/6214726/pexels-photo-6214726.jpeg";
const TESTIMONIAL_2 = "https://images.unsplash.com/photo-1726710856076-dcf34775ab93?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxjb25maWRlbnQlMjBnZW4lMjB6JTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NDg5NTI3NHww&ixlib=rb-4.1.0&q=85";

const testimonials = [
  {
    name: 'Maya Thompson',
    role: 'College Freshman',
    image: TESTIMONIAL_1,
    quote: "I was so lost about what to study. This assessment showed me careers I never even considered but totally match who I am!",
    bgClass: 'neo-card',
  },
  {
    name: 'Jordan Lee',
    role: 'Recent Graduate',
    image: TESTIMONIAL_2,
    quote: "The AI Advantage Layer was eye-opening. Now I know exactly which skills to build for the future.",
    bgClass: 'neo-card-teal',
  },
  {
    name: 'Alex Rivera',
    role: 'Career Switcher',
    image: TESTIMONIAL_1,
    quote: "Finally, career advice that respects my background and doesn't feel generic. The Pathway Map changed everything.",
    bgClass: 'neo-card-yellow',
  },
  {
    name: 'Sam Chen',
    role: 'High School Senior',
    image: TESTIMONIAL_2,
    quote: "I have ADHD and most career tools don't work for me. This one actually gave me flexible options I can stick with.",
    bgClass: 'neo-card',
  },
  {
    name: 'Priya Patel',
    role: 'Gap Year Explorer',
    image: TESTIMONIAL_1,
    quote: "The booking call with the advisor was so helpful. She understood my cultural context and gave real advice.",
    bgClass: 'neo-card-blue',
  },
];

const TestimonialCard = ({ testimonial }) => {
  const isWhiteCard = testimonial.bgClass === 'neo-card';
  
  return (
    <div 
      className={`${testimonial.bgClass} p-6 w-[320px] md:w-[380px] mx-4 flex-shrink-0`}
      data-testid="testimonial-card"
    >
      <Quote 
        strokeWidth={2.5} 
        size={32} 
        className={isWhiteCard ? 'text-[#00A896] mb-4' : 'text-white/50 mb-4'} 
      />
      <p className={`mb-6 leading-relaxed ${isWhiteCard ? 'text-gray-700' : ''}`}>
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-[#111827] overflow-hidden">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className={`font-bold ${isWhiteCard ? 'text-[#111827]' : ''}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
            {testimonial.name}
          </p>
          <p className={`text-sm ${isWhiteCard ? 'text-gray-500' : 'opacity-80'}`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="text-center">
          <span className="inline-block bg-[#02C39A] text-white px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            Success Stories
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Real People, Real Pathways
          </h2>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="mb-6">
        <Marquee speed={40} gradient={false}>
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={`row1-${idx}`} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 - Reverse */}
      <div>
        <Marquee speed={30} gradient={false} direction="right">
          {[...testimonials].reverse().map((testimonial, idx) => (
            <TestimonialCard key={`row2-${idx}`} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
