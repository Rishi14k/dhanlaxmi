# Dhanlaxmi Group &bull; Premium Real Estate Web Portal (MERN Stack)

> **"Quiet Luxury. Thoughtful Living."**  
> An independently crafted digital brand experience and flagship residential microsite concept for **Dhanlaxmi Group / Dhanlaxmi Buildwell LLP** (Ahmedabad, Gujarat, India) and its premier development **Saanjh Luxury Homes** in Paldi.

---

## 🏛️ Brand & Project Architecture

- **Promoter / Developer**: Dhanlaxmi Buildwell LLP (associated with Dhanlaxmi Group)
- **Flagship Project**: Saanjh Luxury Homes
- **Location**: Paldi, Ahmedabad, Gujarat (Jain Nagar / Shantivan vicinity — exact coordinates to be confirmed)
- **Residential Typologies**: Exclusive 3 BHK & 4 BHK residences
- **Reported Units**: 15 low-density residences
- **Reported Carpet Area**: Approx. 1,101 – 1,497 sq. ft. (Carpet area subject to unit-specific architectural schedule)
- **Reported Target Possession**: December 2028 (Public regulatory filing record)
- **Gujarat RERA Registration**: `PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Municipal Corporation/RAA17162/210726/311228`
- **Official GujRERA Verification**: [gujrera.gujarat.gov.in](https://gujrera.gujarat.gov.in/)

---

## 💻 Technology Stack

This application is built strictly following the **MERN** architecture without TypeScript, adhering directly to user preferences:

- **Frontend**:
  - **React 18** (JavaScript `.jsx`)
  - **Vite** (Ultra-fast HMR and optimized bundler)
  - **Tailwind CSS** (Custom luxury token palette: Midnight Navy `#10172B`, Deep Blue `#172341`, Champagne Gold `#C8A96B`, Pale Gold `#E1CC98`, Warm Ivory `#F7F4ED`, Charcoal `#292A2D`)
  - **Lucide Icons** (Consistent iconography)
  - **React Router DOM v6** (Multi-route SPA architecture)
- **Backend**:
  - **Node.js** & **Express**
  - **MongoDB** & **Mongoose** (With automatic graceful in-memory fallback for offline/demo runtimes)
  - **REST API** (`/api/enquiries`, `/api/health`)
  - **Lead Management System** with input validation, honeypot/spam protection, and WhatsApp link generation

---

## 📁 Repository Structure

```
c:/rishi/Dhanlaxmi/
├── client/                      # React Frontend (JavaScript)
│   ├── public/
│   ├── src/
│   │   ├── components/          # Reusable UI Components
│   │   │   ├── DemoBanner.jsx   # Top independent concept disclosure
│   │   │   ├── EnquiryModal.jsx # Lead capture dialog with validation
│   │   │   ├── FloorPlanModal.jsx # CAD preview & blueprint request
│   │   │   ├── Footer.jsx       # Editorial luxury footer with RERA
│   │   │   ├── LightboxModal.jsx# Gallery photo inspection modal
│   │   │   ├── Logo.jsx         # Custom brand monogram & typography
│   │   │   ├── Navbar.jsx       # Sticky header with mobile drawer
│   │   │   ├── PrivacyModal.jsx # Transparent legal notice modal
│   │   │   ├── ReraCard.jsx     # Government RERA verification card
│   │   │   ├── ScrollToTop.jsx  # Route change scroll reset
│   │   │   └── WhatsAppButton.jsx # Quick WhatsApp consultation button
│   │   ├── data/
│   │   │   └── companyData.js   # Centralized data source for facts & assets
│   │   ├── pages/
│   │   │   ├── HomePage.jsx     # Full editorial narrative (13 sections)
│   │   │   ├── ProjectsPage.jsx # Portfolio & development philosophy
│   │   │   ├── SaanjhPage.jsx   # Dedicated luxury microsite with FAQ
│   │   │   ├── AboutPage.jsx    # Developer ethos, values, Jain Derasar
│   │   │   ├── ContactPage.jsx  # Dual booking & enquiry consultation
│   │   │   └── NotFoundPage.jsx # Bespoke 404 screen
│   │   ├── App.jsx              # Orchestrator & route definitions
│   │   ├── index.css            # Design tokens & typography rules
│   │   └── main.jsx             # React DOM root
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                      # Node.js + Express Backend
│   ├── models/
│   │   └── Enquiry.js           # Mongoose Lead schema
│   ├── routes/
│   │   └── enquiryRoutes.js     # REST endpoints for enquiries & site visits
│   ├── .env.example
│   ├── package.json
│   └── server.js                # Express server with MongoDB fallback
│
├── ASSET_MANIFEST.md            # Asset attribution & client checklist
├── package.json                 # Root script runner
└── README.md
```

---

## 🚀 Getting Started

### 1. Installation
Run from root:
```bash
npm run install-all
```
Or individually:
```bash
cd server && npm install
cd ../client && npm install
```

### 2. Running Locally

**Start the Express Server:**
```bash
# Terminal 1
cd server
npm run dev
# Running on http://localhost:5000
```

**Start the React Client:**
```bash
# Terminal 2
cd client
npm run dev
# Running on http://localhost:5173
```

---

## 🔒 Demo Mode & Verification Settings

To facilitate client review without publishing unconfirmed claims, the entire factual footprint is governed by `client/src/data/companyData.js`:
- `siteConfig.demoMode.enabled`: Controls the independent presentation banner.
- `siteConfig.company.contactNumbers`: Reference phone numbers are labelled as unverified until confirmed by Dhanlaxmi Buildwell LLP.
- `siteConfig.flagshipProject.reraRegistration`: Matches official Gujarat RERA registration `RAA17162`.
