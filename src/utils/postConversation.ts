import {
  Conversation,
  PostConversationFnArgs,
  PostConversationReturn,
} from '../types/conversation';
import { Message, SendMessageFnArgs } from '../types/message';
import type { User } from '../types/user';
import fetchData from './fetchData';
import postData from './postData';

// Post new conversation to the database
const postConversation = ({
  userId,
  recipientId,
}: PostConversationFnArgs): Promise<PostConversationReturn | Error> => {
  const res = postData<PostConversationReturn>(`/conversations/${userId}`, {
    recipientId,
  });
  return res;
};

export default postConversation;
