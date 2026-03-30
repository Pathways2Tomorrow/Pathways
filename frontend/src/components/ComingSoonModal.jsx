import { X, Rocket, Bell } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const ComingSoonModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await fetch(`${BACKEND_URL}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      // Continue anyway
    }
    
    setSubmitted(true);
    toast.success("You're on the list!", {
      description: "We'll notify you when we launch."
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-testid="coming-soon-modal">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="neo-card relative w-full max-w-md p-8 z-10 text-center" data-testid="coming-soon-modal-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-lg border-2 border-[#111827] flex items-center justify-center hover:bg-gray-100 transition-colors"
          data-testid="close-coming-soon-modal-btn"
        >
          <X strokeWidth={2.5} size={20} />
        </button>

        {/* Icon */}
        <div className="w-20 h-20 bg-[#FFD166] rounded-full border-2 border-[#111827] flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '4px 4px 0 0 #111827' }}>
          <Rocket strokeWidth={2.5} size={36} className="text-[#111827]" />
        </div>

        {/* Content */}
        <h2 
          className="text-3xl font-bold text-[#111827] mb-3"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Coming Soon!
        </h2>
        <p className="text-gray-600 mb-6">
          We're putting the finishing touches on something amazing. Be the first to know when we launch!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="neo-input flex-1"
                required
                data-testid="coming-soon-email-input"
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                data-testid="notify-me-btn"
              >
                <Bell strokeWidth={2.5} size={18} />
                Notify Me
              </button>
            </div>
            <p className="text-xs text-gray-500">
              We'll only email you when we launch. No spam, ever.
            </p>
          </form>
        ) : (
          <div className="neo-card-teal p-4" data-testid="coming-soon-success">
            <p className="font-semibold">You're on the list!</p>
            <p className="text-sm opacity-90">We'll let you know when we launch.</p>
          </div>
        )}

        {/* Social proof */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Join <span className="font-bold text-[#00A896]">2,500+</span> others waiting for launch
          </p>
        </div>
      </div>
    </div>
  );
};
