import EventList from "../components/events/event-list"
import { getFeaturedEvents } from "../utils"

const Home = () => {

  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default Home
