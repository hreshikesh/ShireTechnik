import { Cpu,Battery,Zap } from "lucide-react";

import vpx from "../assets/pdf/application/Shiretechnik_6U_VPX_Thermal_Catalogue.pdf";
import avionics from "../assets/pdf/application/Shiretechnik_Avionics LRU_Catalogue.pdf";
import power from "../assets/pdf/application/Shiretechnik_Power_Converter_Catalogue.pdf"
import thermal from "../assets/pdf/application/Thermal_Analysis_IC_Package_Support .pdf"
export const thermalApplications = [
  {
    id: "Thermal Engineering Catalogue-VPX",
    title: "THERMAL ANALYSIS OF 6U VPX BOARD",
    description:
      "VPX is the backbone of next-generation embedded computing, designed for rugged aerospace, defence, and industrial applications.",
    tags: ["VPX", "TAR", "Fans", "Heat maps"],
    pdfUrl: vpx,
    icon: "cpu",
  },
  {
    id: "Thermal Engineering Catalogue-Avionics",
    title: "THERMAL DESIGN OF AIRBORNE ELECTRONICS",
    description:
      "In avionics, Line Replacement Units (LRUs) are the backbone of mission-critical systems.",
    tags: ["Cooling Design", "RTCA", "CFD/FE model"],
    pdfUrl: avionics,
    icon: "battery",
  },
  {
    id: "Power Converter Engineering Catalogue",
    title: "ENCLOSURE DESIGN & THERMAL MANAGEMENT OF POWER CONVERSION SYSTEMS",
    description:
      "Power converters drive the energy behind today’s innovations — from electric vehicles to renewable grids.",
    tags: ["Heatsink", "Magnetics,", "CFD/FE model"],
    pdfUrl: power,
    icon: "zap",
  },
    {
    id: "Thermal Analysis for IC Package",
    title: "Thermal Analysis for IC Package Support",
    description:
      "Characterize and validate the thermal performance of an integrated circuit (IC) package to ensure the junction temperature remains within its rated operating temperature across worst-case power and environmental conditions",
    tags: ["DTM", "CTM,", "θJA/θJC"],
    pdfUrl: thermal,
    icon: "cpu",
  },

 
 
];