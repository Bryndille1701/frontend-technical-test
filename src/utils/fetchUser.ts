import { Conversation } from '../types/conversation';
import type { User } from '../types/user';
import fetchData from './fetchData';

// Fetch conversations from the database
const fetchUser = (userId: User['id']): Promise<User[] | Error> => {
  const res = fetchData<User[]>(`/user/${userId}`);
  return res;
};

export default fetchUser;
