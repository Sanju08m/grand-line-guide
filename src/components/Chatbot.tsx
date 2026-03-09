import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import chatbotIcon from "@/assets/chatbot-icon.jpeg";

interface Message {
  role: "user" | "bot";
  content: string;
}

const faqData = [
  {
    keywords: ["date", "venue", "when", "where", "location", "place", "scheduled"],
    answer:
      "The symposium is scheduled for **March 18**, at **B.Tech - IT, Asian College of Engineering and Technology**.",
  },
  {
    keywords: ["events", "event", "available", "what events", "list"],
    answer:
      "We have both **Technical** and **Non-Technical** events!\n\n⚔️ **Technical:** PPT Presentation, Code Debugging, Brain Quiz, Reverse Coding, UI Design.\n\n🎭 **Non-Technical:** Power Lift, IPL Auction, Treasure Hunt, Logo Guess, E-Sports.\n\n🏴‍☠️ **Group:** Talent Show (dance, sing, mimicry).",
  },
  {
    keywords: ["multiple", "participate", "many events", "more than one"],
    answer:
      "Yes! As long as the event timings don't overlap, you are free to participate in multiple events.",
  },
  {
    keywords: ["register", "registration", "sign up", "how to register", "join"],
    answer:
      'You can register through the **"Register"** button on our home page.',
  },
  {
    keywords: ["fee", "cost", "price", "how much", "charge", "amount", "149"],
    answer:
      "The general registration fee is **₹149 per head**, which covers Lunch, Participation Certificate, and 2× Refreshments.",
  },
  {
    keywords: ["spot", "spot registration", "on the day", "walk-in", "walkin"],
    answer:
      "Yes, spot registration is available until **11:30 AM** on the day of the event, but we recommend online registration to avoid the rush!",
  },
  {
    keywords: ["certificate", "certificates", "cert"],
    answer:
      'Yes, all participants will receive a **"Certificate of Participation"**, and winners will get **"Certificates of Merit"** along with prizes. 🏆',
  },
  {
    keywords: ["lunch", "food", "refreshment", "eat", "meal"],
    answer:
      "Yes, delicious lunch and refreshments are included in the registration fee. 🍱",
  },
  {
    keywords: ["contact", "phone", "call", "reach", "coordinator", "number", "details", "who"],
    answer:
      "📞 **Student Coordinators:**\n- Sarathi: 9025587886\n- Keerthana: 8838570776\n\n👩‍🏫 **Staff Coordinators:**\n- Sneha: 8526382792\n- Aravind: 9894304896",
  },
  {
    keywords: ["technical", "tech event", "ppt", "debugging", "quiz", "reverse coding", "ui design"],
    answer:
      "⚔️ **Technical Events:**\n1. PPT Presentation\n2. Code Debugging\n3. Brain Quiz\n4. Reverse Coding\n5. UI Design",
  },
  {
    keywords: ["non-technical", "non technical", "nontechnical", "power lift", "ipl", "treasure", "logo", "esport"],
    answer:
      "🎭 **Non-Technical Events:**\n1. Treasure Hunt\n2. Power Lift\n3. Logo Guess\n4. IPL Auction\n5. E-Sports",
  },
  {
    keywords: ["group", "talent", "talent show", "dance", "sing", "mimicry"],
    answer:
      "🏴‍☠️ **Group Event:**\nTalent Show — Show your talent like dance, sing, or mimicry!",
  },
  {
    keywords: ["prize", "prizes", "winner", "reward", "win"],
    answer:
      "Winners will receive **Certificates of Merit** along with exciting prizes! 🏆",
  },
];

const quickQuestions = [
  "Date & Venue?",
  "What events are available?",
  "Registration fee?",
  "Contact details?",
];

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch = { score: 0, answer: "" };

  for (const faq of faqData) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (lower.includes(kw)) score++;
    }
    if (score > bestMatch.score) {
      bestMatch = { score, answer: faq.answer };
    }
  }

  if (bestMatch.score > 0) return bestMatch.answer;

  return "I'm not sure about that. You can contact our coordinators for more details:\n- Sarathi: 9025587886\n- Keerthana: 8838570776";
}

function renderMarkdown(text: string) {
  // Simple markdown: **bold** and \n
  const parts = text.split("\n").map((line, i) => {
    const boldParsed = line.split(/(\*\*.*?\*\*)/g).map((seg, j) => {
      if (seg.startsWith("**") && seg.endsWith("**")) {
        return (
          <strong key={j} className="font-semibold">
            {seg.slice(2, -2)}
          </strong>
        );
      }
      return seg;
    });
    return (
      <span key={i}>
        {i > 0 && <br />}
        {boldParsed}
      </span>
    );
  });
  return <>{parts}</>;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Ahoy, Pirate! 🏴‍☠️ Welcome to Grand Line Tech Fest! Ask me anything about the symposium.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = (text || input).trim();
    if (!msg) return;

    const userMsg: Message = { role: "user", content: msg };
    const botAnswer = findAnswer(msg);
    const botMsg: Message = { role: "bot", content: botAnswer };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden p-0 border-2 border-primary"
        aria-label="Chat"
      >
        {isOpen ? <X size={22} className="mx-auto text-primary" /> : <img src={chatbotIcon} alt="Chat" className="w-full h-full object-cover" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 w-[340px] sm:w-[380px] max-h-[500px] flex flex-col rounded-xl border border-border bg-card shadow-2xl animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-primary text-primary-foreground font-display tracking-wide text-sm font-semibold flex items-center gap-2">
            <img src={chatbotIcon} alt="Bot" className="w-5 h-5 rounded-full object-cover" />
            Grand Line Bot
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[200px] max-h-[340px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed font-body ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  {renderMarkdown(msg.content)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="text-xs px-2.5 py-1 rounded-full border border-border bg-background text-foreground hover:border-primary/50 transition-colors font-body"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 font-body"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
