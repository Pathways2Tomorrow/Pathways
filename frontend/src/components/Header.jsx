import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = ({ onGetStarted, onLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Assessment', href: '/#assessment' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#111827]" data-testid="header">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Text Only */}
        <a href="/" className="flex items-center" data-testid="logo-link">
          <span className="font-black text-[#111827] text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Pursuing Solutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-semibold text-[#111827] hover-underline transition-colors"
              data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onLogin}
            className="font-semibold text-[#111827] hover-underline"
            data-testid="login-btn"
          >
            Log In
          </button>
          <button
            onClick={onGetStarted}
            className="btn-primary text-sm"
            data-testid="get-started-header-btn"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 border-2 border-[#111827] rounded-lg"
          data-testid="mobile-menu-btn"
          style={{ boxShadow: '2px 2px 0 0 #111827' }}
        >
          {mobileMenuOpen ? <X strokeWidth={2.5} size={24} /> : <Menu strokeWidth={2.5} size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#111827] px-6 py-6" data-testid="mobile-menu">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-semibold text-[#111827] text-lg py-2 border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => { onLogin(); setMobileMenuOpen(false); }}
              className="btn-secondary w-full"
              data-testid="mobile-login-btn"
            >
              Log In
            </button>
            <button
              onClick={() => { onGetStarted(); setMobileMenuOpen(false); }}
              className="btn-primary w-full"
              data-testid="mobile-get-started-btn"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
