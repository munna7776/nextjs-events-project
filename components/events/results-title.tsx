import Button from "../button"
import styles from "./results-title.module.scss"

const ResultsTitle = ({date}: {date: Date}) => {

    const readableDate = new Date(date).toLocaleDateString("en-US",{
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return (
        <section className={styles.title}>
            <h1>Events in {readableDate}</h1>
            <Button link="/events">Show All Events</Button>
        </section>
    )
}

export default ResultsTitle