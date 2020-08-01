module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },

  plugins: ['prettier', 'node', 'import', 'jest'],

  'extends': [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'prefer-template': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    // 'react/jsx-curly-spacing': ['error', 'always'],
    'prettier/prettier': ['error', { singleQuote: true, semi: false, trailingComma: 'es5' }],
    'curly': 'error',

    'jest/no-disabled-tests': 'off',
    'react/prop-types': 'off',
    "strict": 0,
  },

  overrides: [
    {
      files: [
        '**/components/*.spec.js?'
      ],
      env: {
        jest: true
      },
    },
    // {
    //   files: ["*.js"],
    //   rules: {
    //     indent: "off"
    //   }
    // }
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
        paths: ['./src']
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue']
      }
    }
  }
}
