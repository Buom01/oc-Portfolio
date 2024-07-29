import style from './progress.module.scss';
import {neon} from '../../main.module.scss';


const Progress = ({children, percent = 0}) => (
	<div className={style.outter} data-augmented-ui="tl-clip tr-clip br-clip bl-clip exe">
		<div className={style.inner} data-augmented-ui="tl-clip tr-clip br-clip bl-clip exe" style={{width: `${percent}%`}}/>
		<span className={style.text}>{children ? children : `${Math.round(percent)}%`}</span>
	</div>
);


export default Progress;
