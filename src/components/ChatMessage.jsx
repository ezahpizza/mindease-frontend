import { memo } from 'react';

const ChatMessage = memo(({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div
        className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-md text-sm sm:text-base ${
          isUser
            ? 'bg-primary text-white'
            : 'bg-white border border-gray-100 text-gray-900'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
});

export default ChatMessage;