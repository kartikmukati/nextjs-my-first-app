'use client'

import { useRouter } from 'next/navigation';

export default function Posts() {

    const router = useRouter();

    const addToCartHandler = () => {
        
            router.push('/posts/123')
    }

    return (
        <div>
            <h1> The Posts Page </h1>
            <button onClick={addToCartHandler}> Add to Cart </button>
        </div>
    )
}