import clsx from 'clsx';
import style from './utils.module.scss';

const Title = ({children, level = 2, className = null, ...props}) =>
{
  const TitleLevel = `h${level}`;

  return (<TitleLevel className={clsx(style.title, className)} {...props}>{children}</TitleLevel>)
}

const Link = ({children, href = children, inner = false, action = inner, Component = "a", className = null, ...props}) => (
  <Component
      href={href}
      target={!inner ? "_blank" : undefined} rel={!inner ? "noopener" : undefined}
      className={clsx(action ? style.action : style.link, className)}
      {...props}
    >
      {children}
  </Component>
);

const Container = ({children, className = null, ...props}) =>
(
  <div className={clsx(style.container, className)} {...props}>
    {children}
  </div>
)

const NoBreak = ({children}) => (
  <span className={style.nobreak}>{children}</span>
)

export { Title, Link, Container, NoBreak };
