import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"


describe('getLoginUsername test', () => {
	test('should return admin', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				username: 'admin',
				password: '123',
				isLoading: true,
				error: 'error',
			}
		}

		expect(getLoginUsername(state as StateSchema)).toBe('admin')
	})


	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getLoginUsername(state as StateSchema)).toBe('')
	})
})
