import { Counter } from './Counter';
import { screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/test/componentsRender/componentsRender'
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
  test('Test render', () => {
    componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10
				}
			}
		})

    expect(screen.getByTestId('counter-title-value')).toHaveTextContent('10')
  })

  test('increment', () => {
    componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10
				}
			}
		})

		const incrementBtn = screen.getByTestId('counter-btn-increase')
		userEvent.click(incrementBtn)

    expect(screen.getByTestId('counter-title-value')).toHaveTextContent('11')
  })

  test('Test render', () => {
    componentRender(<Counter/>, {
			initialState: {
				counter: {
					value: 10
				}
			}
		})

		const decrementBtn = screen.getByTestId('counter-btn-decrease')
		userEvent.click(decrementBtn)

    expect(screen.getByTestId('counter-title-value')).toHaveTextContent('9')
  })
})
