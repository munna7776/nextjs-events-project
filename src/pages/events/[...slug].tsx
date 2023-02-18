import Button from "components/button";
import ErrorAlert from "components/error-alert";
import EventList from "components/events/event-list";
import { EventType } from "components/events/event.types";
import ResultsTitle from "components/events/results-title";
import { GetServerSideProps } from "next";
import { getFilteredEvents } from "utils/api";

interface FilteredEventProps {
  hasError: boolean,
  events: EventType[],
  date: {
    year: number,
    month: number
  }
}

const FilteredEvents = (props: FilteredEventProps) => {

  const { hasError, events, date } = props;

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <div>No event found for chosen filter</div>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <div>No Events Found...</div>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={new Date(date.year, date.month - 1)} />
      <EventList items={events} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const slugs = params?.slug as string[]

  const year = +slugs[0];
  const month = +slugs[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  const events = await getFilteredEvents({ year, month });
  return {
    props: {
      events,
      date: {
        year,
        month,
      },
    },
  };
}

export default FilteredEvents;
