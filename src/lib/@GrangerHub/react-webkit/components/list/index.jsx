import { Children } from 'react';
import clsx from 'clsx';
import style from './list.module.scss';
import { Title } from '../utils';

const Base = ({children, listClass, itemClass}) => (
  <ul className={clsx(style.list, listClass)}>
    {
      Children.map(children, child => (
        <li className={clsx(style.item, itemClass)}>
          {child}
        </li>
      ))
    }
  </ul>
);

export const GenericList = (props) => (
  <Base listClass={style.genericList} itemClass={style.genericItem} {...props}/>
);

export const HumanList = (props) => (
  <Base listClass={style.humainList} itemClass={style.humainItem} {...props}/>
);

export const AlienList = (props) => (
  <Base listClass={style.alienList} itemClass={style.alienItem} {...props}/>
);

export const ListContainer = ({title, TitleComponent = Title, TitleProps = {level: 4}, children}) => (
  <div className={style.container}>
    <TitleComponent {...TitleProps}>{title}</TitleComponent>
    {children}
  </div>
)
export const ListGrid = ({children}) => (
  <div className={style.grid}>
    {children}
  </div>
)