module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
		'next/core-web-vitals',
	],
	settings: {
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			fragment: 'Fragment',
			version: 'detect',
		},
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	plugins: ['@typescript-eslint', 'react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		semi: ['error', 'always', { omitLastInOneLineClassBody: true }],
		'max-len': ['error', { code: 140 }],
		'no-console': 'warn',
		'no-trailing-spaces': 'error',
		'no-empty': 'error',
		'no-multiple-empty-lines': 'error',
		'no-multi-spaces': 'error',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'linebreak-style': ['error', 'unix'],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				parser: 'flow',
			},
		],
	},
};
