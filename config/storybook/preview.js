import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/Decorators/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/Decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/Decorators/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/Decorators/TranslationDecorator';
import { Theme } from '../../src/app/providers/ThemeProviders/lib/ThemeContext';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
// addDecorator(TranslationDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
