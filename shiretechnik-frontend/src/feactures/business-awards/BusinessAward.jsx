import SplitText from "../../component/SplitText";

import { awardData } from "./awardData";

import AchievementBubble from "./AchievementBubble";
import CenterLogo from "./CenterLogo";
import ConnectionLines from "./ConnectionLines";

const BusinessAwards = () => {
    return (

        <section className="relative py-40 overflow-hidden">
            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[600px]
                    w-[600px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-[140px]
                    "
            />
            <div className="mx-auto max-w-7xl px-6">

                <p className="uppercase tracking-[.4em] text-cyan-400">

                    Achievements

                </p>

                <SplitText
                    text="Business Awards We Got!"
                    className="text-5xl font-bold mt-5"
                />

                <p className="mt-8 max-w-3xl text-slate-400">

                    We believe passion, innovation and engineering excellence
                    create long-lasting partnerships.

                </p>

                <div
                    className="
                        relative
                        mt-24
                        h-[700px]
                        w-full
                        "
                >
                    <BlueprintBackground />

                    <FloatingParticles />

                    <ConnectionLines />

                    <CenterLogo />


                    {

                        awardData.map((item, index) => (

                            <AchievementBubble

                                key={item.id}

                                item={item}

                                index={index}

                            />

                        ))

                    }

                </div>

            </div>

        </section>
    );
};

export default BusinessAwards;