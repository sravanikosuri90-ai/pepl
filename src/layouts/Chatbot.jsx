import React, { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello 👋 How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  /* SEND MESSAGE */
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const userText = input;
    setInput("");

    setTimeout(() => {
      const botReply = getBotReply(userText);
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    }, 600);
  };

  /* BOT RESPONSES */
  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("price"))
      return "Our pricing varies by project. Please check our Projects page.";
    if (text.includes("contact"))
      return "You can contact us at +91 90000 00001.";
    if (text.includes("location"))
      return "We are located at Mangalagiri, Guntur, Andhra Pradesh.";
    if (text.includes("hello") || text.includes("hi"))
      return "Hi there 😊 How can I assist you today?";

    return "Thanks for your message! Our team will contact you soon.";
  };

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        /* FLOAT BUTTON */
        .chat-toggle {
          position: fixed;
          bottom: 35px;
          right: 35px;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: white;
          background: linear-gradient(135deg, #0A1F44, #2563eb);
          box-shadow: 0 15px 35px rgba(0,0,0,0.35);
          transition: 0.3s;
          z-index: 9999;
        }

        .chat-toggle:hover {
          transform: scale(1.15);
        }

        /* CHAT WINDOW (LARGER SIZE) */
        .chat-container {
          position: fixed;
          bottom: 120px;
          right: 35px;
          width: 420px;
          height: 600px;
          backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.9);
          border-radius: 25px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.35);
          animation: slideUp 0.3s ease;
          z-index: 9999;
        }

        @keyframes slideUp {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* HEADER */
        .chat-header {
          background: linear-gradient(135deg, #0A1F44, #2563eb);
          color: white;
          padding: 18px 20px;
          font-weight: bold;
          font-size: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header button {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          cursor: pointer;
          font-size: 16px;
          padding: 6px 10px;
          border-radius: 8px;
        }

        /* MESSAGES AREA */
        .chat-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background: linear-gradient(to bottom, #f8fafc, #e2e8f0);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* MESSAGE BUBBLES */
        .message {
          max-width: 80%;
          padding: 14px 18px;
          border-radius: 18px;
          font-size: 15px;
          line-height: 1.5;
        }

        .user {
          align-self: flex-end;
          background: linear-gradient(135deg, #2563eb, #1e40af);
          color: white;
          border-bottom-right-radius: 5px;
          box-shadow: 0 5px 15px rgba(37,99,235,0.4);
        }

        .bot {
          align-self: flex-start;
          background: white;
          border-bottom-left-radius: 5px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        /* INPUT AREA */
        .chat-input {
          display: flex;
          padding: 15px;
          gap: 10px;
          background: white;
          border-top: 1px solid #e2e8f0;
        }

        .chat-input input {
          flex: 1;
          border: 1px solid #e2e8f0;
          padding: 14px;
          border-radius: 12px;
          outline: none;
          font-size: 15px;
        }

        .chat-input input:focus {
          border-color: #2563eb;
        }

        .chat-input button {
          border: none;
          padding: 14px 24px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0A1F44, #2563eb);
          color: white;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .chat-input button:hover {
          transform: scale(1.05);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 500px) {
          .chat-container {
            width: 95%;
            right: 2.5%;
            height: 80vh;
          }
        }
      `}</style>

      {/* FLOAT BUTTON */}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chat-container">
          <div className="chat-header">
            PEPL Assistant
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
