import { useState, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AssessmentPreview } from "./components/AssessmentPreview";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { BlogPage } from "./components/BlogPage";
import { ComingSoonModal } from "./components/ComingSoonModal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const LandingPage = ({ onComingSoon }) => {
  const handleBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailSubmit = async (email) => {
    try {
      const response = await fetch(`${API}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("You're in!", {
          description: "We'll notify you when we launch!"
        });
      }
    } catch (error) {
      toast.success("You're in!", {
        description: "We'll notify you when we launch!"
      });
    }
  };

  return (
    <>
      <main>
        <Hero 
          onTakeAssessment={onComingSoon} 
          onBookCall={handleBookCall} 
        />
        <Features />
        <AssessmentPreview onTakeAssessment={onComingSoon} />
        <Testimonials />
        <Pricing onGetStarted={onComingSoon} />
        <BookingSection onComingSoon={onComingSoon} />
      </main>
      <Footer onEmailSubmit={handleEmailSubmit} />
    </>
  );
};

// Page wrapper for About, Contact, Blog with Footer
const PageWrapper = ({ children }) => {
  const handleEmailSubmit = async (email) => {
    try {
      await fetch(`${API}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      toast.success("You're in!", { description: "We'll notify you when we launch!" });
    } catch (error) {
      toast.success("You're in!", { description: "We'll notify you when we launch!" });
    }
  };

  return (
    <>
      {children}
      <Footer onEmailSubmit={handleEmailSubmit} />
    </>
  );
};

function App() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  const handleComingSoon = () => {
    setComingSoonOpen(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#F8F9FA]" data-testid="app-container">
          <Header 
            onGetStarted={handleComingSoon} 
            onLogin={handleComingSoon}
          />
          
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage onComingSoon={handleComingSoon} />} 
            />
            <Route 
              path="/about" 
              element={
                <PageWrapper>
                  <AboutPage />
                </PageWrapper>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <PageWrapper>
                  <ContactPage />
                </PageWrapper>
              } 
            />
            <Route 
              path="/blog" 
              element={
                <PageWrapper>
                  <BlogPage />
                </PageWrapper>
              } 
            />
          </Routes>

          <ComingSoonModal
            isOpen={comingSoonOpen}
            onClose={() => setComingSoonOpen(false)}
          />

          <Toaster 
            position="top-right" 
            richColors 
            toastOptions={{
              style: {
                border: '2px solid #111827',
                boxShadow: '4px 4px 0 0 #111827',
                borderRadius: '12px',
              }
            }}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
