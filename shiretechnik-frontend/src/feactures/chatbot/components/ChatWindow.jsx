import { motion } from "framer-motion";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import useChat from "../hooks/useChat";

export default function ChatWindow({ onClose }) {
  const chat = useChat();

  return (
    <motion.div
      className="absolute bottom-16 right-0 flex h-[520px] w-[350px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#05080d] shadow-2xl shadow-black/40 sm:w-[390px]"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      role="dialog"
      aria-label="Shire AI Chat Window"
    >
      <ChatHeader onClose={onClose} onClear={chat.clearChat} />
      <ChatMessages {...chat} />
      <ChatInput sendMessage={chat.sendMessage} disabled={chat.loading} />
    </motion.div>
  );
}