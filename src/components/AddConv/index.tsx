import { FC, useEffect, useMemo, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Conversation, PostConversationFnArgs } from '../../types/conversation';
import { getLoggedUserId } from '../../utils/getLoggedUserId';
import ConvChip from '../ConvChip';
import NoConv from '../NoConv';
import styles from './styles.module.scss';
import postConversation from '../../utils/postConversation';

const AddConv: FC<{
  conversations: Conversation[] | Error;
}> = ({ conversations }) => {
  const { data: users } = useUsers();
  if (conversations instanceof Error) {
    return null;
  }
  if (users instanceof Error) {
    return null;
  }
  const availableUsers = useMemo(() => {
    return users && users.length
      ? users.filter((user) => {
          return !conversations.find((conv) => {
            return conv.senderId === user.id || conv.recipientId === user.id;
          });
        })
      : [];
  }, [users, conversations]);
  const queryClient = useQueryClient();
  const [isAdding, setIsAdding] = useState(false);
  const [selectValue, setSelectValue] = useState<number>();
  const currentUser = getLoggedUserId();

  // Mutation for conversation creation
  const mutation = useMutation(
    (addConversationArgs) => {
      return postConversation(addConversationArgs);
    },
    {
      onMutate: async (addConversationArgs: PostConversationFnArgs) => {},
      onSuccess: () => {
        // Allows to invalidate and refetch conversations on mutation success
        queryClient.invalidateQueries(['messages']);
      },
      onSettled: () => {
        setIsAdding(false);
        setSelectValue(undefined);
      },
    }
  );

  const onClickAddConv = () => {
    setIsAdding(!isAdding);
  };

  const onChangeSelect = (e) => {
    if (!isAdding) return false;
    const value = Number(e.target.value);
    setSelectValue(value);
  };

  useEffect(() => {
    if (selectValue && isAdding) {
      mutation.mutate({ userId: currentUser, recipientId: selectValue });
    }
  }, [selectValue, isAdding, currentUser, mutation]);
  return (
    <>
      {availableUsers && availableUsers.length > 0 && (
        <>
          <button
            className={styles.addButton}
            onClick={onClickAddConv}
            role="button"
          >
            {isAdding ? <>Annuler</> : <>Nouvelle conversation</>}
          </button>
          {isAdding && (
            <select value={selectValue} onChange={onChangeSelect} name="" id="">
              <option value="">Destinataire</option>
              {availableUsers.map((user) => {
                return (
                  <option value={user.id} key={user.id}>
                    {user.nickname}
                  </option>
                );
              })}
            </select>
          )}
        </>
      )}
    </>
  );
};

export default AddConv;
