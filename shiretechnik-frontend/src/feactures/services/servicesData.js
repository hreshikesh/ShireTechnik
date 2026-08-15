import { Cpu, Hexagon, GraduationCap } from "lucide-react";
import caesoftware from "../../assets/images/homeServiceimage/caesoftware.webp"
import caeEng from "../../assets/images/homeServiceimage/caeeng.webp"
import trainingImg from "../../assets/images/homeServiceimage/havc.webp"
export const services = [
  {
    id: 1,
    sysId: "MOD-01",
    title: "CAE Software Solutions",
    description: "Enterprise-grade engineering software for multiphysics CFD, thermal mapping, and generative optimization.",
    icon: Cpu,
    image: caesoftware
  },
  {
    id: 2,
    sysId: "MOD-02",
    title: "CAE Engineering Services",
    description: "End-to-end engineering consulting, taking high-complexity industrial concepts from architecture to validation.",
    icon: Hexagon,
    image: caeEng
  },
];