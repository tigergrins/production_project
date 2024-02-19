import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import Profile from './Profile'
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator'

export default {
  title: 'pages/Profile',
  component: Profile
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = () => <Profile />

export const Light = Template.bind({})
Light.args = {
}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
