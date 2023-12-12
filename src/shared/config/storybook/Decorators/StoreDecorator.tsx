import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers = {
	login: loginReducer
}

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StorybookComponent: Story) => {
  return (
		<StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
				<StorybookComponent/>
		</StoreProvider>
  )
}
