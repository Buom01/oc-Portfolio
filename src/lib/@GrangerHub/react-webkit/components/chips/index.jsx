import clsx from 'clsx';
import style from './chips.module.scss';

const Chips = ({children}) =>
{
  return (
    <div className={style.chips}>
      {children}
    </div>
  );
}

const Chip = ({children, className = style.chip, kind = 'clip'}) =>
{
  return (
    <div className={className} data-augmented-ui={`tl-${kind} tr-${kind} br-${kind} exe`}>
      {children}
    </div>
  );
}

const ChipRed = (props) => Chip({className: style.chipRed, ...props});
const ChipOrange = (props) => Chip({className: style.chipOrange, ...props});
const ChipYellow = (props) => Chip({className: style.chipYellow, ...props});
const ChipGreen = (props) => Chip({className: style.chipGreen, ...props});
const ChipCyan = (props) => Chip({className: style.chipCyan, ...props});
const ChipBlue = (props) => Chip({className: style.chipBlue, ...props});
const ChipViolet = (props) => Chip({className: style.chipViolet, ...props});
const ChipMagenta = (props) => Chip({className: style.chipMagenta, ...props});

export { Chips, Chip, ChipRed, ChipOrange, ChipYellow, ChipGreen, ChipCyan, ChipBlue, ChipViolet, ChipMagenta };
