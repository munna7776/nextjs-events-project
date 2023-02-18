import EventList from "components/events/event-list"
import { EventType } from "components/events/event.types"
import { GetStaticProps } from "next"
import { getFeaturedEvents } from "utils/api"

interface HomeProps{
  featuredEvents: EventType[]
}

const Home = (props: HomeProps) => {

  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async() => {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: { featuredEvents },
    revalidate: 1800
  }
}

export default Home
