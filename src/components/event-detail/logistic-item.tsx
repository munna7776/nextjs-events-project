import { ReactNode } from 'react';
import styles from './logistic-item.module.scss';

type LogisticsItemProps = {
    icon: () => JSX.Element,
    children: ReactNode
}

const LogisticsItem = (props: LogisticsItemProps) => {
  const { icon: Icon } = props;

  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;