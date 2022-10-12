import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Conversation } from '../../types/conversation';
import Container from '../Container';
import ConvList from '../ConvList';
import Main from '../Main';
import styles from './styles.module.scss';

const ConvLayout: FC<{
  children?: ReactNode;
  conversations: Conversation[];
}> = ({ children, conversations }) => {
  const matches = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  const isInConv = router?.query?.id;
  return (
    <Container>
      <Main>
        <div className={styles.ConvLayout}>
          {(!isInConv || !matches) && (
            <ConvList conversations={conversations} />
          )}
          {(!!isInConv || !matches) && (
            <div className={styles.ConvWrapper}>{children}</div>
          )}
        </div>
      </Main>
    </Container>
  );
};

export default ConvLayout;
