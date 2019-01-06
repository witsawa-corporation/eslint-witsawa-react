const config = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha":true
  },
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "parser": "babel-eslint",
  "rules": {
    "prettier/prettier": [
      "error", {
        "singleQuote": true,
        "trailingComma": "es5",
        "semi": false
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "max-len": [
      "error", {
        "code": 100,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "max-depth": ["error", 3],
    "semi": ["error", "never"],
  }
}

module.exports = config