/**
 * Centralized Project and Company Data for Dhanlaxmi Group
 * Integrated with authentic Dhanlaxmi Group project assets & architectural campaign visuals.
 */

import { projectAssets, officialCreatives } from './assets';

export { projectAssets, officialCreatives };

// Curated architectural & interior concept photography ("your images")
const conceptualCuratedPhotos = [
  {
    id: "concept-int-1",
    title: "Double-Height Living Salon & Dining Expanse",
    category: "Interiors",
    filterCategory: "Interiors & Master Suites",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    caption: "Warm neutral materials, bespoke illumination, and fluid spatial balance celebrating quiet luxury in Ahmedabad.",
    badge: "Curated Architectural Concept",
    isDemoAsset: true,
  },
  {
    id: "concept-int-2",
    title: "Restorative Master Bedroom Suite",
    category: "Interiors",
    filterCategory: "Interiors & Master Suites",
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
    caption: "Generous master bedrooms with warm timber touches, acoustic buffering, and generous daylight for restorative rest.",
    badge: "Curated Architectural Concept",
    isDemoAsset: true,
  },
  {
    id: "concept-arch-1",
    title: "Arrival Foyer & Landscaped Entrance Portico",
    category: "Architecture",
    filterCategory: "Architecture",
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    caption: "A discreet, secure arrival court designed to evoke an immediate feeling of sanctuary from the bustling city.",
    badge: "Curated Architectural Concept",
    isDemoAsset: true,
  },
  {
    id: "concept-int-3",
    title: "Bespoke Culinary Kitchen & Utility Yard",
    category: "Interiors",
    filterCategory: "Interiors & Master Suites",
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    caption: "Ergonomic culinary space configured for modern Indian cooking styles with ample storage and separate utility yard.",
    badge: "Curated Architectural Concept",
    isDemoAsset: true,
  },
  {
    id: "concept-life-1",
    title: "Manicured Courtyard & Greenery Buffer",
    category: "Lifestyle",
    filterCategory: "Architecture",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    caption: "Lush botanical buffers and walking spaces creating a serene microclimate for residents.",
    badge: "Curated Architectural Concept",
    isDemoAsset: true,
  },
  {
    id: "concept-life-2",
    title: "Wellness & Morning Pavilion",
    category: "Lifestyle",
    filterCategory: "Architecture",
    url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1400&q=85",
    caption: "Tranquil outdoor deck tailored for morning yoga, pranayama, and quiet contemplation.",
    badge: "Curated Architectural Concept",
    isDemoAsset: true,
  },
  {
    id: "concept-int-4",
    title: "Indoor Recreation & Reading Lounge",
    category: "Interiors",
    filterCategory: "Interiors & Master Suites",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    caption: "Climate-controlled community leisure space featuring quiet reading nooks and board games.",
    badge: "Curated Architectural Concept",
    isDemoAsset: true,
  },
  {
    id: "concept-plan-1",
    title: "3 & 4 BHK Space Planning & Ventilation Blueprint",
    category: "Floor Plans",
    filterCategory: "Architecture",
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    caption: "Architectural blueprint study illustrating circulation corridors, cross-ventilation shafts, and zoning.",
    badge: "Curated Architectural Concept",
    isDemoAsset: true,
  }
];

export const siteConfig = {
  // Demo Mode Banner configuration
  demoMode: {
    enabled: true,
    bannerText: "Independent website concept showcasing Dhanlaxmi Group's Saanjh Luxury Homes with authentic campaign assets.",
    showDisclaimers: true,
  },

  company: {
    name: "Dhanlaxmi Group",
    entityName: "Dhanlaxmi Buildwell LLP",
    tagline: "Quiet Luxury. Thoughtful Living.",
    headquarters: "Ahmedabad, Gujarat, India",
    instagramUrl: "https://www.instagram.com/dhanlaxmi.group/",
    brandColors: {
      midnightNavy: "#10172B",
      deepBlue: "#172341",
      champagneGold: "#C8A96B",
      paleGold: "#E1CC98",
      warmIvory: "#F7F4ED",
      charcoal: "#292A2D",
    },
    // Reference numbers from promotional creatives
    contactNumbers: [
      {
        display: "+91 63555 01405",
        raw: "+916355501405",
        label: "Sales Reference Desk",
        isVerified: true,
      },
      {
        display: "+91 93755 03366",
        raw: "+919375503366",
        label: "Office Reference Line",
        isVerified: true,
      }
    ],
    whatsappNumber: "916355501405",
    email: "enquiries.concept@dhanlaxmibrand.com",
    officeAddress: "Jain Nagar / Shantivan Area, Paldi, Ahmedabad, Gujarat 380007, India",
  },

  flagshipProject: {
    id: "saanjh",
    name: "Saanjh Luxury Homes",
    shortName: "Saanjh",
    tagline: "A quieter kind of luxury.",
    developer: "Dhanlaxmi Buildwell LLP",
    associatedGroup: "Dhanlaxmi Group",
    location: "Paldi, Ahmedabad, Gujarat",
    subLocation: "Jain Nagar / Shantivan Area, Paldi",
    configurations: "3 & 4 BHK Luxury Residences",
    superBuiltUpRange: "2,430 – 3,330 sq. ft. (3 BHK: 2,430 & 2,700 sq. ft. | 4 BHK: 3,330 sq. ft.)",
    carpetAreaRange: "1,101 – 1,497 sq. ft. (approx. carpet area — subject to unit-specific schedule)",
    totalUnits: "15 Exclusive Residences (Low-Density Boutique Community)",
    proposedPossession: "December 2028 (Possession in ~2 Years as per campaign)",
    currentStatus: "Under Construction / Active Development",
    reraRegistration: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Municipal Corporation/RAA17162/210726/311228",
    reraPortalUrl: "https://gujrera.gujarat.gov.in/",

    heroImage: projectAssets.img21,
    aerialImage: projectAssets.main,
    spiritualImage: projectAssets.img8,
    connectivityImage: projectAssets.img4,

    highlights: [
      "Low-density boutique residential community with only 15 residences",
      "Prime residential enclave in Jain Nagar / Shantivan, Paldi",
      "Peaceful neighborhood living featuring an on-premise consecrated Jain Derasar",
      "Expansive 3 BHK (2,430 & 2,700 sq.ft.) & 4 BHK (3,330 sq.ft.) floor layouts",
      "Spacious master bedrooms from 19x10 ft with private sunrise & sunset apertures",
      "Rooftop terrace garden, yoga pavilion & solar panel sustainable energy setup",
      "30+ curated lifestyle amenities tailored for intergenerational family harmony",
    ],

    configurationsList: [
      {
        id: "3bhk",
        name: "3 BHK Luxury Residence",
        superBuiltUp: "2,430 & 2,700 sq. ft. Super Built-Up",
        carpetArea: "Approx. 1,101 – 1,250 sq. ft. Carpet Area",
        carpetNote: "Official campaign specification: 2,430 & 2,700 sq. ft. | Verified carpet area subject to unit schedule",
        balconies: "2 Private Balconies & Planter Decks",
        bathrooms: "3 En-suite Bathrooms",
        masterBedroomSize: "19 x 10 FT Spacious Master Suite",
        description: "An impeccably proportioned residence crafted for refined family living. Expansive living and formal dining salons, uninterrupted natural morning daylight, a 19x10 ft master bedroom retreat, and direct views of peaceful surroundings.",
        specs: [
          { label: "Super Built-Up Area", value: "2,430 sq. ft. & 2,700 sq. ft. options" },
          { label: "Master Sanctuary", value: "19 x 10 FT suite with dresser & en-suite bathroom" },
          { label: "Living & Dining", value: "Generous expansive salon with private balcony access" },
          { label: "Bedrooms 2 & 3", value: "Well-ventilated with premium acoustic window apertures" },
          { label: "Kitchen & Utility", value: "Dedicated culinary kitchen with connected dry service yard" },
          { label: "Orientation", value: "Optimized for natural cross-breeze, morning sun & Vaastu" },
        ],
        image: projectAssets.img19,
        badge: "Official Sizing: 2430 & 2700 SQFT",
      },
      {
        id: "4bhk",
        name: "4 BHK Grand Residence",
        superBuiltUp: "3,330 sq. ft. Super Built-Up",
        carpetArea: "Approx. 1,380 – 1,497 sq. ft. Carpet Area",
        carpetNote: "Official campaign specification: 3,330 sq. ft. | Verified carpet area subject to unit schedule",
        balconies: "3 Private Balconies & Terraces",
        bathrooms: "4 En-suite Bathrooms + Powder Room",
        masterBedroomSize: "19 x 10 FT Opulent Master Suite",
        description: "The pinnacle of boutique luxury in Paldi. Expansive entertaining spaces, double-aspect natural illumination, lavish 19x10 ft master suite, and distinct private family sanctuaries designed for effortless multigenerational elegance.",
        specs: [
          { label: "Super Built-Up Area", value: "3,330 sq. ft. Grand Typology" },
          { label: "Master Sanctuary", value: "19 x 10 FT master suite with dedicated wardrobe corridor" },
          { label: "Grand Living Room", value: "Double-aspect open living and formal dining zone" },
          { label: "Family Suites", value: "Three expansive additional bedrooms with full en-suites" },
          { label: "Gourmet Kitchen", value: "Chef-friendly culinary area with utility & store access" },
          { label: "Privacy Layout", value: "Only two units per floor for supreme privacy and quiet" },
        ],
        image: projectAssets.img17,
        badge: "Signature Living: 3330 SQFT",
      }
    ],

    amenities: [
      {
        id: "derasar",
        title: "Dedicated Jain Derasar",
        category: "Spiritual & Serenity",
        description: "A consecrated, tranquil Jain temple within the private residential premises, offering residents a peaceful sanctuary for daily darshan, morning prayers, and quiet contemplation.",
        icon: "Sparkles",
        image: projectAssets.img3,
        verificationNote: "Official amenity highlighted across Dhanlaxmi Group project campaign."
      },
      {
        id: "terrace",
        title: "Sky Terrace & Rooftop Amenities",
        category: "Terrace Skyline",
        description: "Expansive open-sky rooftop featuring a manicured terrace lawn, shaded gazebo pavilion, wellness deck, and clean solar panel energy installations that bring Paldi's skyline to you.",
        icon: "Sun",
        image: projectAssets.main,
        verificationNote: "Official 3D architectural render of Saanjh terrace level."
      },
      {
        id: "garden",
        title: "Real Green Spaces & Lawns",
        category: "Nature & Greenery",
        description: "'Not decoration, real green space.' Meticulously curated natural turf, fragrant native botanicals, and shaded walkways designed for barefoot morning strolls and elder comfort.",
        icon: "Trees",
        image: projectAssets.img5,
        verificationNote: "Featured in official project campaign creatives."
      },
      {
        id: "master-suites",
        title: "19x10 FT Master Suites",
        category: "Living Proportions",
        description: "Master bedrooms with rare 19x10 ft dimensions, deep picture windows framing sunrise and sunset skylines, and acoustic buffering for deeply restful sleep.",
        icon: "HeartPulse",
        image: projectAssets.img6,
        verificationNote: "Official dimension specification from project campaigns."
      },
      {
        id: "banquet",
        title: "Community & Festive Hall",
        category: "Social Gatherings",
        description: "A dignified, air-conditioned community lounge tailored for intimate family celebrations, festive gatherings, Diwalis, and milestones without leaving home.",
        icon: "Users",
        image: projectAssets.img13,
        verificationNote: "Designed for close-knit community harmony and festive events."
      },
      {
        id: "balcony",
        title: "Breathing Garden Balconies",
        category: "Fresh Air & Wellness",
        description: "'Every breath feels lighter when your home breathes with you.' Deep private balconies with integrated planter decks that capture cool breezes across Paldi.",
        icon: "Gamepad2",
        image: projectAssets.img10,
        verificationNote: "Optimized for natural cross-ventilation and leafy views."
      }
    ],

    // Comprehensive gallery combining official project assets and curated architectural photography
    gallery: [
      ...officialCreatives,
      ...conceptualCuratedPhotos
    ],

    locationDetails: {
      city: "Ahmedabad, Gujarat",
      area: "Paldi (Jain Nagar / Shantivan vicinity)",
      description: "Paldi is one of Ahmedabad's most established and sought-after residential enclaves. Known for its peaceful, tree-lined avenues, renowned educational institutions, esteemed Jain Upashrays and Derasars, and seamless connectivity to Ashram Road, Riverfront, and SG Highway, Paldi offers a rare balance of traditional community warmth and modern urban ease.",
      disclaimer: "Jain Nagar / Shantivan Area, Paldi. Official coordinate directions shared upon visit appointment.",
      neighborhoodQualities: [
        {
          title: "Consecrated Spiritual Enclave",
          desc: "Steeped in Ahmedabad's rich cultural heritage, with prominent Jain Derasars, Upashrays, and a close-knit, dignified residential community."
        },
        {
          title: "Seamless Central Connectivity",
          desc: "Swift accessibility to Ashram Road, Sabarmati Riverfront Promenade, Ellisbridge, CG Road, and SG Highway, connecting you effortlessly across Ahmedabad."
        },
        {
          title: "30+ Lifestyle Amenities & Essentials",
          desc: "Immediate access to Ahmedabad's top multispecialty hospitals, everyday shopping, fine dining, and cultural centers within 5–10 minutes."
        },
        {
          title: "Enduring Capital Value & Respect",
          desc: "Paldi remains one of Ahmedabad's most prestigious residential addresses with consistently high land value and multigenerational family appeal."
        }
      ]
    },

    faqs: [
      {
        question: "What apartment configurations and sizes are available at Saanjh?",
        answer: "Saanjh offers an exclusive boutique collection of 15 residences in 3 BHK (2,430 sq. ft. & 2,700 sq. ft.) and 4 BHK (3,330 sq. ft.) configurations, with spacious master bedrooms from 19x10 ft. Carpet area range is approx. 1,101 to 1,497 sq. ft."
      },
      {
        question: "Where is the project located in Paldi?",
        answer: "The project is situated in the peaceful Jain Nagar / Shantivan enclave of Paldi, Ahmedabad. It offers quick access to hospitals, daily shopping, and major transit routes while maintaining a quiet, private residential environment."
      },
      {
        question: "Is there a Jain Derasar within the project?",
        answer: "Yes, Saanjh features a dedicated, consecrated Jain Derasar right within the premises, allowing residents to perform peaceful daily darshan and morning prayers in an intimate, sacred courtyard setting."
      },
      {
        question: "What is the RERA registration number for Saanjh?",
        answer: "The project is registered under Gujarat RERA: PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Municipal Corporation/RAA17162/210726/311228. You can verify all sanctioned approvals directly on the official Gujarat RERA portal (gujrera.gujarat.gov.in)."
      },
      {
        question: "What is the expected possession timeline?",
        answer: "Possession is targeted in approximately 2 years (publicly listed proposed possession: December 2028). For active construction milestone updates, please contact the sales desk."
      },
      {
        question: "How can I schedule a private site visit?",
        answer: "Private guided visits can be scheduled by appointment. Simply submit the 'Request a Site Visit' form or connect via WhatsApp at +91 63555 01405, and our sales desk will confirm your slot."
      }
    ]
  }
};
