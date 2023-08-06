module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'i18next'],
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
				allowIndentationTabs: true
			},
    globals: {
        __IS_DEV__: true
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }]
}
