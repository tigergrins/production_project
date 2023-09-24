import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { counterActions } from "../model/slice/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"


export const Counter = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)
	const {t} = useTranslation()

	const increase = () => {
		dispatch(counterActions.increment())
	}

	const decrease = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1 data-testid='counter-title-value'>{t('value')}: {counterValue}</h1>
			<Button data-testid='counter-btn-increase'
							onClick={increase}>
				{t('increase')}
			</Button>
			<Button data-testid='counter-btn-decrease'
							onClick={decrease}>
				{t('decrease')}
			</Button>
		</div>
	)
}
