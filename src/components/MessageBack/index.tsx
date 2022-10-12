import Link from 'next/link';
import { FC } from 'react';
import styles from './styles.module.scss';

const MessageBack: FC = () => {
  return (
    <Link href="/conversations">
      <a className={styles.messageBack}>Retour aux conversations</a>
    </Link>
  );
};

export default MessageBack;
