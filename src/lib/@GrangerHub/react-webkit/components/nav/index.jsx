import style from './nav.module.scss';
import {Link} from '../utils';

const Nav = ({items}) => (
  <nav className={style.nav}>
    {
      items.map(
        ({text, ...props}) =>
          <Link key={text} {...props}>{text}</Link>
      )
    }
  </nav>
)

export default Nav;