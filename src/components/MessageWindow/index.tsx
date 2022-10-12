import { FC } from 'react';
import { Conversation } from '../../types/conversation';
import { Message, SendMessageFn } from '../../types/message';
import ConvChip from '../ConvChip';
import MessageBack from '../MessageBack';
import MessageForm from '../MessageForm';
import MessageList from '../MessageList';
import NoConv from '../NoConv';
import styles from './styles.module.scss';

const MessageWindow: FC<{
  messages: Message[];
  conversationId: Conversation['id'];
  sendMessage: SendMessageFn;
}> = ({ messages, sendMessage, conversationId }) => {
  return (
    <div className={styles.window}>
      <MessageBack />
      <MessageList messages={messages} />
      <MessageForm sendMessage={sendMessage} conversationId={conversationId} />
    </div>
  );
};

export default MessageWindow;
