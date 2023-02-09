import { useRouter } from "next/router"
import EventList from "components/events/event-list"
import {getAllEvents} from "utils"
import EventsSearch from "components/event-search"

const Events = () => {
    const events = getAllEvents()
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

export default Events