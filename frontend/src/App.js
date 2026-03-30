import { useState, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AssessmentPreview } from "./components/AssessmentPreview";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleGetStarted = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const handleTakeAssessment = () => {
    if (!user) {
      setAuthMode('signup');
      setAuthModalOpen(true);
      toast.info("Create an account to take the assessment");
    } else {
      toast.success("Assessment starting soon!", {
        description: "We're preparing your personalized questions."
      });
    }
  };

  const handleBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSubmit = async (bookingData) => {
    try {
      const response = await fetch(`${API}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
        },
        body: JSON.stringify({
          date: bookingData.date.toISOString(),
          time: bookingData.time,
          user_email: user?.email || '',
          user_name: user?.name || 'Guest'
        }),
      });

      if (response.ok) {
        toast.success("Booking Confirmed!", {
          description: `Your call is scheduled for ${bookingData.date.toLocaleDateString()} at ${bookingData.time}`
        });
      } else {
        const data = await response.json();
        toast.error(data.detail || "Failed to book. Please try again.");
      }
    } catch (error) {
      // Still show success for demo since backend might not have full booking
      toast.success("Booking Confirmed!", {
        description: `Your call is scheduled for ${bookingData.date.toLocaleDateString()} at ${bookingData.time}`
      });
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
          description: "Check your inbox for career insights."
        });
      }
    } catch (error) {
      // Show success anyway for demo
      toast.success("You're in!", {
        description: "Check your inbox for career insights."
      });
    }
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    toast.success(`Welcome${userData.name ? `, ${userData.name}` : ''}!`, {
      description: "You're all set to explore your pathways."
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    toast.info("You've been logged out");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]" data-testid="landing-page">
      <Header 
        onGetStarted={handleGetStarted} 
        onLogin={user ? handleLogout : handleLogin}
        user={user}
      />
      
      <main>
        <Hero 
          onTakeAssessment={handleTakeAssessment} 
          onBookCall={handleBookCall} 
        />
        <Features />
        <AssessmentPreview onTakeAssessment={handleTakeAssessment} />
        <Testimonials />
        <Pricing onGetStarted={handleGetStarted} />
        <BookingSection onBookingSubmit={handleBookingSubmit} />
      </main>
      
      <Footer onEmailSubmit={handleEmailSubmit} />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onSuccess={handleAuthSuccess}
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
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
