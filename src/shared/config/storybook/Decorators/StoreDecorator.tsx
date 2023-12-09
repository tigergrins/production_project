import { DeepPartial } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StorybookComponent: Story) => {
  return (
		<StoreProvider initialState={state}>
				<StorybookComponent/>
		</StoreProvider>
  )
}
