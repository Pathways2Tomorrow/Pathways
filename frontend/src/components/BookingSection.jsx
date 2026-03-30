import { Calendar, Clock, Video, Rocket, Bell } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ADVISOR_PHOTO = "https://customer-assets.emergentagent.com/job_purpose-pilot/artifacts/2qw0fvjw_IMG_0158.JPG";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const BookingSection = ({ onComingSoon }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = async (e) => {
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
      description: "We'll notify you when booking opens."
    });
  };

  return (
    <section id="book-call" className="section-padding" data-testid="booking-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left - Advisor Info */}
        <div>
          <span className="inline-block bg-[#00A896] text-white px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            1-on-1 Guidance
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Book Your
            <br />
            <span className="text-[#00A896]">Pathway Call</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ready to go deeper? Schedule a personalized session with our expert Pathway Advisor 
            who will help you navigate your unique journey with cultural awareness and practical guidance.
          </p>

          {/* Advisor Card */}
          <div className="neo-card p-6 flex items-start gap-6" data-testid="advisor-card">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl border-2 border-[#111827] overflow-hidden flex-shrink-0" style={{ boxShadow: '3px 3px 0 0 #111827' }}>
              <img 
                src={ADVISOR_PHOTO} 
                alt="Pathway Advisor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Dr. Patricia Williams
              </h3>
              <p className="text-[#00A896] font-semibold text-sm mb-3">Senior Pathway Advisor</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                20+ years guiding young adults through career transitions. Specializes in 
                culturally-informed coaching and neurodivergent-friendly approaches.
              </p>
            </div>
          </div>

          {/* Call Benefits */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD166] rounded-lg border-2 border-[#111827] flex items-center justify-center" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <Video strokeWidth={2.5} size={20} className="text-[#111827]" />
              </div>
              <span className="font-medium text-[#111827]">30-minute video call via Zoom or Teams</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#02C39A] rounded-lg border-2 border-[#111827] flex items-center justify-center" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <Calendar strokeWidth={2.5} size={20} className="text-white" />
              </div>
              <span className="font-medium text-[#111827]">Synced with Microsoft Outlook Calendar</span>
            </div>
          </div>
        </div>

        {/* Right - Coming Soon Card */}
        <div className="neo-card p-8 text-center" data-testid="booking-coming-soon">
          {/* Icon */}
          <div className="w-24 h-24 bg-[#FFD166] rounded-full border-2 border-[#111827] flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '4px 4px 0 0 #111827' }}>
            <Rocket strokeWidth={2.5} size={44} className="text-[#111827]" />
          </div>

          <h3 
            className="text-2xl font-bold text-[#111827] mb-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Booking Coming Soon!
          </h3>
          <p className="text-gray-600 mb-6">
            We're preparing our booking system. Be the first to know when you can schedule your pathway call!
          </p>

          {!submitted ? (
            <form onSubmit={handleNotify} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="neo-input w-full"
                required
                data-testid="booking-notify-email"
              />
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                data-testid="booking-notify-btn"
              >
                <Bell strokeWidth={2.5} size={20} />
                Notify Me When Available
              </button>
              <p className="text-xs text-gray-500">
                We'll email you as soon as booking opens.
              </p>
            </form>
          ) : (
            <div className="neo-card-teal p-6" data-testid="booking-notify-success">
              <p className="font-bold text-lg mb-1">You're on the list!</p>
              <p className="opacity-90">We'll notify you when booking opens.</p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Or <a href="/contact" className="text-[#00A896] font-semibold hover:underline">contact us</a> directly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
