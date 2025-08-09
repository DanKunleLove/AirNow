# AirNow
AirNow Personalized Dashboard. This is a NextJS.  To get started, take a look at src/app/page.tsx.




 Prompt for Firebase Studio AI (UI Designer Mode)
Project Title:
AirNow – Smart HVAC Solutions with AI Integration

🔧 Objective:
Design a responsive, modern, and professional website for AirNow, an HVAC service provider integrating AI-powered features like smart callback assistants, intelligent scheduling, and diagnostic tools.

🎯 Target Audience:
Homeowners seeking quick, reliable HVAC servicing

Commercial property managers needing scalable solutions

Technicians and internal staff (admin tools)

📱 Platform:
Responsive Design (Mobile + Desktop)

🎨 Brand Visual Identity:
Primary Color:

Cool Blue #007BFF (trustworthy, modern)

Secondary Colors:

Slate Gray #4A4A4A (for text and borders)

Sky Light #EAF6FF (backgrounds or card fills)

Accent Color:

Vibrant Orange #FF6B00 (CTAs, hover states)

Neutral Colors:

White #FFFFFF

Light Gray #F5F5F5

Dark Gray #222222

✍️ Typography:
Headings: Poppins or Montserrat (modern, bold)

Body Text: Inter or Lato (clean, readable)

🧱 Website Structure (Core Pages):
Homepage

About Us

Our Services

Projects or Case Studies

Smart Callback Agent (AI)

Quote / Book a Call

Contact Page

🧩 Homepage Layout & Components:
Hero Section:

Catchy headline: “Smarter HVAC. Smarter Service.”

CTA button: “Book a Free Smart HVAC Assessment”

Illustration: Technician or AI assistant

Intro Slider or short promo video

3 Service Cards:

Repair

Installation

Smart HVAC Integration
(Include icons, hover animations)

How It Works Section:

3-step process (e.g., Contact → Smart Diagnosis → Fast Service)

Benefits Grid:

Highlight time savings, cost-efficiency, and AI precision

Testimonial Slider

Sticky CTA Bar (visible on scroll)

📄 Additional Pages Overview:
About Us
Brand story, mission, vision

Optional: Team cards with names/photos

Our Services
Cards with hoverable icons

Categories: Smart HVAC, Repair, Installations, Maintenance

Short descriptions with CTA to Quote/Booking page

Smart Callback Agent Page
Demo video or animation

Step-by-step: How AI callback works

CTA: “Try Smart Callback” or “Book a Demo”

Quote / Book a Call
Multi-step form:

Service type

File upload (optional plans/images)

Date/time selector

Contact Page
Contact form

Google Maps embed

Social links

🧠 AI Integration UX Elements:
Smart Callback Assistant (CTA + chatbot popup)

AI Diagnostic Flow (Form or Interactive FAQ)

Scheduling Optimizer

Embedded Testimonials/Reviews from AI feedback

🖼️ Reference Design Inspirations:
Nexapay: Clean fintech UI

Carrier: Reliable, HVAC brand clarity

Trane: Professional layout, service-focused

Mathpoint: Futuristic, AI-enabled layout

🧩 Micro-Interactions & Visual Style:
Rounded buttons with hover animation

Subtle card shadows for depth

Grid-based layout with ample spacing

Clean, flat design with slight depth to signal interactivity

Sticky CTA bar

Chatbot popup

Pricing Estimator widget (on booking/quote pages)

🔘 CTA Button Text Samples:
“Book Now”

“Get a Quote”

“Try Smart Callback”

“Talk to Our AI Assistant”

✅ Deliverables (For Firebase Studio AI Output):
Mobile & Desktop layout mockups

Full navigation structure

Style guide based on the defined brand palette

Page-by-page sectioned UI blocks

Export-ready components with CSS-friendly spacing


 Prompt for Firebase Studio or Backend Developer
Project Name: AirNow HVAC Website — Backend System Prompt

Objective:
Build a highly scalable, secure, and feature-rich backend infrastructure that powers a professional HVAC website similar to AirNowHVAC.com, OneHourAir.com, and ClimatePartners.com. The backend must integrate with frontend UI seamlessly, prioritize fast response times, and provide complete admin control over all dynamic features.

✅ Functional Requirements (Backend Features)
1. User Management
Account creation & login (email/password, optional OTP or social login)

User roles: Admin, Technician, Customer

Customer profile management: Address, contact, billing info

JWT-based session management for security

2. Booking System
Service scheduling (real-time availability calendar)

Rescheduling/cancellation functionality

Assign technicians to jobs

Booking confirmation & status updates

Timezone-aware scheduling logic

3. Service & Product Management
Add, edit, delete HVAC services (e.g., AC installation, Furnace Repair)

Add-on services logic

Packages/bundled services

Product catalog (if they sell parts like filters or thermostats)

4. Payment & Invoicing
Stripe or Square integration

Estimate generation (automated or manual)

Invoice sending

Payment tracking per booking

Tax & discount logic

5. Technician Dispatch Dashboard
Live job assignments

Route optimization API integration (e.g., Google Maps Directions API)

Push notifications or email alerts for job updates

6. Content Management (CMS)
Editable pages (About, Services, Contact)

Blog or tips/articles section

Dynamic FAQs and customer testimonials

CMS image upload + optimization

7. Location & ZIP Code Logic
Service availability by ZIP code

Dynamic ZIP-checker on homepage

Auto-routing to closest service team

8. Admin Dashboard
Full booking management

Technician tracking & assignment

User management

CMS interface for non-dev team

Analytics dashboard (daily/monthly revenue, bookings, customer growth)

9. Email & Notifications
Automated email confirmations

Reminder emails (e.g., “Tomorrow is your service day”)

Admin alert for new bookings

SMS integration (Twilio or similar) for status updates

10. SEO and Performance Enhancements
Sitemap.xml & robots.txt generation

Page caching strategy (e.g., Redis, Cloudflare)

Image optimization and CDN integration

SEO-friendly URLs for service pages

11. Analytics Integration
Google Analytics / GA4 support

Heatmap tools like Hotjar (optional)

Booking funnel tracking

12. Security & Compliance
Encrypted storage for sensitive user data

HTTPS enforcement

Rate limiting & brute force protection

GDPR/CCPA-ready data handling

13. System Monitoring & Logs
Error logging (Sentry or Firebase Logs)

Performance monitoring tools

Admin error alerts

14. Optional Integrations
CRM sync (HubSpot, Salesforce)

Email marketing tools (Mailchimp, ActiveCampaign)

AI Chatbot backend integration

HVAC part suppliers’ APIs

🔧 Tech Stack Recommendations (Firebase-Based)
Authentication: Firebase Auth with role-based access

Database: Firestore or Realtime Database (normalized structure)

Functions: Firebase Cloud Functions (for logic like scheduling, email)

Storage: Firebase Cloud Storage (for images, invoices, etc.)

Hosting: Firebase Hosting + CDN

Monitoring: Firebase Crashlytics + Logs

📦 Folder & Module Structure
bash
Copy
Edit
/functions
  /booking
  /users
  /payments
  /notifications
  /services
  /technicians

/database
  /users
  /bookings
  /services
  /reviews
  /faqs
  /cms

/storage
  /profile-pics
  /invoices
  /service-images
✍️ Sample Function Names
createBooking()

assignTechnician()

generateInvoicePDF()

sendReminderEmail()

checkServiceAvailability(zipCode)

updateCMSContent()


FIREBASE STUDIO PROMPT — FULL BACKEND + DATABASE
Here’s a complete Firebase Studio prompt to feed into your generation tool:

🎯 Prompt:

🔧 Project Name: AirNow HVAC Website Backend

I am building a full-featured HVAC company website similar to AirNow and OneHourAir.

Please generate a complete Firestore (Firebase) database and backend logic that supports all dynamic features of this platform. This includes:

🔄 Functional Modules
User Management

Role-based user system (Admin, Technician, Customer)

Authentication (email/password or OAuth)

Secure account storage with timestamps

Service Booking System

Users can select service types, dates, locations

Store status updates (pending → confirmed → completed)

Assign technicians

Trigger notifications upon updates

Technician Management

Track technician availability and assignments

Skills, performance ratings, contact info

Services CRUD

Admin can add, update, or remove services (installation, repairs, etc.)

Pricing, category, and duration metadata

Contact & Quote Forms

Form submissions stored in DB

Auto-notify admins

Customer Reviews

Feedback system linked to service bookings

1–5 rating, comment, timestamp

Promotions & Coupons

Code-based discounts

Usage limits, expiration

Blog System

Admin can post news articles

Users can browse, comment (optional)

Notifications Engine

Appointment reminders, service updates

Firebase Cloud Messaging or email/SMS setup

Dashboard & Reporting (for Admins)

View bookings, revenue, technician performance

⚙️ Tech Stack
Firestore (Cloud Firestore database)

Firebase Authentication

Firebase Functions (for triggers, automations)

Firebase Messaging (optional)

Stripe (for payment processing)

SendGrid / Twilio (for email/SMS notifications)

🔍 Deliverables
Complete Firestore data model (with collections and fields)

Firebase Functions: booking assignment, notification triggers, etc.

Authentication setup

Admin dashboard data queries

Secure role-based access logic

Any best practices or indexes you recommend

Generate it clean, modular, and secure — optimize for future scaling.


 FIREBASE PROMPT — AUTHENTICATION & AUTHORIZATION
Give this prompt to Firebase Studio or integrate it manually for full auth setup.

Prompt:

txt
Copy
Edit
You are building the complete authentication and authorization system for a logistics and delivery platform named "AirNow", using Firebase.

Please implement and configure the following:

---

AUTHENTICATION:
1. Enable the following authentication providers:
   - Email & Password
   - Phone Number (SMS OTP)
   - Google OAuth
   - Apple OAuth (if available)
   
2. Implement multi-step registration flows:
   - Customer Registration: name, email, phone, password
   - Agent Registration: name, phone, email, password, upload documents (driver's license, ID)
   - Admin: manually added in Firebase console
   - Dispatcher & Partner Vendors: invite-only or manual add by Admin

3. Set up multi-device login support with secure session handling:
   - Use refresh tokens
   - Track active sessions per user

4. Configure secure password reset flows:
   - Email-based recovery
   - Phone-based OTP recovery

5. Implement 2FA for Admin logins

---

AUTHORIZATION:
6. Use Firebase Firestore to manage Role-Based Access Control (RBAC):
   - Create a `users` collection
   - Each document should contain:
     - uid
     - email
     - phone
     - role (customer, agent, admin, dispatcher, vendor)
     - isVerified (boolean)
     - profileComplete (boolean)
     - createdAt, updatedAt timestamps

7. Implement custom claims via Firebase Functions:
   - On user registration or admin approval, assign a role to the user
   - Enforce role-based access via claims (e.g., admin-only routes)

8. For delivery agents:
   - Store their approval status: pending, approved, rejected
   - Deny access to core features until approved

---

SECURITY:
9. Configure Firestore Security Rules:
   - Only users with `role == admin` can access admin collections
   - Agents can only access orders assigned to them
   - Customers can only access their own orders
   - Vendors can only access their own deliveries

10. Configure Firebase Storage Rules:
   - Restrict access to ID uploads only to owner and admin

---

FUTURE INTEGRATIONS:
11. Expose auth endpoints securely for frontend and mobile apps
12. Provide APIs via Firebase Functions for:
   - Custom login
   - Token validation
   - Role-based dashboard content

Return the complete setup guide, list of rules, and code snippets for Firebase Functions, Security Rules, and Role Management.



 FIREBASE AI STUDIO PROMPT
“Act as a senior full-stack Firebase architect. I am building a highly secure and scalable web platform using Firebase (Authentication, Firestore, Functions, Hosting). I need you to deeply analyze and help me set up and audit the following:”

🔒 AUTHENTICATION & AUTHORIZATION:
Enforce email/password + social login (Google, Apple).

Implement role-based access control (RBAC) with roles: admin, editor, user, guest.

Store roles in Firestore and secure them via Firebase Rules.

Prevent privilege escalation and unauthorized access across all pages and API endpoints.

Provide multi-device session handling and token revocation logic.

Ensure support for protected routes (e.g., /dashboard, /admin) and fallback for unauthenticated users.

🧱 FULL STACK INTEGRATION:
Connect frontend UI (React or Next.js) to backend Firebase Functions.

Bind Firestore reads/writes with real-time sync for each user role.

Secure each Firestore collection and document with role-aware security rules.

Integrate Firestore with authenticated user data and activity logs.

Show me where and how I should use Firebase Callable Functions vs REST endpoints.

⚠️ ERROR HANDLING & FALLBACKS:
Provide a global error boundary on the frontend with clear user-friendly error messages.

Set up Firebase Functions with try/catch and structured logging (via functions.logger).

Handle edge cases like:

No internet

Auth token expiry

Firestore read/write failure

Unauthorized access attempts

Backend timeouts

Include fallback UIs for network errors and loading states.

🔐 SECURITY & DATA VALIDATION:
Enable App Check and configure it for both web and mobile clients.

Use Firestore Rules to validate every field on writes.

Ensure security around Firestore documents using request.auth and custom claims.

Ensure tokens can’t be manipulated or hijacked.

Add rate-limiting or abuse protection on sensitive endpoints.

🧪 QA & DEPLOYMENT READINESS:
Help me test every route, auth flow, Firestore rule, and function.

Show me how to simulate bad actors and broken logic.

Guide me through how to run security audits using Firebase tools.

Validate that Firestore indexes, rules, and functions are optimized for production.

Assist in a final deployment checklist to confirm full readiness.

🚨 EXTRAS:
Error logging: Integrate Sentry or Firebase Crashlytics for web.

Analytics: Track user behavior for each authenticated role.

Notifications: Set up Firebase Cloud Messaging for backend-to-user push updates.

🔁 BONUS: Ask AI Studio for Output Like This:
You can end the prompt with:

“Give me:

A full implementation plan (step-by-step)

The Firebase Rules config

All relevant Firebase Function code templates

Example UI fallback components and error boundaries

Suggestions for tools, plugins, or methods I might have missed.”**



Project: AirNow Personalized Customer Dashboard

I need a fully-featured, AI-powered customer dashboard for HVAC users. The dashboard should support the following features and database integrations, using Firebase stack (Auth, Firestore, Functions, Storage).

---

FEATURE REQUIREMENTS:

1. **Dashboard Landing Page**
   - Display active orders, past services, and upcoming appointments.

2. **Technician Tracking**
   - Show real-time ETA and technician location on map.

3. **AI Assistant Gadget**
   - Allow users to chat with the AI about their appliances, services, and budgets.
   - Assistant capabilities:
     - Diagnose issues (“My air filter changed color, what next?”)
     - Predict service recommendation (“Suggest AC tune-up in 2 months”)
     - Recommend budget-based upgrades (e.g., energy-efficient thermostats)

4. **Appliance Inventory Section**
   - Log appliances (e.g., AC model, furnace age)
   - Schedule auto-reminders (filter changes, servicing, etc.)
   - Track service history per appliance

5. **Financial Insights**
   - Show spend history per month/year.
   - Predict next-year maintenance cost.
   - Visualize via charts.

6. **Documents Vault**
   - Store and view invoices, estimates, manuals.
   - Enable PDF download and preview within dashboard.

7. **Smart Alerts**
   - Notify users for upcoming appointments, AI-suggested check-ups, or part warranties.

8. **Personal Tips/Content**
   - Show dynamic advice based on seasonal maintenance, usage patterns, or equipment logs.

---

BACKEND & DATABASE:

- Firestore collections: `users`, `bookings`, `technicians`, `appliances`, `serviceHistory`, `documents`, `notifications`, `userChats`, `financials`
- Firebase Auth-managed sessions with roles.
- Cloud Functions for:
  - Real-time ETA updates
  - AI assistant via GPT integration
  - Reminder scheduling
  - Financial forecast processing
- Storage used for document vault.[[[[[[[[[[[[[[[[[[[[[[[[[[[
- Security: Only authenticated users can access their own data, with proper Firestore rules.

---

UX FLOW:

- After login, redirect user to dashboard.
- Dashboard dynamically populates with user-specific data.
- AI assistant accessible via chat bubble persistent on the dashboard.
- Notifications bell with unread badge.
- Each appliance card expandable to show history, maintenance schedule, docs.

---

Deliverables:

- Detailed Firestore schema and security rules.
- Cloud Function templates for each key flow (assistant, reminders, ETA).
- UI component prototypes: appliance card, AI assistant interface, financial report widget.
- Notes on UI/UX best practices for clarity and user engagement.




Prompt:

You are working on a full-stack web application. I have a user dashboard in my project, but most features inside the dashboard are currently not working. I need you to fix this and ensure full functionality, great UI/UX, and responsiveness.

Here is what I need you to do:

Fix Feature Navigation & Build Pages:

Currently, clicking on dashboard feature buttons does not redirect to the correct pages.

For each feature, build the necessary page if it doesn’t exist yet.

Make sure clicking a feature button navigates to the correct page and the page is fully functional.

Improve Dashboard Navigation Menu:

Remove "Login" and "Signup" buttons from the dashboard’s notification/menu area for logged-in users.

Replace the current generic notification menu with a proper dashboard navigation menu that shows all available dashboard features as clickable items.

This menu should allow users to easily navigate to all dashboard features without going back to the homepage.

Fix & Integrate AI Chat Feature in Dashboard:

I already have the API for the AI chat feature; connect it so that the chat is fully functional.

Make sure the chat is responsive: users can send text or voice, and the AI responds in real time.

Ensure it works seamlessly across desktop and mobile.

Improve UI/UX:

Make the dashboard visually appealing, modern, and classic.

Maintain responsive design for all devices.

Use consistent styling, clean layout, and clear navigation.

Functionality Checks:

Ensure every button, link, and feature works correctly.

Test the dashboard end-to-end so there are no broken links, unresponsive buttons, or UI glitches.

Goal:
Deliver a fully functional, responsive, and visually impressive dashboard where every feature works correctly, the navigation is intuitive, the AI chat is integrated and responsive, and the overall user experience is smooth and engaging.




Prompt to Give Your Developer/AI
Here’s a consolidated instruction you can drop into your AI/dev environment:

Prompt:
Enhance the dashboard by making every feature fully functional and accessible. Each feature button should redirect to its dedicated page, and any missing feature page should be created and integrated. Update the dashboard navigation menu so it dynamically lists the features available in the user’s dashboard, replacing the current login/signup buttons with relevant options. Improve the notification system to include real-time categorized alerts (orders, AI updates, messages, recommendations), and ensure notifications link to their respective feature pages.

Connect the AI assistant to the API provided so it works responsively in both text and voice mode, providing context-aware answers and shortcuts like “Book service” or “Track order.” Add 3D animated feature listings for services, using modern futuristic UI styles such as glassmorphism or neumorphism, smooth animations, and custom icons.

Additional essential features to implement:

Editable profile settings (photo, username, theme).

Global search bar with instant results for all dashboard content.

Real-time order/service tracking with a timeline view.

Quick action floating button for new bookings.

Gamification elements like badges & usage points.

Enhanced security with optional 2FA and login activity logs.

Apply a modern, engaging design with smooth transitions, micro-interactions, and responsive layouts for all devices. The dashboard should feel futuristic, interactive, and highly intuitive.



