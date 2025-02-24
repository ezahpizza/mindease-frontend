import { useState, useEffect, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import Header from '../components/Header';
import ChatMessage from '../feature-components/ChatMessage';

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
    <div className="h-screen flex flex-col bg-deepPurple/70 from-primary/5 via-deepPurple/5 to-secondary/5">
      <Header />

      {/* Main Chat Container */}
      <div className="flex-1 container mx-auto px-4 py-6 relative">
        {/* Chat Box */}
        <div className="bg-primary backdrop-blur-sm shadow-xl rounded-3xl h-[calc(100vh-8rem)] overflow-hidden relative border border-gray-200">
          {/* Messages Area */}
          <div className="h-full overflow-y-auto pb-24 pt-6 space-y-6 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8 mx-4">
              <div className="bg-deepPurple/50 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-lg mx-auto m-4">
                <h2 className="text-2xl font-bold text-black mb-4">👋 Hi there! I am MINDY - The chatbot from mindEase</h2>
                <p className="text-lightBg">How are you feeling today? I'm here to listen and help.</p>
                <br />
                <p className="text-xs text-black/60">Responses may be inaccurate or not reflect mindEase's views.</p>
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
            className="relative flex flex-col sm:flex-row bg-white p-3 rounded-2xl shadow-lg border border-gray-100"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's on your mind today?"
              className="w-full px-4 py-2 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 pr-12"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 rounded-full border-2 border-deepPurple border-t-transparent animate-spin"></div>
              ) : (
                <img 
                  width="24" 
                  height="24" 
                  src="https://img.icons8.com/fluency-systems-filled/96/sent.png" 
                  alt="sent"
                />
              )}
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

