import { StateSchema } from "app/providers/StoreProvider"
import { getLoginError } from "./getLoginError"

describe('getLoginError test', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				username: 'admin',
				password: '123',
				isLoading: false,
				error: 'error',
			}
		}

		expect(getLoginError(state as StateSchema)).toBe('error')
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getLoginError(state as StateSchema)).toBe('')
	})
})
