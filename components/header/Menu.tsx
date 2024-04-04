import Link from 'next/link'

const Menu = () => {
  return (
    <ul>
      <li>
        <Link className="btn btn-ghost rounded-btn" href="/cart">
          Cart
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost rounded-btn" href="/signin">
          Sign in
        </Link>
      </li>
    </ul>
  )
}
export default Menu
