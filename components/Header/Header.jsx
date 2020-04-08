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
  const postPageLine = '/post/[id]'
  return (
    <header className={header}>
      <ul className={list}>
        <HeaderLink href='/index' as='/'>Home</HeaderLink>
        <HeaderLink as='/post/1' href={postPageLine}>post 1</HeaderLink>
        <HeaderLink as='/post/2' href={postPageLine}>post 2</HeaderLink>
        <HeaderLink as='/post/3' href={postPageLine}>404</HeaderLink>
      </ul>
    </header>
  )
}

export default Header
