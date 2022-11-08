import Link from 'next/link'
import styles from './Navigation.module.css'

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='about'>About</Link>
        </li>
        <li>
          <Link href='products'>Products</Link>
        </li>
      </ul>
    </nav>
  )
}
