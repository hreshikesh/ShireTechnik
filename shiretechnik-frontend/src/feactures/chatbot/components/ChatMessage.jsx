// ChatMessage.jsx
export default function ChatMessage({ sender, text, timestamp }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
          isUser
            ? "rounded-br-md bg-cyan-400 text-[#05080d]"
            : "rounded-bl-md border border-white/[0.06] bg-[#0a1420] text-slate-300"
        }`}
      >
        <p className={`text-sm leading-6 ${isUser ? "text-[#05080d]" : "text-slate-300"}`}>
          {text}
        </p>
        {timestamp && (
          <span
            className={`mt-1 block text-[9px] ${
              isUser ? "text-[#05080d]/50" : "text-slate-600"
            }`}
          >
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}