import { Cpu,Battery,Zap } from "lucide-react";

import vpx from "../assets/pdf/application/Shiretechnik_6U_VPX_Thermal_Catalogue.pdf";
import avionics from "../assets/pdf/application/Shiretechnik_Avionics LRU_Catalogue.pdf";
import power from "../assets/pdf/application/Shiretechnik_Power_Converter_Catalogue.pdf"
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
    industry: "Industrial",
    description:
      "Power converters drive the energy behind today’s innovations — from electric vehicles to renewable grids.",
    tags: ["Heatsink", "Magnetics,", "CFD/FE model"],
    pdfUrl: power,
    icon: "zap",
  },

 
 
];