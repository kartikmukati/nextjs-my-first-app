'use client'

import { useParams } from 'next/navigation'
import { getEventById } from '../../../../dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../../../components/event-detail/event-summary';
import EventLogistics from '../../../../components/event-detail/event-logistics';
import EventContent from '../../../../components/event-detail/event-content';

const EventDetail = () => {

    const router = useParams();
    const eventId = router.eventId;
    const event = getEventById(eventId);

    return (
        <Fragment>
            <EventSummary title={event.title}></EventSummary>
            <EventLogistics date={event.date} address={event.location} image={event.image} altImage={event.title}></EventLogistics>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetail