import { useState } from 'react';
import { Send, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_purpose-pilot/artifacts/nujre642_IMG_0157.JPG";

export const Footer = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && onEmailSubmit) {
      onEmailSubmit(email);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    Product: ['Assessment', 'Pathway Map', 'AI Insights', 'Pricing'],
    Company: ['About Us', 'Careers', 'Blog', 'Press'],
    Support: ['Help Center', 'Contact', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-[#111827] text-white" data-testid="footer">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Ready to Start
            <br />
            <span className="text-[#00A896]">Pursuing Solutions?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Join thousands of young adults who've discovered their path. Get career insights delivered to your inbox.
          </p>

          {/* Email Capture */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto" data-testid="email-capture-form">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white text-[#111827] border-2 border-[#111827] rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                style={{ boxShadow: '3px 3px 0 0 #00A896' }}
                required
                data-testid="email-input"
              />
              <button
                type="submit"
                className={`px-6 py-4 font-bold border-2 border-[#111827] rounded-lg transition-all flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-[#02C39A] text-white' 
                    : 'bg-[#FFD166] text-[#111827] hover:-translate-y-1'
                }`}
                style={{ boxShadow: '3px 3px 0 0 #00A896' }}
                data-testid="subscribe-btn"
              >
                {submitted ? (
                  <>Subscribed!</>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight strokeWidth={2.5} size={20} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo & Tagline */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 border-2 border-white rounded-full overflow-hidden bg-white">
                  <img src={LOGO_URL} alt="Pursuing Solutions" className="w-full h-full object-contain p-1" />
                </div>
                <span className="font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Pursuing Solutions
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Pathways to the Future. Helping youth and young adults discover meaningful career paths.
              </p>
              <div className="flex gap-3">
                {[Instagram, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00A896] transition-colors"
                    data-testid={`social-link-${idx}`}
                  >
                    <Icon strokeWidth={2} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold mb-4 text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-[#00A896] transition-colors text-sm"
                        data-testid={`footer-link-${link.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pursuing Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
