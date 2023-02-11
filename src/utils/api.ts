import { EventType } from "types";

export const getAllEvents = async () => {
    try {
        const response = await fetch('https://next-js-course-7212f-default-rtdb.firebaseio.com/events.json');
        const data = await response.json()
        const events: EventType[] = []
        for(const key in data) {
            events.push({id: key, ...data[key]})
        }
        return events
    } catch (error) {
        throw error
    }
}

export const getFeaturedEvents = async () => {
    try {
        const events = await getAllEvents();
        return events.filter(event => event.isFeatured)
    } catch (error) {
        throw error
    }
}

export const getEventById = async (id: string) => {
    const events = await getAllEvents();
    const event =  events.find(event => event.id === id)
    return event
}

export const getFilteredEvents = async (dateFilter: {year: number, month: number}) => {
    const { year, month } = dateFilter;
    const events = await getAllEvents()
  
    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
  
    return filteredEvents;
  }