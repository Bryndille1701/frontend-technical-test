import { Conversation } from '../types/conversation';
import { Message, SendMessageFnArgs } from '../types/message';
import type { User } from '../types/user';
import fetchData from './fetchData';
import postData from './postData';

// Fetch conversations from the database
const postMessage = ({
  messageBody,
  conversationId,
}: SendMessageFnArgs): Promise<Message> => {
  console.log('before postData');
  const res = postData<Message>(`/messages/${conversationId}`, messageBody);
  return res;
};

export default postMessage;
