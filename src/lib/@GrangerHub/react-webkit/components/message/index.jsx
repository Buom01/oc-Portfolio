import 'augmented-ui/data-augmented.css';
import style from './message.module.scss';

export const Message = ({children, className = style.base, title = "Message", TitleTag = "span", Tag = "div"}) => (
	<Tag className={className} data-augmented-ui="tl-clip tr-clip br-clip tr-clip-x exe">
		<TitleTag className={style.title}>{title}</TitleTag>
		{children}
	</Tag>
);

export const Information = ({title = "Information", ...props}) => (
	<Message title={title} className={style.information} {...props} />
);

export const Warning = ({title = "Warning", ...props}) => (
	<Message title={title} className={style.warning} {...props} />
);

export const Error = ({title = "Alert", ...props}) => ( // Alert, like a Red Alert
	<Message title={title} className={style.error} {...props} />
);