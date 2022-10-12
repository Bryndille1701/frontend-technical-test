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

const Conversation: NextPageWithLayout<{
  messages: Message[];
  conversationId: ConversationType['id'];
  userId: User['id'];
}> = ({ messages: initialMessages, conversationId, userId }) => {
  const [{ data }, sendMessages] = useMessages(conversationId, initialMessages);
  console.log(data);
  return <div>Une conservation parmi d’autres…</div>;
};

Conversation.getLayout = (page) => {
  return <ConvLayout {...page.props}>{page}</ConvLayout>;
};

export default Conversation;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const conversationId = Number(query?.id);
  const messages = await fetchMessages(conversationId);
  const userId = getLoggedUserId();
  const conversations = await fetchConversations(userId);
  return {
    props: { conversations, messages, conversationId, userId },
  };
};
