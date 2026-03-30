# Pursuing Solutions - PRD (Product Requirements Document)

## Project Overview
**Name:** Pursuing Solutions - Pathways to the Future  
**Domain:** Gen Z Career Coaching Platform  
**Created:** March 30, 2026  
**Last Updated:** March 30, 2026

## Original Problem Statement
Build a landing page website similar to Skilldora for "Pursuing Solutions - Pathways to the Future" - a career coaching startup helping youth and young adults discover meaningful career paths using research-backed assessment tools. The platform should be engaging, relatable, and actionable for Gen Z audience.

## User Personas
1. **High School Seniors** - Uncertain about college majors and career paths
2. **College Freshmen** - Exploring different fields and specializations
3. **Recent Graduates** - Transitioning from education to workforce
4. **Career Switchers** - Looking to pivot to new industries
5. **Gap Year Explorers** - Taking time to discover their passions

## Core Requirements (Static)
- Modern, Gen Z-friendly landing page design
- User authentication (signup/login)
- Email newsletter subscription
- Pricing tiers display
- Advisor booking functionality
- Assessment preview/demo
- Microsoft Outlook calendar integration for bookings

## What's Been Implemented

### MVP Features (Completed March 30, 2026)
1. **Landing Page** - Neo-Brutalist design with Outfit/DM Sans fonts
   - Hero section with CTAs
   - How It Works (3-step bento grid)
   - Assessment Preview (interactive demo)
   - Testimonials (marquee scroll)
   - Pricing Plans (3 tiers)
   - Book Advisor Call (calendar picker)
   - Footer with email capture

2. **Authentication System**
   - JWT-based auth with bcrypt password hashing
   - User registration (POST /api/auth/register)
   - User login (POST /api/auth/login)
   - Modal-based auth UI

3. **Newsletter System**
   - Email capture form in footer
   - MongoDB storage for subscriptions
   - Success feedback with toast notifications

4. **Booking System**
   - Calendar date picker
   - Time slot selection
   - Booking confirmation flow
   - MongoDB storage for appointments
   - **Note:** Microsoft Outlook integration is MOCKED

5. **Backend APIs**
   - Health check endpoint
   - Auth endpoints (register, login, me)
   - Newsletter subscription
   - Booking management

## Architecture

### Frontend (React)
- Framework: React 19 + React Router
- Styling: Tailwind CSS with Neo-Brutalist theme
- UI Components: Custom components + Shadcn/UI
- State: React hooks (useState, useEffect)
- API Client: Fetch API
- Notifications: Sonner toast

### Backend (FastAPI)
- Framework: FastAPI with async support
- Database: MongoDB (Motor driver)
- Auth: JWT + bcrypt
- CORS: Enabled for all origins

### Database Collections
- `users` - User accounts
- `newsletter` - Email subscriptions
- `bookings` - Advisor call bookings
- `status_checks` - Health monitoring

## Prioritized Backlog

### P0 (Critical - Next Sprint)
- [ ] Actual Microsoft Outlook Calendar integration
- [ ] Full assessment quiz flow
- [ ] User dashboard for viewing bookings

### P1 (High Priority)
- [ ] Password reset functionality
- [ ] Email confirmation on signup
- [ ] Booking email notifications
- [ ] Admin dashboard for advisor

### P2 (Medium Priority)
- [ ] Payment integration (Stripe) for paid plans
- [ ] Assessment results storage
- [ ] Pathway Map generation
- [ ] Social sharing features

### P3 (Low Priority)
- [ ] Video reel concept generator
- [ ] AI-powered career recommendations
- [ ] Community forum
- [ ] Mobile app version

## Next Action Items
1. Obtain Microsoft Azure AD credentials for Outlook integration
2. Build complete assessment quiz with 15 questions
3. Create user dashboard page
4. Implement Stripe for pricing plan payments
5. Add email notifications for bookings

## Technical Notes
- Backend runs on port 8001 with /api prefix
- Frontend uses environment variable REACT_APP_BACKEND_URL
- All auth uses JWT tokens stored in localStorage
- Calendar booking currently saves to MongoDB only (not Outlook)
