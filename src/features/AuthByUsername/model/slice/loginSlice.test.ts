import { loginActions, loginReducer } from "./loginSlice"
import { LoginSchema } from "../types/loginSchema"

describe('loginSlice test', () => {
	test('test set username', async () => {
		const state: DeepPartial<LoginSchema> = { username: '123' }

		expect(loginReducer(
			state as LoginSchema,
			loginActions.setUsername('Axe')
		))
			.toEqual({ username: 'Axe' })
	})

	test('test set password', async () => {
		const state: DeepPartial<LoginSchema> = {
			username: '123',
			password: '123'
		}

		expect(loginReducer(
			state as LoginSchema,
			loginActions.setPassword('Axe')
		))
			.toEqual({
				username: '123',
				password: 'Axe'
			})
	})

	// test('', async () => {
	// 	expect().toEqual()
	// })
	// test('', async () => {
	// 	expect().toEqual()
	// })
	// test('', async () => {
	// 	expect().toEqual()
	// })

})
