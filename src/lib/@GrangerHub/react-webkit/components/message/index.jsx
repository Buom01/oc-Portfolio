import 'augmented-ui/data-augmented.css';
import style from './message.module.scss';


export const Message = ({children, title = "Message"}) => (
	<div className={style.base} data-augmented-ui="tl-clip tr-clip br-clip tr-clip-x exe">
		<span>{title}</span>
		{children}
	</div>
);

export const Information = ({children, title = "Information"}) => (
	<div className={style.information} data-augmented-ui="tl-clip tr-clip br-clip tr-clip-x exe">
		<span>{title}</span>
		{children}
	</div>
);

export const Warning = ({children, title = "Warning"}) => (
	<div className={style.warning} data-augmented-ui="tl-clip tr-clip br-clip tr-clip-x exe">
		<span>{title}</span>
		{children}
	</div>
);

export const Error = ({children, title = "Alert"}) => (
	<div className={style.error} data-augmented-ui="tl-clip tr-clip br-clip tr-clip-x exe">
		<span>{title}</span> {/* Alert, like a Red Alert */}
		{children}
	</div>
);