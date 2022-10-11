import { FC, ReactNode } from 'react';
import { Conversation } from '../../types/conversation';
import Container from '../Container';
import Main from '../Main';
import styles from './styles.module.scss';

const ConvLayout: FC<{
  children?: ReactNode;
  conversations: Conversation[];
}> = ({ children, conversations }) => {
  return (
    <Container>
      <Main>
        <div>Liste des utilisateurs</div>
        <div>{children}</div>
      </Main>
    </Container>
  );
};

export default ConvLayout;
