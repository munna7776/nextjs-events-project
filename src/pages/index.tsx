import EventList from "components/events/event-list"
import { CLIENT_RENEG_LIMIT } from "tls"
import { getFeaturedEvents } from "utils/api"

const Home = (props) => {

  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: { featuredEvents },
    revalidate: 1800
  }
}

export default Home
