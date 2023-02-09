import EventItem from "./event-item"
import { EventType } from "./event.types"
import styles from "./event.module.scss"

const EventList = ({items}: { items: EventType[]}) => {
    return (
        <ul className={styles.list}>
            {
                items.map((item) => <EventItem key={item.id} item={item} /> )
            }
        </ul>
    )
}

export default EventList