import { Heart, Target, Users, Award, Lightbulb, Globe } from 'lucide-react';

const ADVISOR_PHOTO = "https://customer-assets.emergentagent.com/job_purpose-pilot/artifacts/2qw0fvjw_IMG_0158.JPG";

const teamMembers = [
  {
    name: "Dr. Patricia Williams",
    role: "Founder & Lead Pathway Advisor",
    image: ADVISOR_PHOTO,
    bio: "20+ years guiding young adults through career transitions. PhD in Career Psychology from Stanford.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Assessment Design",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Former Google UX researcher. Expert in psychometric assessment tools and user experience.",
  },
  {
    name: "Aisha Johnson",
    role: "Community & Partnerships",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Built partnerships with 100+ schools and universities. Passionate about educational equity.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We meet you where you are, without judgment. Uncertainty is your starting point, not your weakness.",
  },
  {
    icon: Target,
    title: "Research-Backed",
    description: "Every assessment and recommendation is grounded in credible, peer-reviewed career psychology research.",
  },
  {
    icon: Users,
    title: "Inclusive by Design",
    description: "We honor diverse backgrounds, neurodivergent needs, and cultural contexts in all our guidance.",
  },
  {
    icon: Lightbulb,
    title: "Future-Ready",
    description: "Our AI Advantage Layer ensures you're prepared for how technology is reshaping every career field.",
  },
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]" data-testid="about-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#111827] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#00A896] text-white px-4 py-2 rounded-full border-2 border-white font-semibold text-sm mb-6" style={{ boxShadow: '2px 2px 0 0 white' }}>
            Our Story
          </span>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Helping Young Adults Find Their
            <span className="text-[#00A896]"> Pathways</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We believe every young person deserves clarity about their future. Our mission is to transform uncertainty into empowered action through personalized, research-backed career guidance.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#FFD166] text-[#111827] px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
              Our Mission
            </span>
            <h2 
              className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Pathways to the Future
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pursuing Solutions was founded on a simple belief: career guidance should be personal, inclusive, and grounded in science—not generic advice or outdated assessments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We created a platform that adapts to YOU—your personality, your values, your cultural background, and your unique way of learning and working. Whether you're neurodivergent, a first-generation college student, or simply feeling lost, we're here to help you decode your future.
            </p>
            <div className="flex items-center gap-4">
              <div className="neo-card-teal px-6 py-4 text-center">
                <p className="text-3xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>2,500+</p>
                <p className="text-sm opacity-90">Pathways Created</p>
              </div>
              <div className="neo-card px-6 py-4 text-center">
                <p className="text-3xl font-black text-[#00A896]" style={{ fontFamily: 'Outfit, sans-serif' }}>95%</p>
                <p className="text-sm text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="neo-card-yellow px-6 py-4 text-center">
                <p className="text-3xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>50+</p>
                <p className="text-sm">Partner Schools</p>
              </div>
            </div>
          </div>
          <div className="neo-card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7551234/pexels-photo-7551234.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#028090] text-white px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            What We Stand For
          </span>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="neo-card neo-card-hover p-6" data-testid={`value-card-${idx}`}>
              <div className="w-14 h-14 bg-[#00A896] rounded-xl border-2 border-[#111827] flex items-center justify-center mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <value.icon strokeWidth={2.5} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#F05D5E] text-white px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            Meet the Team
          </span>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            The People Behind Your Pathways
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="neo-card neo-card-hover overflow-hidden" data-testid={`team-card-${idx}`}>
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-[#00A896] font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#00A896]">
        <div className="text-center text-white">
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of young adults who've discovered their pathways with our help.
          </p>
          <a 
            href="/"
            className="inline-block bg-white text-[#00A896] font-bold px-8 py-4 border-2 border-[#111827] rounded-lg hover:-translate-y-1 transition-all"
            style={{ boxShadow: '4px 4px 0 0 #111827' }}
            data-testid="about-cta-btn"
          >
            Take Free Assessment
          </a>
        </div>
      </section>
    </div>
  );
};
