import { CardPropsInterface } from '../../interfaces/Interfaces'
import iconEllipsis from '../../assets/images/icon-ellipsis.svg'
import iconWork from '../../assets/images/icon-work.svg'
import iconPlay from '../../assets/images/icon-play.svg'
import iconStudy from '../../assets/images/icon-study.svg'
import iconExercise from '../../assets/images/icon-exercise.svg'
import iconSocial from '../../assets/images/icon-social.svg'
import iconSelfCare from '../../assets/images/icon-self-care.svg'

const Card = (props: CardPropsInterface) => {
	const Icon =
		props.type === 'Work'
			? iconWork
			: props.type === 'Play'
				? iconPlay
				: props.type === 'Study'
					? iconStudy
					: props.type === 'Exercise'
						? iconExercise
						: props.type === 'Social'
							? iconSocial
							: props.type === 'Self Care' ? iconSelfCare : ''
	return (
		<div className={`card card${props.type}`}>
			<img src={Icon} alt="icon work" className="card_icon" />
			<div className="card_contentCard">
				<article className="contentCard_header">
					<h3 className="header_title">{props.title}</h3>
					<img src={iconEllipsis} alt="Icon ellipsis" className="header_iconEllipsis" />
				</article>
				<article className="contentCard_data">
					<h2 className="data_title">{props.time}hrs</h2>
					<p className="data_time">Previous - {props.previousTime}hrs</p>
				</article>
			</div>
		</div>
	)
}

export default Card
