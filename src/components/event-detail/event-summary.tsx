import styles from './event-summary.module.scss';

const EventSummary = ({title}: {title: string}) => {

  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;