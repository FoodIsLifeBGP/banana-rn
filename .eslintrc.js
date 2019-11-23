module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
		'@typescript-eslint',
		'@babel-plugin-module-resolver',
  ],
  rules: {
    'indent': 'off',
    'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			2,
			'single',
			'avoid-escape'
		],
		'semi': [
			'error',
			'always'
		],
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
    ],
    '@typescript-eslint/explicit-function-return-type': [
			0
		],
		'@typescript-eslint/no-use-before-define': [
			0
		],
		'@typescript-eslint/explicit-member-accessibility': [
			0
		],
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': [
			1
		],
		'array-bracket-spacing': [
			1,
			'always'
		],
		'eol-last': [
			1,
			'always'
		],
		'@typescript-eslint/semi': [
			1
		],
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'error',
		'react/jsx-filename-extension': [
			1,
			{
				'extensions': [
					'.ts',
					'.tsx'
				]
			}
		],
		'react/jsx-indent': [
			1,
			'tab'
		],
		'react/jsx-indent-props': [
			1,
			'tab'
		],
		'react/jsx-boolean-value': [
			1,
			'always'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 2,
				'maxEOF': 1,
				'maxBOF': 1
			}
		],
		'import/no-unresolved': [
			2,
			{
				'caseSensitive': false,
				'ignore': [
					'@assets',
					'@screens',
					'@elements',
					'@util',
					'../',
					'./',
				]
			}
		],
		'arrow-parens': [
			1,
			'as-needed'
		],
		'global-require': 0,
		'no-tabs': [
			'error',
			{
				'allowIndentationTabs': true
			}
		],
		'react/destructuring-assignment': [
			1
		],
		'no-confusing-arrow': [
			'error',
			{
				'allowParens': true
			}
		],
		'react/no-unescaped-entities': [
			'error',
			{
				'forbid': [
					'>',
					'}'
				]
			}
		],
		'import/prefer-default-export': 0,
		'no-unused-expressions': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'lines-between-class-members': 0,
		'@typescript-eslint/no-unused-vars': [
			1, 
			{
				'argsIgnorePattern': '^_'
			}
		],
		'prefer-object-spread': 1,
		'no-async-promise-executor': 1,
		'react/jsx-props-no-spreading': 1,
		'class-methods-use-this': 0
	}
};
