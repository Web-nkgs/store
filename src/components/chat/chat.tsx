'use client';

import { useChat } from 'ai/react';

// TO-DO: posible solution for product recommendations: https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai#google-generative-ai-provider.
// This is not complete, since the model can hallucinate features of the products, so we have to improve how we manage the AI with different tools (ex. langChain)
export default function Chat(props: { agent: string }) {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [
            {
                id: '1',
                role: 'system',
                content: props.agent
            }
        ]
    });

    return (
        <div>
            {messages
                .filter((m) => m.role !== "system")
                .map(m => (
                    <div key={m.id}>
                        {m.role === 'user' ? 'User: ' : 'AI: '}
                        {m.content}
                    </div>
                ))}

            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}