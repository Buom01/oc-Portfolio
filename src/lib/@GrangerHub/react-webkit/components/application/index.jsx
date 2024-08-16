import style from './application.module.scss';
import clsx from 'clsx';


const Application = (
  {
    Component = "a",
    color = '#fff', className = undefined,
    path = ``,
    vector = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${path}" /></svg>`,
    ...props
  }
) => (
  <div className={clsx(style.layer, style.bright)}>
  <div style={{filter: `drop-shadow(0 0 0.75rem ${color})`}} className={style.layer}>
    <Component
        {...props}
        className={clsx(
          style.base,
          className
        )}
        style={{
          backgroundColor: color,
          maskImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0,0 H24 V24 H0 Z" fill-rule="evenodd"/></svg>'), url('${vector}')`
        }}
        data-augmented-ui="tl-round tr-clip br-round bl-clip exe"
      />
  </div>
  </div>
);

export const Applications = ({children}) => (
  <div className={style.containter}>
    {children}
  </div>
);

export default Application;
