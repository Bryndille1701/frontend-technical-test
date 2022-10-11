import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

const Main: FC<{ children?: ReactNode }> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
