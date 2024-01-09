module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "no-multi-spaces": "error",
    semi: ["error", "always"],
    "react/no-string-refs": "error",
    "react / jsx - boolean - value":["true"],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
   " react / jsx - wrap - multilines":{
    
      "declaration": "parens",
      "assignment": "parens",
      "return": "parens",
      "arrow": "parens",
      "condition": "ignore",
      "logical": "ignore",
      "prop": "ignore"
    
   },
   "react/self-closing-comp": ["error", {
     "component": true,
     "html": true
   }]
  },
}
