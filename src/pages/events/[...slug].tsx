import Button from "components/button";
import ErrorAlert from "components/error-alert";
import EventList from "components/events/event-list";
import ResultsTitle from "components/events/results-title";
import { getFilteredEvents } from "utils/api";

const FilteredEvents = (props) => {

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

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context;

  const year = +slug[0];
  const month = +slug[1];

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
