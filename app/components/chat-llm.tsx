'use client';
 
import { useChat } from 'ai/react';
 
export function ChatLLM() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch relative">
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
 
      <form className='flex items-center gap-4' onSubmit={handleSubmit}>
        <input
          className="w-full max-w-md border border-gray-300 rounded shadow-xl p-2"
          placeholder='Ask my AI'
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
