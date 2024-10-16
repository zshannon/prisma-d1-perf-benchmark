/** @type {import('xo').BaseConfig} */
module.exports = {
	extends: ['prettier', 'xo-react'],
	ignores: ['.build', './Sources', './Tests'],
	plugins: ['next-on-pages', 'simple-import-sort', 'sort-keys-fix', 'prettier'],
	prettier: true,
	rules: {
		'@typescript-eslint/ban-types': 0,
		'@typescript-eslint/naming-convention': [
			'error',
			{
				format: ['strictCamelCase', 'PascalCase'],
				selector: 'function',
			},
		],
		'@typescript-eslint/semi': 0,
		'capitalized-comments': 0,
		'import/extensions': 0,
		'import/no-anonymous-default-export': 0,
		'import/order': 0,
		'n/file-extension-in-import': 0,
		'new-cap': 0,
		'no-unreachable': 0,
		'react/react-in-jsx-scope': 0,
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^\\u0000'],
					['^@?\\w.*\\u0000$', '^@?\\w'],
					['(?<=\\u0000)$', '^'],
					['^~\\..*\\u0000$', '^~\\.'],
					['^\\..*\\u0000$', '^\\.'],
				],
			},
		],
		'sort-keys': [
			'warn',
			'asc',
			{
				caseSensitive: true,
				natural: false,
			},
		],
		'sort-keys-fix/sort-keys-fix': 'warn',
		'sort-vars': [
			1,
			{
				ignoreCase: true,
			},
		],
		'unicorn/no-array-callback-reference': 0,
		'unicorn/no-array-reduce': 0,
		'unicorn/prevent-abbreviations': 0,
	},
}
