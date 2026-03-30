import { ArrowRight, Sparkles } from 'lucide-react';

const HERO_IMAGE = "https://images.pexels.com/photos/8380075/pexels-photo-8380075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_purpose-pilot/artifacts/nujre642_IMG_0157.JPG";

export const Hero = ({ onTakeAssessment, onBookCall }) => {
  return (
    <section className="section-padding" data-testid="hero-section">
      {/* Centered Logo and Brand Name */}
      <div className="text-center mb-12">
        <div className="inline-block w-28 h-28 md:w-36 md:h-36 border-[#111827] rounded-full overflow-hidden bg-white mb-6" style={{ boxShadow: '6px 6px 0 0 #111827', borderWidth: '4px' }}>
          <img src={LOGO_URL} alt="Pursuing Solutions" className="w-full h-full object-contain p-3" />
        </div>
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-[#111827] mb-2"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Pursuing Solutions
        </h1>
        <p className="text-xl md:text-2xl text-[#00A896] font-bold">Pathways to the Future</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-[#FFD166] text-[#111827] px-4 py-2 rounded-full border-2 border-[#111827] mb-6" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            <Sparkles strokeWidth={2.5} size={18} />
            <span className="font-semibold text-sm">AI-Powered Career Discovery</span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-[#111827] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Your Future.
            <br />
            <span className="text-[#00A896]">Decoded.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-lg">
            Feeling uncertain about your career path? You're not alone. We use research-backed assessments to help you discover meaningful pathways aligned with who you really are.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onTakeAssessment}
              className="btn-primary flex items-center justify-center gap-2 text-lg"
              data-testid="take-assessment-hero-btn"
            >
              Take Free Assessment
              <ArrowRight strokeWidth={2.5} size={20} />
            </button>
            <button
              onClick={onBookCall}
              className="btn-secondary flex items-center justify-center gap-2 text-lg"
              data-testid="book-call-hero-btn"
            >
              Book a Call
            </button>
          </div>
          
          <div className="flex items-center gap-6 mt-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-[#111827] bg-gradient-to-br from-[#00A896] to-[#028090]"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm font-medium">
              <span className="text-[#111827] font-bold">2,500+</span> young adults found their path
            </p>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="order-1 lg:order-2 relative">
          <div 
            className="neo-card overflow-hidden transform -rotate-2"
            data-testid="hero-image-container"
          >
            <img 
              src={HERO_IMAGE} 
              alt="Diverse students collaborating on their future" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          
          {/* Floating card */}
          <div 
            className="absolute -bottom-6 -left-6 md:-left-10 neo-card-teal p-4 max-w-[200px]"
            style={{ transform: 'rotate(3deg)' }}
          >
            <p className="font-bold text-sm">Personalized Pathway Map</p>
            <p className="text-xs mt-1 opacity-90">Tailored to your values, strengths & goals</p>
          </div>
        </div>
      </div>
    </section>
  );
};
