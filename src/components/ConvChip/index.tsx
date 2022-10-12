import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import { Conversation } from '../../types/conversation';
import { getLoggedUserId } from '../../utils/getLoggedUserId';
import useUser from '../../hooks/useUser';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const UserLoading = () => (
  <ContentLoader
    uniqueKey="userLoading"
    style={{ width: '120px', height: '12px' }}
    viewBox="0 0 120 12"
  >
    <rect x="0" y="0" rx="3" ry="3" width="120" height="12" />
  </ContentLoader>
);

const ConvChip: FC<{
  conversation: Conversation;
}> = ({ conversation }) => {
  const userId = getLoggedUserId();
  const userToFetch =
    conversation.recipientId !== userId
      ? conversation.recipientId
      : conversation.senderId;
  const { data: user, isLoading, error } = useUser(userToFetch);
  if (user instanceof Error) {
    return null;
  }
  const router = useRouter();
  return (
    <Link
      href={{ pathname: '/conversations/[id]', query: { id: conversation.id } }}
    >
      <a>
        <div
          className={`${styles.chip} ${
            Number(router?.query?.id) == conversation.id
              ? styles.activeChip
              : false
          }`}
        >
          <div className={styles.userPicture} />
          {user && user.nickname}
          {isLoading && <UserLoading />}
        </div>
      </a>
    </Link>
  );
};

export default ConvChip;
