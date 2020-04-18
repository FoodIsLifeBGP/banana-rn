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
	'import',
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
	},
	"import/external-module-folders": ["node_modules"],
	"import/internal-regex": "^@*/"
  },
  rules: {
		// These rules are in alphabetical order, minus any symbols (i.e. @typescript goes under T).  Please preserve this when adding.
		'array-bracket-newline': [
			2,
			{
				'minItems': 2
			}
		],
		'array-bracket-spacing': [ 1, 'always' ],
		'array-element-newline': [
			2,
			{
				'minItems': 2
			}
		],
		'arrow-parens': [ 1, 'as-needed' ],
		'class-methods-use-this': 0,
		'eol-last': [ 1, 'always'],
		'func-call-spacing': 'off',
		'global-require': 0,
		'import/extensions': [ 0, 'never' ],
		'import/no-unresolved': [
			2,
			{
				'caseSensitive': false,
				'ignore': [
					'@assets',
					'@screens',
					'@elements',
					'@util',
					'@state',
					'../',
					'./',
				]
			}
		],
		// Base rule 'indent' must be disabled for TS rule to work.
		'indent': 0,
		"import/order": [2, {
			"groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
			'alphabetize': {
				'order': 'asc',
				'caseInsensitive': true
			},
			"newlines-between": "always"
		}],
		'import/prefer-default-export': 0,
		'lines-between-class-members': 0,
		'linebreak-style': [ 'error', 'unix' ],
		'max-len': [ 1, 120 ],
		'no-async-promise-executor': 1,
		'no-confusing-arrow': [
			'error',
			{
				'allowParens': true
			}
		],
		'no-empty-function': 'warn',
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 2,
				'maxEOF': 1,
				'maxBOF': 1
			}
		],
		'no-tabs': [
			'error',
			{
				'allowIndentationTabs': false
			}
		],
		'no-unused-expressions': 0,
		'object-curly-newline': [
			2,
			{
				'multiline': true,
				'minProperties': 2
			} 
		],
		'object-property-newline': 2,
		'prefer-object-spread': 1,
		'quotes': [ 2, 'single', 'avoid-escape'	],
		'react/destructuring-assignment': [ 1 ],
		// Indent rules off to not interfere with tsx indent
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-boolean-value': [ 1, 'always' ],
		'react/jsx-filename-extension': [
			1,
			{
				'extensions': [
					'.ts',
					'.tsx'
				]
			}
		],
		'react/jsx-max-props-per-line': [
			2,
			{
				'maximum': 1
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
		'react/jsx-props-no-spreading': 1,
		'react/prop-types': 0,
		'semi': [ 'error', 'always' ],
		"sort-imports": ["error", {
			"ignoreCase": true,
			"ignoreDeclarationSort": true,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
		}],
		'@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': [ 0 ],
		'@typescript-eslint/explicit-member-accessibility': [ 0 ],
		'@typescript-eslint/func-call-spacing': [ 1 ],
		'@typescript-eslint/indent': [2, 4],
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-unused-vars': [
			1, 
			{
				'argsIgnorePattern': '^_'
			}
		],
		'@typescript-eslint/no-use-before-define': [ 0 ],
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/semi': [ 1 ],
	}
};
