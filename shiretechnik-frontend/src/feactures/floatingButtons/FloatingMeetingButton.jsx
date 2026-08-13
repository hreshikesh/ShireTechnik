import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function FloatingMeetingButton() {
  const navigate = useNavigate();
  const { requireAuth } = useAuth();

  const handleMeetingClick = () => {
    requireAuth(() => {
      navigate("/meeting");
    });
  };

  return (
    <button
      onClick={handleMeetingClick}
      type="button"
      aria-label="Schedule a Meeting"
      className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-[#071019] text-slate-400 shadow-lg shadow-black/30 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-400 hover:shadow-cyan-400/10"
    >
      <CalendarDays
        size={20}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </button>
  );
}

export default FloatingMeetingButton;