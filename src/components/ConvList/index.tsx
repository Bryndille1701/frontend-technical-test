import { FC } from 'react';
import { Conversation } from '../../types/conversation';
import AddConv from '../AddConv';
import ConvChip from '../ConvChip';
import NoConv from '../NoConv';
import styles from './styles.module.scss';

const ConvList: FC<{
  conversations: Conversation[] | Error;
}> = ({ conversations }) => {
  if (conversations instanceof Error) {
    return <div className={styles.list}>{conversations.message}</div>;
  }
  return (
    <div className={styles.list}>
      {conversations && conversations.length > 0 ? (
        conversations.map((conv) => (
          <ConvChip key={conv.id} conversation={conv} />
        ))
      ) : (
        <NoConv />
      )}
      <AddConv conversations={conversations} />
    </div>
  );
};

export default ConvList;
