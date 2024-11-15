import type { ElementType, ReactElement, ReactNode } from 'react';
import 'normalize.css/normalize.css';
import 'augmented-ui/data-augmented.css';
import {textblock} from '../../main.module.scss';
import style from './block.module.scss';
import clsx from 'clsx';

import { Generic, Alien, Human } from './index';

const Basic = (
  {
    Component = Generic,
    children,
    width = 600,
    height = 400,
    big = false,
    className = undefined
  }
  :
  {
    Component?: ElementType,
    children?: ReactNode,
    width?: number | string,
    height?: number | string,
    big?: boolean,
    className?: string
  }
) => (
  <Component width={width} height={height} big={big} className={className}>
    <Component sub basic augmented={Component == Human ? "tl-clip tr-clip bl-clip br-clip exe" : "tl-round tr-round bl-round br-round exe"} className={textblock}>
      {children}
    </Component>
  </Component>
);

const Simple = (
  {
    Component = Generic,
    title,
    TitleComponent = "h3",
    children,
    width = 600,
    height = 400,
    big = false,
    className = undefined
  }
  :
  {
    Component?: ElementType,
    title: string,
    TitleComponent?: ElementType,
    children?: ReactNode,
    width?: number | string,
    height?: number | string,
    big?: boolean,
    className?: string
  }
) => (
  <Component width={width} height={height} big={big} className={className}>
    <TitleComponent>{title}</TitleComponent>
    <Component sub basic augmented={Component == Human ? "bl-clip br-clip exe" : "bl-round br-round exe"} className={textblock}>
      {children}
    </Component>
  </Component>
);

const Normal = ({Component = Generic, list, title, children, actions, width = 600, height = 400, big = false, className = null}) => {
  const corner = Component == Human ? "clip" : "round";
  const augmented = clsx(
    !title && `tr-${corner}`,
    !actions && `br-${corner}`,
    'exe');

  return (
    <Component width={width} height={height} big={big} className={className} pannel>
      <Component sub list augmented={`tl-${corner} bl-${corner} exe`}>
        {list}
      </Component>
      <div className={style.simple}>
        {title && <h3>{title}</h3>}
        <Component sub basic augmented={augmented} className={textblock}>
          {children}
        </Component>
        {actions &&
          <div className={style.actions}>
            {actions}
          </div>
        }
      </div>
    </Component>
  )
};

export { Basic, Simple, Normal };
