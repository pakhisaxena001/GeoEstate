import React from 'react';
import { Bot, User, ArrowRight } from 'lucide-react';

const Chat = () => {
  const messages = [
    {
      type: 'bot',
      content: 'Hello! I can help you verify property documents, detect fraud, and manage land registry processes. How can I assist you today?'
    },
    {
      type: 'user',
      content: 'I need to verify a property document for Plot #123 in Downtown.'
    },
    {
      type: 'bot',
      content: 'I\'ll help you verify that property document. I\'ll check for authenticity, ownership history, and any potential red flags. Please share the document details.'
    },
    {
      type: 'user',
      content: 'The document number is LR-2024-0123.'
    },
    {
      type: 'bot',
      content: 'I\'ve analyzed the document LR-2024-0123. The property details match our records, and I\'ve verified the digital signatures. Would you like to see the full verification report?'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-4 bg-blue-600">
          <h3 className="text-white text-lg font-semibold">Chat with LandAI Assistant</h3>
        </div>
        
        <div className="p-6 space-y-6 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start space-x-2 ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' ? 'bg-blue-100' : 'bg-green-100'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-5 h-5 text-blue-600" />
                ) : (
                  <Bot className="w-5 h-5 text-green-600" />
                )}
              </div>
              
              <div className={`flex-1 max-w-[80%] ${
                message.type === 'user' ? 'ml-2' : 'mr-2'
              }`}>
                <div className={`p-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-white shadow-sm rounded-tl-none'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 bg-gray-50 border-t">
          <a
            href="/chatbot"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out shadow-sm"
          >
            Go to Chat
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chat;