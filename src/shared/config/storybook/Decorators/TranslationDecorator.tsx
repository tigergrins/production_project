import { type Story } from '@storybook/react'
import { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'

export const TranslationDecorator = (StorybookComponent: Story) => (
	<I18nextProvider i18n={i18n}>
		<Suspense fallback={''}>
			<StorybookComponent/>
		</Suspense>
	</I18nextProvider>
)
