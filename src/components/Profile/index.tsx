import jeremy from '../../assets/images/image-jeremy.png'
import { PropfileProps } from '../../interfaces/Interfaces'

const Profile = (props: PropfileProps) => {
	const buttonDaily = props.typeFrame === 'daily' ? 'active' : ''
	const buttonWeekly = props.typeFrame === 'weekly' ? 'active' : ''
	const buttonMonthly = props.typeFrame === 'monthly' ? 'active' : ''
	return (
		<div className="card cardProfile">
			<div className="card_header">
				<img src={jeremy} alt="Jeremy Robson" className="avarat_profile" />
				<article className="header_profile">
					<p className="profile_text">Report for</p>
					<h2 className="profile_name">Jeremy Robson</h2>
				</article>
			</div>
			<div className="card_footer">
				<button
					className={`footer_time ${buttonDaily}`}
					onClick={() => props.handleChangeType('daily')}>
					Daily
				</button>
				<button
					className={`footer_time ${buttonWeekly}`}
					onClick={() => props.handleChangeType('weekly')}>
					Weekly
				</button>
				<button
					className={`footer_time ${buttonMonthly}`}
					onClick={() => props.handleChangeType('monthly')}>
					Monthly
				</button>
			</div>
		</div>
	)
}

export default Profile
