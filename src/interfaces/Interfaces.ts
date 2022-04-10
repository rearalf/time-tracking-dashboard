export interface CardPropsInterface {
	title: string
	time: number
	previousTime: number
	type: typeTitleFrames | string
}

export interface timeFramesInterface {
	title: string
	time: {
		current: number
		previous: number
	}
}

export interface PropfileProps {
	typeFrame: typeFrames
	handleChangeType: (e: typeFrames) => void
}
