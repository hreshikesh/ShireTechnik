import { useState } from "react";
import TeamCard from "./TeamCard";
import { teamData } from "./teamData";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group items into dynamic slides (showing 3 cards on desktop, 1 on mobile)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  // Get active subset for smooth display rotation
  const getVisibleMembers = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamData.length;
      items.push({ ...teamData[index], originalIndex: index });
    }
    return items;
  };

  return (
    <div className="mt-14 sm:mt-20">
      {/* Interactive Controls Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={13} />
            Leadership & Technical Steering
          </div>
          <p className="mt-2 text-sm text-slate-400 max-w-md">
            Decades of collaborative engineering experience driving technological growth.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous leadership member"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-xs font-medium text-slate-400 min-w-[3rem] text-center">
            {currentIndex + 1} / {teamData.length}
          </div>
          <button
            onClick={nextSlide}
            aria-label="Next leadership member"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Dynamic Grid Reel Layout (Compact Height & Special Focus Effect) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
        {getVisibleMembers().map((member, idx) => (
          <div 
            key={`${member.id}-${currentIndex}`} 
            className={`transition-all duration-500 ${idx === 2 ? 'hidden lg:block' : ''}`}
          >
            <TeamCard member={member} isFeatured={idx === 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;