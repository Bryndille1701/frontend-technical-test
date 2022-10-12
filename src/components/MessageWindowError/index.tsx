import { FC } from 'react';
import { Conversation } from '../../types/conversation';
import { Message, SendMessageFn } from '../../types/message';
import ConvChip from '../ConvChip';
import MessageForm from '../MessageForm';
import MessageList from '../MessageList';
import NoConv from '../NoConv';
import styles from './styles.module.scss';

const MessageWindow: FC<{
  error: Error;
}> = ({ error }) => {
  console.error(error);
  return <div className={styles.window}>{error.message}</div>;
};

export default MessageWindow;
