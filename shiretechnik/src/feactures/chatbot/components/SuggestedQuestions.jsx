// SuggestedQuestions.jsx
const questions = [
  "What services do you offer?",
  "Tell me about CAESES",
  "How can I contact Shiretechnik?",
  "Book a meeting",
  "What solutions does Shiretechnik provide?",
];

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div className="mt-2 flex flex-col gap-2.5">
      <span className="text-[10px] tracking-[0.15em] text-slate-600">
        SUGGESTED TOPICS
      </span>
      <div className="flex flex-wrap gap-1.5">
        {questions.map((question) => (
          <button
            key={question}
            type="button"
            onClick={() => onSelect(question)}
            className="rounded-lg border border-white/[0.07] bg-[#071019] px-3 py-2 text-[11px] text-slate-400 transition-all duration-200 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-400"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}