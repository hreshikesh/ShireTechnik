// ChatInput.jsx
import { useState } from "react";
import { SendHorizontal } from "lucide-react";

export default function ChatInput({ sendMessage, disabled }) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    sendMessage(value);
    setValue("");
  };

  return (
    <div className="border-t border-white/[0.06] bg-[#071019] px-3 py-3">
      <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#05080d] px-3 py-2 transition-all focus-within:border-cyan-400/30">
        <input
          type="text"
          value={value}
          placeholder="Ask Shire AI..."
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={disabled}
          aria-label="Type your message"
          className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          aria-label="Send message"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-[#05080d] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <SendHorizontal size={15} />
        </button>
      </div>
    </div>
  );
}