import { useRouter } from "next/router";
import Button from "../../components/button";
import ErrorAlert from "../../components/error-alert";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../utils";

const FilteredEvents = () => {
  const { query } = useRouter();
  const filteredData = query.slug;

  // const events = getFilteredEvents()

  if (!filteredData) {
    return <p className="center">No Events Found...</p>;
  }

  const year = +filteredData[0];
  const month = +filteredData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
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

  const events = getFilteredEvents({ year, month });

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
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList items={events} />
    </>
  );
};

export default FilteredEvents;
