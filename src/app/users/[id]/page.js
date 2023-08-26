'use client'

import { useParams, usePathname } from 'next/navigation';

export default function UsersProfile() {

    const params = useParams();
    const pathName = usePathname();

    return (
        <h1> The Users Profile </h1>
    )
}