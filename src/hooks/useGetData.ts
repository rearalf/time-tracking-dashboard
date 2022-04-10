import { useEffect, useState } from 'react'
import { timeFramesInterface } from '../interfaces/Interfaces'
import frames from '../../data.json'

function useGetData(){
	const [ typeFrame, setTypeFrame ] = useState<typeFrames>('daily')
	const [ timeFrames, setTimeFrames ] = useState<timeFramesInterface[]>([])
	const handleChangeType = (value: typeFrames) => {
		setTypeFrame(value)
	}
	const handleGetData = () => {
		const allFrames = frames.map(data => {
			return {
				title: data.title,
				time:
					typeFrame === 'daily'
						? data.timeframes.daily
						: typeFrame === 'monthly'
							? data.timeframes.monthly
							: typeFrame === 'weekly' ? data.timeframes.weekly : data.timeframes.daily,
			}
		})
		setTimeFrames(allFrames)
	}
	useEffect(
		() => {
			handleGetData()
		},
		[ typeFrame ],
	)

	return {
		typeFrame,
		timeFrames,
		handleChangeType,
	}
}

export default useGetData
