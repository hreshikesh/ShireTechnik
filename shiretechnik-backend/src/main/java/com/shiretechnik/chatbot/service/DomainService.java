package com.shiretechnik.chatbot.service;

import org.springframework.stereotype.Service;

@Service
public class DomainService {

    public String detect(String question) {

        String q = question.toLowerCase();

        // ===== Careers =====
        if (q.contains("career") || q.contains("job") || q.contains("hiring")
                || q.contains("vacancy") || q.contains("opening") || q.contains("apply")
                || q.contains("recruitment") || q.contains("employment"))
            return "carrer";

        // ===== HVAC =====
        if (q.contains("hvac") || q.contains("ventilation") || q.contains("airflow")
                || q.contains("thermal comfort") || q.contains("cooling") || q.contains("building services")
                || q.contains("indoor air") || q.contains("ashrae") || q.contains("mep"))
            return "havc";

        // ===== Maritime / Ship =====
//        if (q.contains("maritime") || q.contains("ship") || q.contains("hull")
//                || q.contains("vessel") || q.contains("marine") || q.contains("naval")
//                || q.contains("propulsion") || q.contains("seakeeping") || q.contains("resistance")
//                || q.contains("drag") || q.contains("wave") || q.contains("offshore")
//                || q.contains("hydrodynamic") || q.contains("shipflow"))
//            return "maritime";

        // ===== Lotus Marine =====
//        if (q.contains("lotus") || q.contains("lotus marine"))
//            return "lotus-marine";

        // ===== ColdStream / Diabatix =====
//        if (q.contains("coldstream") || q.contains("diabatix")
//                || q.contains("heat sink optimization") || q.contains("cold plate design")
//                || q.contains("ai cooling") || q.contains("generative cooling")
//                || q.contains("ai thermal"))
//            return "coldstream";

        // ===== AeroSim / Wind Engineering =====
//        if (q.contains("aerosim") || q.contains("wind tunnel")
//                || q.contains("pedestrian comfort") || q.contains("facade pressure")
//                || q.contains("wind engineering") || q.contains("lbm")
//                || q.contains("lattice boltzmann") || q.contains("wind simulation")
//                || q.contains("wind load") || q.contains("wind flow") || q.contains("urban wind")
//                || q.contains("lawson") || q.contains("nen 8100") || q.contains("wind comfort")
//                || q.contains("atmospheric boundary layer") || q.contains("vortex shedding")
//                || q.contains("pollutant dispersion") || q.contains("gas dispersion")
//                || q.contains("wind"))
//            return "aerosim";

        // ===== Turbomachinery =====
//        if (q.contains("turbomachinery") || q.contains("compressor") || q.contains("turbine")
//                || q.contains("pump") || q.contains("fan") || q.contains("impeller")
//                || q.contains("rotating equipment") || q.contains("blade design")
//                || q.contains("volute"))
//            return "turbomachinary";

        // ===== Fire Safety =====
//        if (q.contains("fire") || q.contains("smoke") || q.contains("evacuation")
//                || q.contains("pyrosim") || q.contains("fds") || q.contains("fire dynamics")
//                || q.contains("smoke control") || q.contains("life safety")
//                || q.contains("pathfinder") || q.contains("egress") || q.contains("aset")
//                || q.contains("rset") || q.contains("tenability"))
//            return "firesafety";

        // ===== Electronics Cooling =====
//        if (q.contains("electronic") || q.contains("pcb") || q.contains("heat sink")
//                || q.contains("data center") || q.contains("battery") || q.contains("electronics cooling")
//                || q.contains("thermal management") || q.contains("chip cooling")
//                || q.contains("enclosure cooling"))
//            return "electronic-cooling";

        // ===== CAE Software (CAESES, PyroSim, Pathfinder, Ventus) =====
        if (q.contains("cae software") || q.contains("caeses") || q.contains("ventus")
                || q.contains("parametric") || q.contains("geometry optimization")
                || q.contains("cad optimization") || q.contains("shape optimization")
                || q.contains("simulation software") || q.contains("engineering software"))
            return "cae-solution";

        // ===== CAE Services (Thermal / HVAC / Mechanical / Structural Design) =====
        if (q.contains("cae service") || q.contains("cae services")
                || q.contains("thermal design") || q.contains("hvac design")
                || q.contains("mechanical design") || q.contains("structural design")
                || q.contains("fea") || q.contains("finite element")
                || q.contains("mbd") || q.contains("multibody")
                || q.contains("fatigue") || q.contains("durability")
                || q.contains("stress analysis") || q.contains("vibration analysis"))
            return "cae-service";

        // ===== CFD General =====
        if (q.contains("cfd") || q.contains("computational fluid") || q.contains("flow simulation")
                || q.contains("fluid dynamics") || q.contains("simulation"))
            return "cae-solution";

        // ===== Tutorials & Documentation =====
//        if (q.contains("tutorial") || q.contains("documentation") || q.contains("guide")
//                || q.contains("manual") || q.contains("how to") || q.contains("learn how"))
//            return "tutorials";

        // ===== Training =====
//        if (q.contains("training") || q.contains("course") || q.contains("workshop")
//                || q.contains("pyrosim training") || q.contains("learn")
//                || q.contains("certification") || q.contains("class"))
//            return "training";

        // ===== News =====
//        if (q.contains("news") || q.contains("update") || q.contains("announcement")
//                || q.contains("latest") || q.contains("blog") || q.contains("article"))
//            return "news";

        // ===== Resources (Whitepapers, etc.) =====
        if (q.contains("whitepaper") || q.contains("white paper")
                || q.contains("technical paper") || q.contains("research paper")
                || q.contains("case study") || q.contains("resource")
                || q.contains("download"))
            return "resources";

        // ===== Company / General =====
        if (q.contains("about") || q.contains("company") || q.contains("shiretechnik")
                || q.contains("sandebtech") || q.contains("who are you") || q.contains("location")
                || q.contains("bangalore") || q.contains("contact") || q.contains("email")
                || q.contains("phone") || q.contains("pricing") || q.contains("quote")
                || q.contains("meeting") || q.contains("appointment") || q.contains("schedule")
                || q.contains("services") || q.contains("office") || q.contains("address"))
            return "company";

        return "all";
    }
}