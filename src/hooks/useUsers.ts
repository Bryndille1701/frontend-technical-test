import { User } from '../types/user';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import fetchUsers from '../utils/fetchUsers';

const useUsers = (): UseQueryResult<User[] | undefined | Error, unknown> => {
  const res = useQuery(['users'], async () => {
    return await fetchUsers();
  });
  return res;
};

export default useUsers;
