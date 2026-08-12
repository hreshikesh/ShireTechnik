import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

function ChatBot() {
  const [open, setOpen] = useState(false);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    },
    [open]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="relative flex flex-col items-end">
      <AnimatePresence>
        {open && <ChatWindow onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <ChatButton
        open={open}
        onClick={() => setOpen((prev) => !prev)}
      />
    </div>
  );
}

export default ChatBot;