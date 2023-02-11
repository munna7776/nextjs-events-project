import ErrorAlert from "components/error-alert";
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from "components/event-detail";
import { getAllEvents, getEventById } from "utils/api";

const EventDetail = (props) => {
  
  const event = props.selectedEvent

  if (!event) {
    return (
      <ErrorAlert>
        <div>No Event Found...</div>
      </ErrorAlert>
    );
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context){
  const eventId = context.params.eventId;
  const selectedEvent = await getEventById(eventId)
  return {
    props: {
      selectedEvent
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const events = await getAllEvents()
  const paths = events.map(event => ({params: {eventId: event.id}}))
  return {
    paths,
    fallback: false
  }
}

export default EventDetail;
