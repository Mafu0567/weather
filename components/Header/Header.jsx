import styles from './Header.module.css'
import Link from 'next/link'
import WeatherTeaser from '../WeatherTeaser/WeatherTeaser'

const { listItem } = styles
const HeaderLink = ({ href, as, children }) => {
  return (
    <li className={listItem}>
      <Link href={href} as={as || href}>
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
        <HeaderLink href='/weather' as='/weather'>Région</HeaderLink>
        <HeaderLink href='/weather/swiss' as='/weather/swiss'>Suisse</HeaderLink>
        <li className={listItem}><WeatherTeaser /></li>
      </ul>
    </header>
  )
}

export default Header
