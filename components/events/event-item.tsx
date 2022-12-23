import Link from "next/link"
import { EventType } from "./event.types"
import styles from "./event.module.scss"
import Button from "../button"
import { DateIcon, LocationIcon, RightArrowIcon } from "../icons"

const EventItem = ({item}: {item: EventType}) => {

    const {title, description, date, location, image, id} = item

    const readableDate = new Date(date).toLocaleDateString("en-US",{
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    const formattedAddress = location.replace(", ", "\n")
    const exploreLink = `/events/${id}`
    return (
        <li className={styles.item}>
            <img src={"/" + image} alt="image" />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{readableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <LocationIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink} >
                        <span>Explore Event</span>
                        <span className={styles.icon} ><RightArrowIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem