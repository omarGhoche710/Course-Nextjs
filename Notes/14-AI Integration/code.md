```tsx
"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const ideas = [
    "What is an API and how does it work?",
    "What are the benefits of using APIs in software developments?",
    "How do APIs enable integration between different application?",
  ];

  const getMessageText = (parts: { type: string, text?: string }[]) => {
    const textPart = parts.find(part => part.type === "text");

    if (textPart && textPart.text) {
      return textPart.text;
    }

    return parts.length > 0 ? "[محتوى غير نصي]" : "";
  }

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: 'api/chat',
    }),
  });

  const submit = (text: string) => {
    if (!text.trim()) return;
    sendMessage({ parts: [{ type: 'text', text }] });
    setInput("");
  }

  return (
    <div className="space-y-6 bg-black p-4">
      <h1 className="text-3xl text-white">Hello there, how can i help you?</h1>

      <div className="flex flex-wrap gap-3">
        {ideas.map((idea, index) => (
          <button key={index} className="py-2 px-4 border text-white border-white rounded-2xl cursor-pointer bg-neutral-600" onClick={() => submit(idea)}>
            <span className="text-sm">{idea}</span>
          </button>
        ))}
      </div>

      <div className="p-4 border border-white rounded-lg">
        {messages.length !== 0 ? messages.map((message) => (
          <p className="text-white" key={message.id}>
            <span className="font-bold text-neutral-400">
              {message.role === "user" ? "Me: " : "AI: "}
            </span>
            {getMessageText(message.parts)}
          </p>
        ))
          : (
            <div className="text-neutral-400">Ready when you want...</div>
          )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="flex gap-2"
      >
        <textarea value={input} cols={50} className="caret-white text-white py-2 px-2 border border-neutral-600 rounded-lg" placeholder="Ask Claude" onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="text-white cursor-pointer bg-blue-600 px-4 py-2 self-start rounded-2xl">Send</button>
      </form>

      <p className="text-white bg-blue-500 p-2 text-xl font-semibold">Status: {status}</p>
    </div>
  );
};

export default Chatbot;
```

```tsx
import { anthropic } from "@ai-sdk/anthropic";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export const  maxDuration = 30;

export async function POST(request: Request) {
  const { messages }: { messages: UIMessage[] } = await request.json();

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: 'You are helpful assistant for beginner developers.',
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
s```