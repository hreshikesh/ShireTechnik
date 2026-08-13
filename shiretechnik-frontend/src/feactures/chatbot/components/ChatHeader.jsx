// ChatHeader.jsx
import { X, RotateCcw } from "lucide-react";
import logo from "../../../assets/images/logo/logoModel.webp";

export default function ChatHeader({ onClose, onClear }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#071019] px-4 py-3.5">
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-9 items-center justify-center p-1.5 border rounded-ee-2xl border-cyan-900 bg-cyan-950">
          <img src={logo} alt="Shiretechnik" className="h-full w-full object-cover" />
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#071019] bg-emerald-400" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-cyan-400">Shire AI</h3>
       
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={onClear}
          title="Clear Conversation"
          aria-label="Clear Conversation"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/[0.05] hover:text-cyan-400"
        >
          <RotateCcw size={14} />
        </button>
        <button
          onClick={onClose}
          title="Close Chat"
          aria-label="Close Chat Window"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/[0.05] hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}