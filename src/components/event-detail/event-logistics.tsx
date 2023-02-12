import Image from "next/image";
import { CLIENT_RENEG_LIMIT } from "tls";
import { DateIcon, LocationIcon } from "../icons";
import styles from "./event-logistics.module.scss";
import LogisticsItem from "./logistic-item";

type EventLogisticProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

const EventLogistics = (props: EventLogisticProps) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt={imageAlt} width={300} height={300} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={LocationIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
