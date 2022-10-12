import { Conversation } from '../types/conversation';
import type { User } from '../types/user';
import fetchData from './fetchData';

// Fetch conversations from the database
const fetchConversations = (
  userId: User['id']
): Promise<Conversation[] | Error> => {
  const res = fetchData<Conversation[]>(`/conversations/${userId}`);
  return res;
};

export default fetchConversations;
