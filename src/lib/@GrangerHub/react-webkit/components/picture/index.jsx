import style from './picture.module.scss';
import clsx from 'clsx';


const Picture = (
  {
    Component = "img", className = undefined,
    center = false, left = false, right = !center && !left,
    ...props
  }
) => (
  <Component
      {...props}
      className={clsx(
        style.base,
        {
          [style.right]: right,
          [style.left]: left,
          [style.center]: center,
        },
        className
      )}
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip exe"
    />
);


export default Picture;
