import { Conversation } from '../types/conversation';
import {
  useQuery,
  UseQueryResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import postMessage from '../utils/postMessage';
import { User } from '../types/user';
import fetchMessages from '../utils/fetchMessages';
import { Message, SendMessageFn, SendMessageFnArgs } from '../types/message';

const useMessages = (
  conversationId: Conversation['id'],
  initialMessages: Message[]
): [UseQueryResult<Message[] | undefined | Error, unknown>, SendMessageFn] => {
  const queryClient = useQueryClient();

  const messages = useQuery(
    ['messages', conversationId],
    async () => {
      const messagesRes = await fetchMessages(conversationId);
      return messagesRes ? messagesRes : undefined;
    },
    { initialData: initialMessages }
  );

  const mutation = useMutation(
    ({ messageBody, conversationId }) => {
      console.log('posting message');
      return postMessage({ messageBody, conversationId });
    },
    {
      // Used only to correctly set the type for the mutate variable
      onMutate: async ({
        messageBody,
        conversationId,
      }: SendMessageFnArgs) => {},
      onSuccess: () => {
        // Allows to invalidate and refetch messages on mutation success
        queryClient.invalidateQueries(['messages']);
      },
    }
  );

  const sendMessage = (messageBody) => {
    mutation.mutate(messageBody);
  };

  return [messages, sendMessage];
};

export default useMessages;
