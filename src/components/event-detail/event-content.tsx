import { ReactNode } from 'react';
import styles from './event-content.module.scss';

const EventContent = ({children}: {children: ReactNode}) => {
  return (
    <section className={styles.content}>
      {children}
    </section>
  );
}

export default EventContent;