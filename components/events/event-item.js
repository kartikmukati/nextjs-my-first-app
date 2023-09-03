
import Link from "next/link";
import classes from './event-item.module.css'
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";

const EventItem = (props) => {

    const {id, title, date, location, image} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-Us', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    const formattedAddress = location.replace(',','\n');
    
    return (
        <li key={id} className={classes.item}>
          <img src={'/'+image} alt={title}></img>
        <div className={classes.content}>
            <div className={classes.summary}>
              <h1>{title}</h1>
            </div>
            <div className={classes.date}>
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.adddress}>
              <address>{formattedAddress}</address>
            </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span><ArrowRightIcon/></span>
          </Button>
        </div>
      </li>
    );
}

export default EventItem;