import 'augmented-ui/data-augmented.css';
import style from './block.module.scss';
import clsx from 'clsx';

const Block = ({className, children, augmented, pannel = false, big = false, height, width}) =>
{
	const classes = clsx(style.generic, {
		[style.big]: big,
		[style.simple]: !pannel,
		[style.pannel]: pannel,
	}, className);

	return (
		<div className={clsx(classes, className)} data-augmented-ui={augmented} style={{height, width}}>
			{children}
		</div>
	);
}

const Generic = (props) => {
	const {sub, list, className, augmented} = props;
	const classes = clsx(style.generic, {
			[style.generic_sub]: sub,
			[style.generic_list]: !!list,
		}, className);

	return (<Block {...props} className={classes} augmented={augmented || "tl-round tr-round bl-round br-round exe"}/>);
};

const Alien = (props) => {
	const {sub, list, className, augmented} = props;
	const classes = clsx(style.alien, {
			[style.alien_sub]: sub,
			[style.alien_list]: list,
		}, className);

	return (<Block {...props} className={classes} augmented={augmented || "tl-round tr-round bl-round br-round exe"}/>);
};

const Human = (props) => {
	const {sub, list, className, augmented} = props;
	const classes = clsx(style.human, {
			[style.human_sub]: sub,
			[style.human_list]: list,
		}, className);

	return (<Block {...props} className={classes} augmented={augmented || "tl-clip tr-clip bl-clip br-clip exe"}/>);
};

const ListItem = ({action, children, augmented, active, disabled}) => (
	<li className={clsx(active && style.active, disabled && style.disabled)}>
		<span onclick={(!disabled && action) ?? action} tabindex="0" data-augmented-ui={augmented}>
			{children}
		</span>
	</li>
);

const GenericListItem = (props) => (
	<ListItem {...props} augmented="tl-round bl-round exe"/>
);

const AlienListItem = (props) => (
	<ListItem {...props} augmented="tl-round bl-round exe"/>
);

const HumanListItem = (props) => (
	<ListItem {...props} augmented="tl-fold bl-fold exe"/>
);

export { Generic, Alien, Human, GenericListItem, AlienListItem, HumanListItem };
