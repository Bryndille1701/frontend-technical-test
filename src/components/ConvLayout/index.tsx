import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Conversation } from '../../types/conversation';
import Container from '../Container';
import ConvList from '../ConvList';
import Main from '../Main';
import styles from './styles.module.scss';

const ConvLayout: FC<{
  children?: ReactNode;
  conversations: Conversation[] | Error;
  isIndex: boolean;
}> = ({ children, conversations, isIndex }) => {
  const router = useRouter();
  const isInConv = router?.query?.id;
  return (
    <Container>
      <Main>
        <div className={styles.ConvLayout}>
          <ConvList isIndex={isIndex} conversations={conversations} />
          {children}
        </div>
      </Main>
    </Container>
  );
};

export default ConvLayout;
