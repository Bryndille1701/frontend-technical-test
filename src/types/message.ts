import { Conversation } from './conversation';

export interface Message {
  id: number;
  conversationId: number;
  authorId: number;
  timestamp: number;
  body: string;
}

export interface MessageBody {
  conversationId: number;
  authorId: number;
  timestamp: number;
  body: string;
}

export interface SendMessageFnArgs {
  messageBody: MessageBody;
  conversationId: Conversation['id'];
}

export type SendMessageFn = (args: SendMessageFnArgs) => void;
