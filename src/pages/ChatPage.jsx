import { useState, useEffect, useRef } from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';

const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user';
  return (
    <div className={`flex items-start gap-3 px-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="flex-shrink-0">
            <img 
              src={isUser ? "/src/public/poe-icon.jpg" : "/src/public/Chatbot Logo.png"} 
              alt={isUser ? "User" : "Bot"} 
              className="w-14 h-14 rounded-full"
            />
          </div>
    
        <div 
          className={`max-w-[70%] p-3 rounded-2xl ${
            isUser 
              ? 'bg-primary text-black rounded-tr-none' 
              : 'bg-deepPurple text-lightBg rounded-tl-none'
          }`}
        >
          {message.content}
        </div>
    </div>
  );
};

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { user } = useUser();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (user) {
      fetchChatHistory();
    }
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchChatHistory = async () => {
    try {
      const response = await fetch(`http://localhost:8000/chat/history/${user.id}`);
      if (response.ok) {
        const history = await response.json();
        setMessages(history.map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        })));
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !user) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: input,
          user_id: user.id
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      const botMessage = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-secondary from-primary/5 via-deepPurple/5 to-secondary/5">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                <img src="/src/public/Text Logo.png" alt="MindEase Logo" className="h-14" />
                </div>
                <div className="flex items-center gap-4">
                <button 
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-2 rounded-lg bg-pink-200 hover:bg-pink-300 transition-colors text-black font-medium"
                >
                    Home
                </button>
                <UserButton afterSignOutUrl="/" />
                </div>
            </div>
            </div>
        </header>

      {/* Main Chat Container */}
      <div className="flex-1 container mx-auto px-4 py-6 relative">
        {/* Chat Box */}
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl h-[calc(100vh-8rem)] overflow-hidden relative border border-gray-200">
          {/* Messages Area */}
          <div className="h-full overflow-y-auto pb-24 pt-6 space-y-6 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <div className="bg-deepPurple/50 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-lg mx-auto m-4">
                  <h2 className="text-2xl font-bold text-secondary mb-4">👋 Hi there! I am MINDY - The chatbot from mindEase</h2>
                  <p className="text-lightBg">How are you feeling today? I'm here to listen and help.</p>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Floating Input Box */}
          <div className="absolute bottom-6 left-6 right-6">
            <form 
              onSubmit={handleSubmit} 
              className="flex gap-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What's on your mind today?"
                className="flex-1 px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary hover:bg-deepPurple text-deepPurple px-6 py-3 rounded-xl transition-colors duration-200 disabled:opacity-50 font-medium shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

