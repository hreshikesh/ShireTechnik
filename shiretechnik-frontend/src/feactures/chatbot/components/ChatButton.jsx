import { BotMessageSquare, X, } from "lucide-react";

export default function ChatButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={open ? "Close Chat" : "Ask Shire AI"}
      aria-expanded={open}
      className={`group flex h-12 w-12 items-center justify-center rounded-full border shadow-lg shadow-black/30 transition-all duration-300 ${
        open
          ? "border-white/20 bg-[#071019] text-white hover:bg-[#0a1420]"
          : "border-cyan-400/30 bg-cyan-400 text-[#05080d] hover:bg-cyan-300 hover:shadow-cyan-400/20"
      }`}
    >
      {open ? (
        <X size={18} />
      ) : (
        <BotMessageSquare
          size={18}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      )}
    </button>
  );
}