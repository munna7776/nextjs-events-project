import ErrorAlert from "components/error-alert";
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from "components/event-detail";
import { EventType } from "components/events/event.types";
import { Comments } from "components/news-letter";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllEvents, getEventById } from "utils/api";

const EventDetail = (props: { selectedEvent: EventType }) => {
  
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
      <Comments />
    </>
  );
};


export const getStaticProps: GetStaticProps = async(context) => {
  const eventId = context.params?.eventId as string;
  const selectedEvent = await getEventById(eventId)
  return {
    props: {
      selectedEvent
    },
    revalidate: 30
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getAllEvents()
  const paths = events.map(event => ({params: {eventId: event.id}}))
  return {
    paths,
    fallback: false
  }
}

export default EventDetail;
