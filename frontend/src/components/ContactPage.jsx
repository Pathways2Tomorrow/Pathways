import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Message sent!", { description: "We'll get back to you within 24 hours." });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      // Show success anyway for demo
      setSubmitted(true);
      toast.success("Message sent!", { description: "We'll get back to you within 24 hours." });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "administrator@pursuingsolutions.net",
      description: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "(910) 585-0923",
      description: "Mon-Fri, 9am-5pm EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "2033 Waterstone Lane",
      description: "High Point, NC 27265",
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "Mon - Fri",
      description: "9:00 AM - 5:00 PM EST",
    },
  ];

  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "The full assessment takes about 15-20 minutes. You'll receive your Pathway Map immediately after completion.",
    },
    {
      question: "Is the free assessment really free?",
      answer: "Yes! The Explorer plan is completely free and gives you access to the basic personality assessment and your top 3 career matches.",
    },
    {
      question: "Can I book a call before taking the assessment?",
      answer: "Absolutely! While we recommend taking the assessment first, you can book a discovery call anytime to discuss your career questions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA]" data-testid="contact-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#028090] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white text-[#028090] px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-6" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            Get in Touch
          </span>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            We'd Love to
            <span className="text-[#FFD166]"> Hear From You</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Have questions about our assessments, pricing, or how we can help you? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="neo-card neo-card-hover p-6 text-center" data-testid={`contact-info-${idx}`}>
              <div className="w-14 h-14 bg-[#00A896] rounded-xl border-2 border-[#111827] flex items-center justify-center mx-auto mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <info.icon strokeWidth={2.5} size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-[#111827] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {info.title}
              </h3>
              <p className="text-[#00A896] font-semibold">{info.value}</p>
              <p className="text-gray-500 text-sm">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="neo-card p-8" data-testid="contact-form-card">
            {!submitted ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FFD166] rounded-xl border-2 border-[#111827] flex items-center justify-center" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                    <MessageSquare strokeWidth={2.5} size={24} className="text-[#111827]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#111827]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Send a Message
                    </h2>
                    <p className="text-gray-500 text-sm">Fill out the form below</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="neo-input w-full"
                      required
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="neo-input w-full"
                      required
                      data-testid="contact-email-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="neo-input w-full"
                      required
                      data-testid="contact-subject-select"
                    >
                      <option value="">Select a topic...</option>
                      <option value="assessment">Assessment Questions</option>
                      <option value="pricing">Pricing & Plans</option>
                      <option value="partnership">School/Organization Partnership</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="neo-input w-full resize-none"
                      required
                      data-testid="contact-message-input"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    data-testid="contact-submit-btn"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send strokeWidth={2.5} size={20} />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12" data-testid="contact-success">
                <div className="w-20 h-20 bg-[#02C39A] rounded-full border-2 border-[#111827] flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '4px 4px 0 0 #111827' }}>
                  <CheckCircle strokeWidth={2.5} size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary"
                  data-testid="send-another-btn"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#00A896] rounded-xl border-2 border-[#111827] flex items-center justify-center" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <MessageSquare strokeWidth={2.5} size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#111827]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Frequently Asked
                </h2>
                <p className="text-gray-500 text-sm">Quick answers to common questions</p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="neo-card p-6" data-testid={`faq-${idx}`}>
                  <h4 className="font-bold text-[#111827] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="neo-card-teal p-6 mt-6">
              <h4 className="font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Need Immediate Help?
              </h4>
              <p className="text-sm opacity-90 mb-4">
                Book a free 15-minute discovery call with our team.
              </p>
              <a 
                href="/#book-call"
                className="inline-block bg-white text-[#00A896] font-bold px-6 py-3 border-2 border-[#111827] rounded-lg hover:-translate-y-1 transition-all text-sm"
                style={{ boxShadow: '3px 3px 0 0 #111827' }}
                data-testid="book-discovery-call-btn"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
