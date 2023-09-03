import Link from "next/link";
import EventItem from "./event-item";

import classes from './event-list.module.css'

const EventList = (props) => {

    const filteredData = props.items

    return (
        <ul className={classes.list}>
      {filteredData.map(event => 
        <EventItem key={event.id} id={event.id} title={event.title} date={event.date} location={event.location} image={event.image}/>
        )}
     
    </ul>
    )
}

export default EventList;