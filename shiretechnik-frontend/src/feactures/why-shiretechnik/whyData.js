import cae from "../../assets/images/whyus/whyuscae.webp"
import eng from "../../assets/images/whyus/engwhyus.webp"
import training from "../../assets/images/whyus/trainingwhyus.webp"
import hvac from "../../assets/images/homeServiceimage/havc.webp";

export const whyData = [
  {
    id: 0,
    title: "CAE Software",
    heading: "Advanced CAE Software Solutions",
    description:
      "Accelerate engineering workflows with CFD, thermal analysis, optimization and simulation software.",

    image: cae,

    stats: [
      { label: "Projects", value: 250 },
      { label: "Clients", value: 80 },
      { label: "Experience", value: 20 }
    ],

    features: [
      "CFD Simulation",
      "Thermal Analysis",
      "Shape Optimization"
    ],
  },

  {
    id: 1,
    title: "Engineering Services",

    heading: "Professional Engineering Services",

    description:
      "Engineering consulting and simulation support for industries worldwide.",

    image: eng,

    stats: [
      { label: "Projects", value: 500 },
      { label: "Countries", value: 12 },
      { label: "Experts", value: 35 }
    ],

    features: [
      "Simulation",
      "Consulting",
      "Validation"
    ]
  },

  {
    id: 2,
    title: "HVAC Solutions",

    heading: "Comprehensive HVAC Design Services",

    description:
      "CFD-driven ventilation and air distribution design that meets ASHRAE, NBC and WHO standards for safe, efficient buildings.",

    image: hvac,

    stats: [
      { label: "Projects", value: 150 },
      { label: "Standards Met", value: 3 },
      { label: "Years", value: 15 }
    ],

    features: [
      "Ventilation Design",
      "Air Distribution",
      "Smoke & Fire Control"
    ]
  },

  {
    id: 3,
    title: "Training",

    heading: "Industrial Training",

    description:
      "Professional training programs for students and engineers.",

    image: training,

    stats: [
      { label: "Students", value: 4000 },
      { label: "Programs", value: 60 },
      { label: "Partners", value: 25 }
    ],

    features: [
      "Corporate",
      "Certification",
      "Hands-on Labs"
    ]
  }
];