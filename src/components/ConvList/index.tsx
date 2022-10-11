import { FC } from 'react';
import { Conversation } from '../../types/conversation';
import ConvChip from '../ConvChip';
import NoConv from '../NoConv';
import styles from './styles.module.scss';

const ConvList: FC<{
  conversations: Conversation[];
}> = ({ conversations }) => {
  return (
    <div className={styles.list}>
      {(!conversations || !conversations.length) && <NoConv />}
      {conversations.length > 0 &&
        conversations.map((conv) => (
          <ConvChip key={conv.id} conversation={conv} />
        ))}
    </div>
  );
};

export default ConvList;
