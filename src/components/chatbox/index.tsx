import { Chat, Send } from 'assets/icons';
import React, { useState } from 'react';
import "./chatbox.css"

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    console.log('Sending message:', message);
    setMessage('');
  };

  const chatIconStyle = {
    fill: 'white'
  };

  return (
    <div>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full"
        onClick={toggleChatbox}
      >
        <Chat style={chatIconStyle}></Chat>
      </button>
      {isOpen && (
        <div className="fixed bottom-4 right-4 bg-white w-64 shadow-md rounded-lg">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Chatbox</h2>
            <span
              className="close-icon"
              onClick={toggleChatbox}
            >
              &#x2715;
            </span>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="message">
              <p className="text-blue-500">Support: Hi! Please feel free to ask any questions.</p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-1">
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 w-3/4"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-3 py-2 rounded-md"
                onClick={handleSendMessage}
              >
                <Send style={chatIconStyle}></Send>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
