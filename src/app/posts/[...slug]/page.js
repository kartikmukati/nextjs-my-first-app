'use client'

import { useParams, usePathname } from 'next/navigation';

export default function PostDetails() {

    const params = useParams();
    const pathName = usePathname();

    console.log(params);
    console.log(pathName)

    return (
        <h1> The Post Detail Page</h1>
    )
}