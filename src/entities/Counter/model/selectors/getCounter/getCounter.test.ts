import { getCounter } from "./getCounter"
import { StateSchema } from "app/providers/StoreProvider"

describe('getCounter.test', () => {
	test('should return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		}

		const counter = {
			value: 10
		}

		expect(getCounter(state as StateSchema)).toEqual(counter)
	})
})
