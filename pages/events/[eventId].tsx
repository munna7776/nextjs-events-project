import { useRouter } from "next/router"

const EventDetail = () => {

    const { query: { eventId } } = useRouter()
    return (
        <div>
            <h1>Event Detail: { eventId }</h1>
        </div>
    )
}

export default EventDetail