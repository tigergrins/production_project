import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginIsLoading } from "./getLoginIsLoading"


describe('getLoginIsLoading test', () => {
	test('should return true', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				username: 'admin',
				password: '123',
				isLoading: true,
				error: 'error',
			}
		}

		expect(getLoginIsLoading(state as StateSchema)).toBe(true)
	})

	test('should return false', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				username: 'admin',
				password: '123',
				isLoading: false,
				error: 'error',
			}
		}

		expect(getLoginIsLoading(state as StateSchema)).toBe(false)
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getLoginIsLoading(state as StateSchema)).toBe(false)
	})
})
