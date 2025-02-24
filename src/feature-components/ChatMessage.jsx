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
              ? 'bg-lightBg text-black rounded-tr-none' 
              : 'bg-deepPurple text-lightBg rounded-tl-none'
          }`}
        >
          {message.content}
        </div>
    </div>
  );
};
export default ChatMessage;