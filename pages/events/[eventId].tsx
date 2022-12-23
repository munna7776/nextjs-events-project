import { useRouter } from "next/router";
import ErrorAlert from "../../components/error-alert";
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from "../../components/event-detail";
import { getEventById } from "../../utils";

const EventDetail = () => {
  const {
    query: { eventId },
  } = useRouter();
  const event = getEventById(eventId as string);

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

export default EventDetail;
