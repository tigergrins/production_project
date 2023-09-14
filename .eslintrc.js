module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		// 'plugin:react/recommended',
		'plugin:i18next/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
		'react-hooks'
	],
	rules: {
		'react/jsx-filename-extension': [2, {
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		}],
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'no-underscore-dangle': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'no-shadow': 'off',
		'i18next/no-literal-string': ['error', {
			markupOnly: true,
			ignoreAttribute: ['data-testid', 'to']
		}],
		'max-len': ['error', {
			ignoreComments: true,
			code: 100
		}],
		'comma-dangle': ['error', 'only-multiline'],
		indent: 'off',
		'react/display-name': 'off',
		'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
	},
	globals: {
		__IS_DEV__: true
	},
	overrides: [{
		files: ['**/src/**/*.{stories,test}.{ts,tsx}'],
		rules: {
			'i18next/no-literal-string': 'off',
			'max-len': 'off'
		}
	}]
}
