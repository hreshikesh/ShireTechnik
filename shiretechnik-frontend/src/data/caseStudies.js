
import Ele from "../assets/pdf/resources/SSPL_Thermal Management of Electrical Enclosure (SSPLTFDXXXX-XX).pdf";
import heatSink from "../assets/pdf/resources/SSPL_Heatsink Design Optimization_CaseStudies.pdf";
import busbar from "../assets/pdf/resources/SSPL_Busbar Thermal Analysis_CaseStudy.pdf";
import vias from "../assets/pdf/resources/Case Study Thermal Vias.pdf"
import pcbWhitepaper from "../assets/pdf/resources/PCB Modeling for Thermal Analysis.pdf";
import viaswhitepaper from "../assets/pdf/resources/Thermal Vias Modeling in PCB.pdf";
import peltier from "../assets/pdf/resources/SSPL_Thermal_Analysis_CaseStudy_WPD_v0.2.pdf"
export const caseStudies = [
  {
    id: "SSPLTFD2501-28",
    category: "Thermal Management of Electrical Enclosure",
    categoryId: "thermal",
    title:
      "Case Study on Thermal Management of Electrical Enclosures",
    description:
      "Thermal management of electrical enclosures is a design process of controlling internal temperatures & enclosure surface temperature to prevent sensitive components from overheating, failing, or suffering from condensation. ",
    tags: ["Thermal Management", "PCB Thermal", "Solar Radiation ", "Electric Current Schematic"],
    pdfUrl: Ele,
  },
    {
    id: "SSPLTFD2501-29",
    category: "Heatsink Design Optimization",
    categoryId: "thermal",
    title:
      "Case Study on Heatsink Design Optimization",
    description:
      "Beat possible Heat Sink optimization in order to achieve:Hot-spot temperature reduction,Better overall thermal performance,Compliance with DFM criteria",
    tags: ["Thermal Management", "Heat Sink", "Optimization", "Fan Housing"],
    pdfUrl: heatSink,
  },
      {
    id: "SSPLTFD2503-30",
    category: "Busbar Thermal Design",
    categoryId: "thermal",
    title:
      "Case Study on Busbar Thermal Design",
    description:
      "Busbar based Power Distribution System offers a number of significant advantages for designers and industrial control panel users",
    tags: ["Simplified power distribution", "Lower resistance /impedance than cables"],
    pdfUrl: busbar,
  },
        {
    id: "SSPLTFD2503-31",
    category: "Thermal Vias Modeling for Simulation",
    categoryId: "thermal",
    title:
      "Case Study on Thermal Vias Modeling for Simulation",
    description:
      "An extract from “Thermal Vias Modelling in PCB for Simulation” white paper authored by Shankar S, Debasis Panda, and Milind Kothe",
    tags: ["thermal resistance", "PCB","Natural Cooling Mode","Forced Cooling Mode","Lumped Vias Array Model"],
    pdfUrl: vias,
  },
          {
    id: "SSPLTFD2503-32",
    category: "PCB Thermal Modelling",
    categoryId: "whitepaper",
    title:
      "Thermal Vias Modeling for Simulation",
    description:
      "This Paper elaborates about the different PCB (Printed Circuit Board) modelling approaches that are widely used in thermal simulation analysis and also examine their accuracy for the temperature predictions. ",
    tags: [" Thermal Conductivity", "PCB","Isotropic Conductivity ","Orthotropic Thermal Conductivity "],
    pdfUrl: pcbWhitepaper,
  },
            {
    id: "SSPLTFD2503-33",
    category: "Thermal Vias Modelling in PCB for Simulation ",
    categoryId: "whitepaper",
    title:
      "Thermal Vias Modelling in PCB for Simulation ",
    description:
      "Paper elaborates about the various thermal vias modelling approaches commonly used. ",
    tags: ["Thermal vias ", "Vias","Natural Cooling ","“Lumped Vias Array Model"],
    pdfUrl: viaswhitepaper,
  },
  {
    id: "SSPLTFD2503-34",
    category: "Wearable Peltier Device",
    categoryId: "thermal",
    title:
      "Case Study on Wearable Peltier Device ",
    description:
      "Wearable Peltier Device is a headband version operable to fit around a user's head.",
    tags: ["TEC", " thermal performance","BoM","optimization"],
    pdfUrl: peltier,
  },
];
