// ChatMessages.jsx
import { useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";
import useAuth from "../../../hooks/useAuth";

export default function ChatMessages({ messages, loading, sendMessage }) {
  const bottomRef = useRef(null);
  const navigate = useNavigate();
  const { requireAuth } = useAuth();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const showSuggestions = messages.length <= 1 && !loading;

  const handleAction = (button) => {
    if (button.url === "/meeting" || button.url === "/contact") {
      requireAuth(() => navigate(button.url));
      return;
    }
    navigate(button.url);
  };

  return (
    <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4" style={{ scrollbarWidth: "none" }}>
      {messages.map((message) => (
        <Fragment key={message.id}>
          <ChatMessage
            sender={message.sender}
            text={message.text}
            timestamp={message.timestamp}
          />
          {message.button && (
            <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <button
                onClick={() => handleAction(message.button)}
                className="flex items-center gap-1.5 rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-400 transition hover:bg-cyan-400/[0.12]"
              >
                {message.button.label}
                <ArrowUpRight size={12} />
              </button>
            </div>
          )}
        </Fragment>
      ))}

      {loading && <TypingIndicator />}
      {showSuggestions && <SuggestedQuestions onSelect={sendMessage} />}

      <div ref={bottomRef} />
    </div>
  );
}