import React from 'react'
import styles from "./EventList.module.css"
const EventList = ({events,handleClick}) => {
  return (
    events.map((event, index) => {
        return (
          <div className={styles.card} key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <p>{event.location} - {event.date}</p>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
            >
              delete event
            </button>
          </div>
        );
      })
  )
}

export default EventList