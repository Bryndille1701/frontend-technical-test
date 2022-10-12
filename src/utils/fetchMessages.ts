import { Conversation } from '../types/conversation';
import { Message } from '../types/message';
import type { User } from '../types/user';
import fetchData from './fetchData';

// Fetch conversations from the database
const fetchMessages = (
  conversationId: Conversation['id']
): Promise<Message[] | Error> => {
  const res = fetchData<Message[]>(`/messages/${conversationId}`);
  return res;
};

export default fetchMessages;
