// Single source of truth for the IEEE EAC Humanitarian Technology Summit 2027 site.
// Edit values here to update the website content.

export const SUMMIT = {
  organizer: "IEEE East African Community (EAC)",
  name: "Humanitarian Technology Summit",
  shortName: "EAC-HTS 2027",
  year: "2027",
  theme: "Technologies in Context",
  tagline:
    "Advancing Resilient, Inclusive, and Sustainable Communities Through Humanitarian Innovation",
  location: "Kigali, Rwanda",
  dates: "2027 · dates to be announced",
  // TODO: replace with the live registration / interest page when available.
  registrationUrl: "https://www.ieee.org/",
  contactEmail: "eac-hts@ieee.org",
} as const;

export const VISION =
  "To establish East Africa as a leading region for humanitarian technology innovation and deployment, leveraging engineering excellence and digital transformation to improve lives and strengthen community resilience.";

export const MISSION =
  "To convene stakeholders across sectors to accelerate the development, adoption, and scaling of technology solutions that address humanitarian and sustainable development challenges in East Africa.";

export const ABOUT_PARAGRAPHS = [
  "The East African Community is experiencing rapid digital transformation alongside increasing humanitarian and development challenges — climate-related disasters, food insecurity, public health emergencies, displacement, energy access gaps, and digital inequality.",
  "Technology has emerged as one of the most powerful enablers for addressing these challenges. But successful solutions require more than innovation — they require collaboration, contextual understanding, local ownership, and sustainable implementation.",
  "EAC-HTS convenes engineers, researchers, humanitarian actors, policymakers, UN agencies, industry leaders, startups, development partners, and communities to explore, demonstrate, and scale technologies that create measurable social impact.",
];

export const STATS = [
  { value: "700+", label: "Participants" },
  { value: "50+", label: "Speakers" },
  { value: "20+", label: "Countries" },
  { value: "30+", label: "Partners" },
  { value: "20", label: "Startups" },
  { value: "10", label: "Awards" },
];

export type Track = {
  num: number;
  title: string;
  topics: string[];
};

export const TRACKS: Track[] = [
  {
    num: 1,
    title: "Humanitarian Technology & Disaster Resilience",
    topics: [
      "Early Warning Systems",
      "Emergency Communications",
      "Satellite Connectivity",
      "Community Resilience",
      "Humanitarian Logistics",
      "Crisis Mapping",
      "Disaster Analytics",
    ],
  },
  {
    num: 2,
    title: "Artificial Intelligence for Good",
    topics: [
      "Responsible AI",
      "AI Governance",
      "AI for Agriculture",
      "AI for Health",
      "AI for Climate Adaptation",
      "Generative AI for Development",
    ],
  },
  {
    num: 3,
    title: "Data for Development & Humanitarian Response",
    topics: [
      "Data Governance",
      "Data Ethics",
      "Interoperability",
      "Digital Public Infrastructure",
      "Humanitarian Data Systems",
      "Open Data Ecosystems",
    ],
  },
  {
    num: 4,
    title: "Digital Inclusion & Connected Communities",
    topics: [
      "Rural Connectivity",
      "Connected Women",
      "Accessibility Technologies",
      "Community Networks",
      "Digital Literacy",
    ],
  },
  {
    num: 5,
    title: "ClimateTech & Environmental Sustainability",
    topics: [
      "Renewable Energy",
      "Climate Adaptation",
      "Smart Water Systems",
      "Carbon Monitoring",
      "Climate Intelligence",
    ],
  },
  {
    num: 6,
    title: "AgriTech & Food Security",
    topics: [
      "Precision Agriculture",
      "Climate Smart Farming",
      "Mobile Agriculture Services",
      "Agricultural Value Chains",
    ],
  },
  {
    num: 7,
    title: "Digital Health Innovation",
    topics: [
      "Telemedicine",
      "AI Diagnostics",
      "Public Health Systems",
      "Emergency Healthcare Technologies",
    ],
  },
  {
    num: 8,
    title: "Inclusive Digital Finance",
    topics: [
      "Mobile Money",
      "Humanitarian Cash Assistance",
      "Financial Inclusion",
      "Digital Identity Systems",
    ],
  },
];

export type Zone = {
  title: string;
  blurb: string;
  items: string[];
};

export const DEMO_VILLAGE: Zone[] = [
  {
    title: "IEEE MOVE Demonstrations",
    blurb: "Mobile outreach and emergency response in action.",
    items: [
      "Starlink Connectivity",
      "Emergency Communications",
      "Portable Energy Systems",
      "Disaster Response Operations",
    ],
  },
  {
    title: "Drone Innovation Zone",
    blurb: "Aerial systems for response and agriculture.",
    items: ["Search and Rescue", "Disaster Assessment", "Precision Agriculture"],
  },
  {
    title: "AI for Good Lab",
    blurb: "Applied intelligence for development outcomes.",
    items: ["AI Tools for Development", "Humanitarian Analytics"],
  },
  {
    title: "GIS & Mapping Lab",
    blurb: "Geospatial intelligence for crisis response.",
    items: ["OpenStreetMap", "Crisis Mapping", "Geospatial Intelligence"],
  },
];

export const STARTUP_CATEGORIES = [
  "AI for Good",
  "HealthTech",
  "ClimateTech",
  "AgriTech",
  "Digital Inclusion",
  "Disaster Resilience",
  "FinTech",
];

export const STARTUP_BENEFITS = [
  "Exhibition Opportunities",
  "Mentorship",
  "Investor Engagement",
  "IEEE Recognition",
];

export const AWARDS = [
  "Humanitarian Technology Startup of the Year",
  "AI for Good Award",
  "Climate Innovation Award",
  "Digital Inclusion Award",
  "Humanitarian Research Award",
  "Community Impact Award",
  "Women in Humanitarian Technology Award",
  "Young Innovator Award",
  "Outstanding IEEE SIGHT Project Award",
];

export const SIDE_EVENTS = [
  "IEEE SIGHT Leadership Forum",
  "Women in Humanitarian Technology Forum",
  "Youth Innovation Summit",
  "Government Policy Dialogue",
  "UN Agencies Roundtable",
  "Humanitarian Technology Research Symposium",
  "Startup Investor Forum",
  "Career and Opportunities Fair",
];

export const OUTCOMES = [
  "Kigali Humanitarian Technology Declaration",
  "Regional Humanitarian Technology Network",
  "New IEEE SIGHT Projects",
  "Cross-border Collaborations",
  "Startup Investment Opportunities",
  "Policy Recommendations",
  "Increased Disaster Preparedness Capacity",
  "Enhanced Regional Innovation Ecosystems",
];

export const SDGS = [
  { num: 1, label: "No Poverty" },
  { num: 2, label: "Zero Hunger" },
  { num: 3, label: "Good Health & Well-being" },
  { num: 4, label: "Quality Education" },
  { num: 5, label: "Gender Equality" },
  { num: 7, label: "Affordable & Clean Energy" },
  { num: 9, label: "Industry, Innovation & Infrastructure" },
  { num: 11, label: "Sustainable Cities & Communities" },
  { num: 13, label: "Climate Action" },
  { num: 17, label: "Partnerships for the Goals" },
];

export const PARTNER_GROUPS = [
  {
    group: "IEEE",
    members: ["IEEE HTB", "IEEE Foundation", "IEEE SIGHT", "IEEE Region 8", "IEEE Africa Council"],
  },
  {
    group: "UN Agencies",
    members: ["UNDP", "UNICEF", "ITU", "WHO", "FAO", "UNHCR", "WFP"],
  },
  {
    group: "Development Organizations",
    members: ["GSMA M4D", "World Bank", "African Development Bank", "GIZ", "Mastercard Foundation"],
  },
  {
    group: "Industry",
    members: ["Microsoft", "Google", "Ericsson", "Nokia", "MTN", "Airtel", "Safaricom"],
  },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#village", label: "Demo Village" },
  { href: "#startup", label: "Startup Challenge" },
  { href: "#awards", label: "Awards" },
  { href: "#partners", label: "Partners" },
];
