'use client'

import { useParams } from 'next/navigation'
import { getFilteredEvents } from '../../../../dummy-data';
import EventList from '../../../../components/events/event-list';


const FilteredEvent = () => {

    const router = useParams();
    
    const year = +router.slug[0];
    const month = +router.slug[1];

    const event = getFilteredEvents({
        year: year,
        month: month
    })

    return (
        <EventList items={event}/>
    )
}

export default FilteredEvent