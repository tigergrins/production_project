import { StateSchema } from "app/providers/StoreProvider"
import { getLoginPassword } from "./getLoginPassword"


describe('getLoginPassword test', () => {
	test('should return 123', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				username: 'admin',
				password: '123',
				isLoading: true,
				error: 'error',
			}
		}

		expect(getLoginPassword(state as StateSchema)).toBe('123')
	})


	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getLoginPassword(state as StateSchema)).toBe('')
	})
})
