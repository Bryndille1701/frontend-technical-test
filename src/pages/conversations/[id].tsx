import { GetServerSideProps } from 'next';
import { FC } from 'react';
import Container from '../../components/Container';
import ConvLayout from '../../components/ConvLayout';
import Main from '../../components/Main';
import useMessages from '../../hooks/useMessages';
import { Message } from '../../types/message';
import { Conversation as ConversationType } from '../../types/conversation';
import { User } from '../../types/user';
import fetchConversations from '../../utils/fetchConversations';
import fetchMessages from '../../utils/fetchMessages';
import { getLoggedUserId } from '../../utils/getLoggedUserId';
import { NextPageWithLayout } from '../_app';
import MessageWindow from '../../components/MessageWindow';
import MessageWindowError from '../../components/MessageWindowError';

const Conversation: NextPageWithLayout<{
  messages: Message[] | Error;
  conversationId: ConversationType['id'];
  userId: User['id'];
}> = ({ messages: initialMessages, conversationId, userId }) => {
  if (initialMessages instanceof Error) {
    return <MessageWindowError error={initialMessages} />;
  }
  const [{ data }, sendMessage] = useMessages(conversationId, initialMessages);
  if (data instanceof Error) {
    return <MessageWindowError error={data} />;
  }
  return (
    <MessageWindow
      conversationId={conversationId}
      messages={data}
      sendMessage={sendMessage}
    />
  );
};

Conversation.getLayout = (page) => {
  return <ConvLayout {...page.props}>{page}</ConvLayout>;
};

export default Conversation;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const conversationId = Number(query?.id);
  let messages = await fetchMessages(conversationId);
  const userId = getLoggedUserId();
  let conversations = await fetchConversations(userId);
  conversations = JSON.parse(JSON.stringify(conversations));
  messages = JSON.parse(JSON.stringify(messages));
  return {
    props: { conversations, messages, conversationId, userId },
  };
};
