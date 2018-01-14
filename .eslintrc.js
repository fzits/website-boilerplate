module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['warn', 'unix'],
        'semi': ['error', 'always']
    }
};