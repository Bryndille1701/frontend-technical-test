import { Conversation } from '../types/conversation';
import type { User } from '../types/user';
import fetchData from './fetchData';

// Fetch users from the database
const fetchUsers = (): Promise<User[] | Error> => {
  const res = fetchData<User[]>(`/users`);
  return res;
};

export default fetchUsers;
