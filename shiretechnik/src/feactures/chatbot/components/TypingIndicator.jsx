// TypingIndicator.jsx
export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/[0.06] bg-[#0a1420] px-4 py-3">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400/60 [animation-delay:0ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400/60 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400/60 [animation-delay:300ms]" />
      </div>
    </div>
  );
}