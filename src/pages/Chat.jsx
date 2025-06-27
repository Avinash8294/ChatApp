import React from "react";

const messages = [
  { id: 1, sender: "self", text: "Hey, how are you?" },
  { id: 2, sender: "other", text: "I'm good! You?" },
  { id: 3, sender: "self", text: "Same here. Working on our project." },
  { id: 4, sender: "other", text: "Cool, let's finish it soon!" },
];

const Chat = () => {
  return (
    <div className="flex flex-col h-[95vh] rounded-xl overflow-hidden w-[40vw] bg-gray-100">
      {/* Header */}
      <div className="flex items-center p-4 bg-white shadow">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <div className="font-semibold">ChatBuddy</div>
          <div className="text-sm text-green-500 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            Online
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "self" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
                msg.sender === "self"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-300 text-gray-900 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white relative shadow">
        <textarea
          rows={1}
          placeholder="Type a message..."
          className="w-full resize-none overflow-hidden border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
        <div className="absolute cursor-pointer right-6 top-5 h-8 w-12 rounded-3xl bg-black grid place-items-center ">
          <div className="text-white text-sm mb-1">send</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
