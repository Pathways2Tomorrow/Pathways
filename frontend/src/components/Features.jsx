import { Brain, Map, Compass, Zap, Users, Target } from 'lucide-react';

const FEATURE_IMAGE = "https://images.pexels.com/photos/9433169/pexels-photo-9433169.jpeg";

export const Features = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover Yourself',
      description: 'Take our research-backed assessments to uncover your personality, interests, strengths, and values.',
      Icon: Brain,
      cardClass: 'neo-card',
    },
    {
      number: '02',
      title: 'Get Your Pathway Map',
      description: 'Receive a personalized career roadmap designed around what YOU want out of life—not just job titles.',
      Icon: Map,
      cardClass: 'neo-card-teal',
    },
    {
      number: '03',
      title: 'Take Action',
      description: 'Follow clear, actionable steps with AI-powered insights on future-proofing your skills.',
      Icon: Compass,
      cardClass: 'neo-card-yellow',
    },
  ];

  const features = [
    { Icon: Zap, title: 'AI Advantage Layer', description: 'Understand how AI impacts your chosen field' },
    { Icon: Users, title: 'Neurodivergent Friendly', description: 'Flexible pathways for all learning styles' },
    { Icon: Target, title: 'Culturally Inclusive', description: 'Respects your background & lived experiences' },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-[#F8F9FA]" data-testid="features-section">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#028090] text-white px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
          How It Works
        </span>
        <h2 
          className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Your Journey to Clarity
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-16">
        {/* Step 1 - Large */}
        <div className={`md:col-span-7 ${steps[0].cardClass} neo-card-hover p-8`} data-testid="step-1-card">
          <div className="flex items-start gap-6">
            <span 
              className="text-6xl md:text-8xl font-black text-[#00A896] opacity-30"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {steps[0].number}
            </span>
            <div>
              <div className="w-14 h-14 bg-[#00A896] rounded-xl border-2 border-[#111827] flex items-center justify-center mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <Brain strokeWidth={2.5} size={28} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {steps[0].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{steps[0].description}</p>
            </div>
          </div>
        </div>

        {/* Step 2 - Colored */}
        <div className={`md:col-span-5 ${steps[1].cardClass} neo-card-hover p-8`} data-testid="step-2-card">
          <span 
            className="text-6xl md:text-8xl font-black opacity-30"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {steps[1].number}
          </span>
          <div className="w-14 h-14 bg-white rounded-xl border-2 border-[#111827] flex items-center justify-center mb-4 mt-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            <Map strokeWidth={2.5} size={28} className="text-[#00A896]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {steps[1].title}
          </h3>
          <p className="opacity-90 leading-relaxed">{steps[1].description}</p>
        </div>

        {/* Image */}
        <div className="md:col-span-5 neo-card overflow-hidden" data-testid="feature-image">
          <img 
            src={FEATURE_IMAGE} 
            alt="Gen Z team working creatively" 
            className="w-full h-full min-h-[250px] object-cover"
          />
        </div>

        {/* Step 3 - Yellow */}
        <div className={`md:col-span-7 ${steps[2].cardClass} neo-card-hover p-8`} data-testid="step-3-card">
          <div className="flex items-start gap-6">
            <span 
              className="text-6xl md:text-8xl font-black opacity-30"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {steps[2].number}
            </span>
            <div>
              <div className="w-14 h-14 bg-white rounded-xl border-2 border-[#111827] flex items-center justify-center mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <Compass strokeWidth={2.5} size={28} className="text-[#111827]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {steps[2].title}
              </h3>
              <p className="leading-relaxed">{steps[2].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const FeatureIcon = feature.Icon;
          return (
            <div 
              key={idx} 
              className="neo-card neo-card-hover p-6 flex items-start gap-4"
              data-testid={`feature-card-${idx}`}
            >
              <div className="w-12 h-12 bg-[#00A896] rounded-lg border-2 border-[#111827] flex items-center justify-center flex-shrink-0" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <FeatureIcon strokeWidth={2.5} size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#111827] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
