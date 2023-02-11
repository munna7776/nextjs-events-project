import { useRouter } from "next/router"
import EventList from "components/events/event-list"
import {getAllEvents} from "utils/api"
import EventsSearch from "components/event-search"

const Events = (props) => {
    const { events } = props
    const {push} = useRouter()

    const onSearch = (year: string, month: string) => {
        const path = `/events/${year}/${month}`

        push(path)
    }
    return (
        <>
            <EventsSearch onSearch={onSearch} />
            <EventList items={events} />
        </>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents()
    return {
        props: { events },
        revalidate: 60
    }
}

export default Events