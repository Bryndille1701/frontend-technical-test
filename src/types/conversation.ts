import { User } from './user';

export interface Conversation {
  id: number;
  recipientId: number;
  recipientNickname: string;
  senderId: number;
  senderNickname: string;
}

export interface PostConversationFnArgs {
  userId: User['id'];
  recipientId: User['id'];
}

export interface PostConversationReturn {
  id: Conversation['id'];
}
