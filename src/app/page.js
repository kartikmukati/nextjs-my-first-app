import Image from 'next/image'
import styles from './page.module.css'
import Link  from 'next/link';

export default function Home() {
  return (
    <div>
   <h1>The Root Component</h1>
   <ul>
    <li>
      {/* <a href='/users'> Users </a> */}
      <Link href={{
        pathname: '/users'
      }}> Users </Link>
    </li>
    <li>
      {/* <a href='/posts'> Posts </a> */}
      <Link href='/posts'> Posts </Link>
    </li>
   </ul>
   </div>
  )
}
