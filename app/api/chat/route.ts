import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Set the runtime to edge for best performance
export const runtime = 'edge';

const openai = new OpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: 'ollama', // required but unused
})
 
export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'llama3',
    stream: true,
    messages,
  })
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
