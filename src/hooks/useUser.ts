import { User } from '../types/user';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import fetchUser from '../utils/fetchUser';

const useUser = (
  userId: User['id']
): UseQueryResult<User | undefined | Error, unknown> => {
  const res = useQuery(['user', userId], async () => {
    const userRes = await fetchUser(userId);
    return userRes ? userRes[0] : undefined;
  });
  return res;
};

export default useUser;
