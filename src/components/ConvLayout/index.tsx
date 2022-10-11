import { FC, ReactNode } from 'react';
import { Conversation } from '../../types/conversation';
import Container from '../Container';
import ConvList from '../ConvList';
import Main from '../Main';
import styles from './styles.module.scss';

const ConvLayout: FC<{
  children?: ReactNode;
  conversations: Conversation[];
}> = ({ children, conversations }) => {
  return (
    <Container>
      <Main>
        <div className={styles.ConvLayout}>
          <ConvList conversations={conversations} />
          <div>{children}</div>
        </div>
      </Main>
    </Container>
  );
};

export default ConvLayout;
