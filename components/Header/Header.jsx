import styles from './Header.module.css'
import Link from 'next/link'

const HeaderLink = ({ href, as, children }) => {
  const { listItem } = styles

  return (
    <li className={listItem}>
      <Link href={href} as={as}>
        <a>{children}</a>
      </Link>
    </li>
  )
}

const Header = () => {
  const { header, list } = styles
  return (
    <header className={header}>
      <ul className={list}>
        <HeaderLink href='/index' as='/'>Home</HeaderLink>
        <HeaderLink href='/weather/index.js' as='/weather'>Météo</HeaderLink>
        <HeaderLink href='/weather/swiss/index.js' as='/weather/swiss'>Suisse</HeaderLink>
      </ul>
    </header>
  )
}

export default Header
