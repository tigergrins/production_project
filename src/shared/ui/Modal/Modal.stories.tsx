import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

export default {
  title: 'widgets/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>

export const Primary = Template.bind({})
Primary.args = {
	children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error voluptatem dolorum,expedita deleniti aliquam magnam. Dolor recusandae aliquid, asperiores voluptas atque, obcaecati',
	isOpened: true
}

export const DarkModal = Template.bind({})
DarkModal.args = {
	children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error voluptatem dolorum,expedita deleniti aliquam magnam. Dolor recusandae aliquid, asperiores voluptas atque, obcaecati',
	isOpened: true
}
DarkModal.decorators = [ThemeDecorator(Theme.DARK)]
