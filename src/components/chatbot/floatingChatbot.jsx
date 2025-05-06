import { useState } from "react";
import { Bot, X } from "lucide-react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "How can I help you navigate the dashboard?" },
  ]);
  const [hasTyped, setHasTyped] = useState(false);

  const faq = [
    { question: "How many sites are rejected in Jan 2025", answer: "17 sites were rejected in Jan 2025." },
    { question: "what is billing status of Jan 2025?", answer: "Done: 5, Pending: 3" },
    { question: "what is the balance due for usa?", answer: "$17k" },
    { question: "what is the expense request by Canada?", answer: " 9k" },
    { question: "Give me total number of POs which are aging above 120 days.", answer: "45" },

  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setHasTyped(true);
    const newMessages = [...messages, { sender: "user", text: input }];

    const matched = faq.find((f) =>
      input.toLowerCase().includes(f.question.toLowerCase())
    );

    if (matched) {
      newMessages.push({ sender: "bot", text: matched.answer });
    } else {
      newMessages.push({
        sender: "bot",
        text: "Sorry, I couldn't understand that. Try a different command.",
      });
    }

    setMessages(newMessages);
    setInput("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setInput("");
    setHasTyped(false);
    setMessages([
      { sender: "bot", text: "How can I help you" },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Bot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gray-900 border border-cyan-500 text-cyan-400 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute animate-ping w-full h-full rounded-full bg-cyan-500 opacity-20"></span>
        <Bot className="w-5 h-5 z-10 relative" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-3 w-[590px] max-w-full backdrop-blur-lg bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-cyan-500 rounded-xl shadow-2xl animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-cyan-600 text-white rounded-t-xl">
            <span className="font-semibold text-base tracking-wide">Maverick AI</span>
            <button
              onClick={handleClose}
              className="hover:text-red-400 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-[320px] overflow-y-auto text-sm space-y-3">
  {messages.map((msg, idx) => (
    <div
      key={idx}
      className={`${
        msg.sender === "user"
          ? "text-right text-cyan-300"
          : "text-cyan-100"
      }`}
    >
      <p className="bg-slate-700 inline-block px-4 py-2 rounded-md max-w-[80%] break-words text-sm">
        {msg.text}
      </p>
    </div>
  ))}

  {/* Try these suggestions (shown only before typing) */}
{!hasTyped && (
  <div className="mt-6 text-sm text-cyan-300">
    <p className="mb-2 font-semibold text-cyan-400">💡 Try these:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {faq.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setInput(item.question);
            setTimeout(() => {
              setHasTyped(true);
              setMessages(prev => [
                ...prev,
                { sender: "user", text: item.question },
                { sender: "bot", text: item.answer },
              ]);
              setInput("");
            }, 100);
          }}
          className="text-left px-3 py-2 bg-slate-700 hover:bg-slate-600 border border-cyan-500 rounded-md transition-colors duration-200 text-xs sm:text-sm"
        >
          {item.question}
        </button>
      ))}
    </div>
  </div>
)}
</div>


          {/* Input Section */}
          <div className="px-4 py-3 border-t border-cyan-800 bg-slate-900 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (!hasTyped && e.target.value.trim() !== "") {
                  setHasTyped(true);
                }
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a command..."
              className="flex-1 p-2 rounded bg-slate-800 border border-cyan-500 text-white-300 placeholder-cyan-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              onClick={handleSend}
              className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-4 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
