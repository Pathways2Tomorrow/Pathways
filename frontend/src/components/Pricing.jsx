import { Check, Star } from 'lucide-react';

export const Pricing = ({ onGetStarted }) => {
  const plans = [
    {
      name: 'Explorer',
      price: 'Free',
      description: 'Get started with basic career discovery',
      features: [
        'Basic personality assessment',
        'Top 3 career matches',
        'Shareable profile card',
        'Community access',
      ],
      cardClass: 'neo-card',
      buttonClass: 'btn-secondary',
      popular: false,
    },
    {
      name: 'Pathfinder',
      price: '$29',
      period: '/one-time',
      description: 'Complete career discovery experience',
      features: [
        'Full assessment suite (personality, interests, values, strengths)',
        'Detailed Pathway Map with 10+ career matches',
        'AI Advantage Layer insights',
        'Skill-building action plan',
        'Video reel concept for sharing',
        'Priority email support',
      ],
      cardClass: 'neo-card-blue',
      buttonClass: 'btn-primary bg-white text-[#028090] hover:bg-gray-100',
      popular: true,
    },
    {
      name: 'Navigator',
      price: '$99',
      period: '/one-time',
      description: 'Personalized guidance with expert support',
      features: [
        'Everything in Pathfinder',
        '1-on-1 call with Pathway Advisor',
        'Customized 90-day action plan',
        'Resume & LinkedIn review',
        'Interview preparation guide',
        'Lifetime access to updates',
      ],
      cardClass: 'neo-card',
      buttonClass: 'btn-primary',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-[#F8F9FA]" data-testid="pricing-section">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#FFD166] text-[#111827] px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
          Choose Your Path
        </span>
        <h2 
          className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          No subscriptions. No hidden fees. Invest in your future once, benefit forever.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`${plan.cardClass} p-8 relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            data-testid={`pricing-card-${plan.name.toLowerCase()}`}
          >
            {plan.popular && (
              <div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD166] text-[#111827] px-4 py-1 rounded-full border-2 border-[#111827] font-bold text-sm flex items-center gap-1"
                style={{ boxShadow: '2px 2px 0 0 #111827' }}
              >
                <Star strokeWidth={2.5} size={14} fill="#111827" />
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 
                className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#111827]'}`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {plan.name}
              </h3>
              <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                {plan.description}
              </p>
            </div>

            <div className="mb-6">
              <span 
                className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-[#111827]'}`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {plan.price}
              </span>
              {plan.period && (
                <span className={`text-lg ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    plan.popular ? 'bg-white' : 'bg-[#00A896]'
                  }`}>
                    <Check 
                      strokeWidth={3} 
                      size={12} 
                      className={plan.popular ? 'text-[#028090]' : 'text-white'} 
                    />
                  </div>
                  <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={onGetStarted}
              className={`w-full ${plan.buttonClass}`}
              data-testid={`select-plan-${plan.name.toLowerCase()}-btn`}
            >
              {plan.price === 'Free' ? 'Start Free' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
