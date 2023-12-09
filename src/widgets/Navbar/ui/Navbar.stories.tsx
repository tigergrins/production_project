import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>

export const Light = Template.bind({})
Light.args = {
}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Auth = Template.bind({})
Auth.args = {
}
Auth.decorators = [StoreDecorator({
	user: {authData: {id: '1', username: '111'}}
})]
