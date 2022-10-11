import { GetServerSideProps } from 'next';
import { FC } from 'react';
import Container from '../../components/Container';
import ConvLayout from '../../components/ConvLayout';
import Main from '../../components/Main';
import { NextPageWithLayout } from '../_app';

const Conversation: NextPageWithLayout = () => {
  return <div>Une conservation parmi d’autres…</div>;
};

Conversation.getLayout = (page) => {
  return <ConvLayout {...page.props}>{page}</ConvLayout>;
};

export default Conversation;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { conversations: [] },
  };
};
