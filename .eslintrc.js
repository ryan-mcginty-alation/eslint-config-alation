module.exports = {
  "env": { // Sets the state for the default environment so we can assume APIs are available
    "amd": true,
    "browser": true,
    "es6": true,
    "jasmine": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "eslint:recommended", // Retain code quality checks from eslint
    "prettier"  // Override formatting checks with prettier
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true // Enable JSX support
    },
    "sourceType": "module",
    "ecmaVersion": 2018
  },
  "plugins": [
    "import",
    "react",
    "prettier"
  ],
  "rules": {
    "import/no-unresolved": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "always",
        "tsx": "always",
        "html" : "always"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          "internal",
          ["sibling", "parent", "index"]
        ],
        "newlines-between": "always"
      }
    ],
    "no-var": "error",
    "one-var": ["error","never"],
    "prefer-const": "error",
    "prefer-template": "error",
    "prettier/prettier": ["error", { // Prettier settings
      "singleQuote": true, // require single quotes
      "jsxSingleQuote": true, // require single quotes in JSX
      "trailingComma": "es5", // require trailing commas after objects, arrays etc.
      "jsxBracketSameLine": true, // JSX require multiline elements to end with closing bracket on last line
      "bracketSpacing": false,
      "printWidth" : 120
    }],
    "no-unused-vars": ["error", {"ignoreRestSiblings": false}],
    "react/jsx-uses-react": "error", // Prevents "React" to be incorrectly marked as unused
    "react/jsx-uses-vars": "error", // Prevents variables used in JSX to be incorrectly marked as unused
    "react/default-props-match-prop-types": "error", // Prevent extraneous defaultProps on components
    "react/no-direct-mutation-state": "error", // Prevent direct mutation of this.state
    "react/no-string-refs": "error", // Prevent using string references in ref attribute.
    "react/no-unused-prop-types": "error", // Prevent definitions of unused prop types
    "react/no-unused-state": "error", // Prevent definitions of unused state properties
    "react/prefer-es6-class": "error", // Enforce ES5 or ES6 class for React Components
    "react/sort-comp": "error", // Enforce component methods order (lifecycle -> custom -> method)
    "react/no-deprecated": "warn", // Prevent usage of deprecated methods, including component lifecyle methods
    "react/no-danger-with-children": "warn", // Prevent problem with children and props.dangerouslySetInnerHTML
    "react/no-did-mount-set-state": "warn", // Prevent usage of setState in componentDidMount
    "react/no-did-update-set-state": "warn", // Prevent usage of setState in componentDidUpdate
    "react/no-find-dom-node": "warn", // Prevent usage of findDOMNode
    "react/prefer-stateless-function": "warn", // Enforce stateless React Components to be written as a pure function
    "react/require-default-props": "warn" // Enforce a defaultProps definition for every prop that is not a required prop
  },
  "settings": {
    "react": {
      "version": "16.10.2",
      "createClass": "createClass"
    },
    "import/resolver": {
      "webpack": {}
    }
  },
  "globals": {
    "jest": "readonly",
    "$": "readonly",
    "swal": "readonly",
    "TestHelpers": "readonly"
  }
};
