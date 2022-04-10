import Profile from './components/Profile'
import useGetData from './hooks/useGetData'
import Card from './components/Card'

const App = () => {
	const { handleChangeType, typeFrame, timeFrames } = useGetData()
	return (
		<main className="container">
			<Profile handleChangeType={handleChangeType} typeFrame={typeFrame} />
			<div className="cardsTracking">
				{timeFrames.map(frame => (
					<Card
						key={frame.title}
						title={frame.title}
						previousTime={frame.time.previous}
						time={frame.time.current}
						type={frame.title}
					/>
				))}
			</div>
		</main>
	)
}

export default App
