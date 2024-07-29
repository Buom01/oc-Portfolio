import clsx from 'clsx';
import style from './utils.module.scss';

const Title = ({children, level = 2, className = null, ...props}) =>
{
  const TitleLevel = `h${level}`;

  return (<TitleLevel className={clsx(style.title, className)} {...props}>{children}</TitleLevel>)
}

const Link = ({children, href = children, Component = "a", className = null, action = false, ...props}) => (
  <Component
      href={href} target="_blank" rel="noopener"
      className={clsx(action ? style.action : style.link, className)}
      {...props}
    >
      {children}
  </Component>
);

const NoBreak = ({children}) => (
  <span className={style.nobreak}>{children}</span>
)

export { Title, Link, NoBreak };
