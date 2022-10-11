import { GetServerSideProps } from 'next';
import { FC } from 'react';
import type { NextPageWithLayout } from '../_app';
import Container from '../../components/Container';
import ConvLayout from '../../components/ConvLayout';
import Main from '../../components/Main';
import { getLoggedUserId } from '../../utils/getLoggedUserId';
import fetchConversations from '../../utils/fetchConversations';

const Conversations: NextPageWithLayout = () => {
  return (
    // TODO : Option to create a conversation from there
    <div>Index conversations</div>
  );
};

Conversations.getLayout = (page) => {
  return <ConvLayout {...page.props}>{page}</ConvLayout>;
};

export default Conversations;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = getLoggedUserId();
  const conversations = await fetchConversations(userId);
  return {
    props: { conversations },
  };
};
