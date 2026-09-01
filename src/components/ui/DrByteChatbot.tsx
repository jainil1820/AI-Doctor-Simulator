import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Bot,
  User,
} from 'lucide-react';
import { playClickSound } from '../../utils/audio';

const KNOWLEDGE_RESPONSES: { keywords: string[]; title: string; reply: string }[] = [
  {
    keywords: ['fever', 'cough', 'flu', 'influenza'],
    title: 'Flu Patterns',
    reply: 'In our fictional training dataset, Fever + Cough + Fatigue + Body Pain co-occur in 88% of flu-like records. When these symptoms appear together, the AI boosts the flu-like probability score!'
  },
  {
    keywords: ['wrong', 'mistake', 'error', 'fail', 'accuracy'],
    title: 'Why AI Makes Mistakes',
    reply: 'AI relies entirely on past data. If a patient has an unusual combination (like sneezing + vomiting) or a rare condition not present in its training dataset, the AI gets confused or outputs a Low Confidence pattern.'
  },
  {
    keywords: ['doctor', 'human', 'hospital', 'physician', 'real'],
    title: 'AI vs Real Doctors',
    reply: 'A real doctor conducts physical examinations, tests blood samples, reviews patient history, and listens empathetically. AI only performs mathematical pattern matching on the few words you type!'
  },
  {
    keywords: ['knn', 'algorithm', 'how it works', 'machine learning', 'math'],
    title: 'How KNN Works',
    reply: 'Our simulator uses K-Nearest Neighbors (KNN). It represents each patient as a mathematical vector (a list of numbers) and calculates the geometric distance to find the 7 most similar historical cases.'
  },
  {
    keywords: ['confidence', 'percentage', 'score', 'probab'],
    title: 'Understanding Confidence',
    reply: 'A 90% confidence score does NOT mean 90% medical certainty. It simply means your symptoms have a 90% mathematical resemblance to training examples in that category!'
  }
];

const DEFAULT_QUESTIONS = [
  'How does the AI recognize patterns?',
  'Why do we always need real human doctors?',
  'What happens if I pick rare or mixed symptoms?',
  'What is the K-Nearest Neighbors algorithm?'
];

export const DrByteChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: 'bot' | 'user'; text: string; time: string }[]
  >([
    {
      sender: 'bot',
      text: "👋 Hi! I'm Dr. Byte, your Science Fair AI Mentor. Ask me any question about how AI learns from data, pattern math, or why real doctors are indispensable!",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;
    playClickSound();

    const userMsg = { sender: 'user' as const, text, time: 'Now' };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Generate intelligent educational response
    const lower = text.toLowerCase();
    const match = KNOWLEDGE_RESPONSES.find((item) =>
      item.keywords.some((kw) => lower.includes(kw))
    );

    setTimeout(() => {
      let botReply =
        match?.reply ||
        `Great question! In Machine Learning, AI algorithms look at datasets of past examples (features) to calculate statistical probabilities. Always remember: AI is a pattern calculation tool, while real healthcare requires human clinical expertise!`;

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time: 'Now'
        }
      ]);
    }, 400);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            playClickSound();
            setIsOpen(!isOpen);
          }}
          className="relative p-4 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-500/50 flex items-center justify-center cursor-pointer border-2 border-white/40 focus:outline-none"
          aria-label="Open AI Mentor Dr. Byte"
        >
          <Bot className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-400 border-2 border-white rounded-full animate-pulse" />
        </motion.button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-96 max-h-[580px] h-[520px] glass-panel rounded-3xl border border-blue-500/30 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Dr. Byte (AI Mentor)</h4>
                  <p className="text-[11px] text-blue-100">Science Fair Educational Guide</p>
                </div>
              </div>
              <button
                onClick={() => {
                  playClickSound();
                  setIsOpen(false);
                }}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message History */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-900/50 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${
                    m.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                      m.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300'
                    }`}
                  >
                    {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`p-3 rounded-2xl max-w-[78%] leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700/80 rounded-tl-none shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
              {DEFAULT_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 whitespace-nowrap hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors cursor-pointer shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about AI pattern math..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
