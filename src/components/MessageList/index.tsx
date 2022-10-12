import { FC, useMemo } from 'react';
import { Conversation } from '../../types/conversation';
import { Message, SendMessageFn } from '../../types/message';
import { getLoggedUserId } from '../../utils/getLoggedUserId';
import ConvChip from '../ConvChip';
import NoConv from '../NoConv';
import styles from './styles.module.scss';

const MessageWindow: FC<{
  messages: Message[];
}> = ({ messages }) => {
  const currentUser = getLoggedUserId();
  // useMemo to order messages by timestamp efficiently
  const orderedMessages = useMemo(() => {
    return messages && messages.length
      ? messages.sort((a, b) => {
          return a.timestamp - b.timestamp;
        })
      : messages;
  }, [messages]);
  return (
    <div className={styles.messageList}>
      {orderedMessages && orderedMessages.length > 0 ? (
        orderedMessages.map((message) => {
          return (
            <div
              className={`${styles.message} ${
                currentUser === message.authorId ? styles.isSender : ''
              }`}
              key={message.id}
            >
              {message.body}
            </div>
          );
        })
      ) : (
        <div>Aucun message… Envoyez votre premier message !</div>
      )}
    </div>
  );
};

export default MessageWindow;
