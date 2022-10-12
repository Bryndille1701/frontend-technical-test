import { FC, useState } from 'react';
import { Conversation } from '../../types/conversation';
import { SendMessageFn } from '../../types/message';
import { getLoggedUserId } from '../../utils/getLoggedUserId';
import ConvChip from '../ConvChip';
import NoConv from '../NoConv';
import styles from './styles.module.scss';

const MessageForm: FC<{
  sendMessage: SendMessageFn;
  conversationId: Conversation['id'];
}> = ({ sendMessage, conversationId }) => {
  const [text, setText] = useState('');
  const currentUser = getLoggedUserId();

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      return false;
    }
    sendMessage({
      messageBody: {
        body: text,
        conversationId,
        authorId: currentUser,
        timestamp: Date.now(),
      },
      conversationId,
    });
    setText('');
  };
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={onChangeText}
      ></textarea>
      <input
        disabled={!text}
        className={styles.submit}
        type="submit"
        value={'Envoyer'}
      />
    </form>
  );
};

export default MessageForm;
