'use client';
import { useChat } from 'ai/react';
import styles from './Chat.module.sass';

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
    ],
  });

  return (
    <main className={styles.Chat} >
      <h1 className={styles.Chat__title}>Ask anything, buy everything</h1>
      <form onSubmit={handleSubmit} className={styles.Chat__form}>
        <input
          className={styles.Chat__input}
          value={input}
          onChange={handleInputChange}
          placeholder="What would you like to buy?"
        />
        <button
          className={styles.Chat__button}
        >
          Send
        </button>
      </form>
      <section className={styles.Chat__messages}>
        {messages
          .filter(m => m.role !== 'system')
          .map(m => {
            return (
              <span key={m.id} className={styles.Chat__message}>
                <div className={styles.Chat__message__icon}>
                  {m.role === "assistant" ? "🤖" : "😊"}
                </div>
                <div>
                  {m.content}
                </div>
              </span>
            )
          }

          )}
      </section>
    </main>
  );
}