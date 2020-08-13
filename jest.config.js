module.exports = {
  "preset": "jest-expo",
  "rootDir": "./",
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
    '^i18n$': '<rootDir>/i18n'
  },
  // "modulePathIgnorePatterns": [
  //   "<rootDir>/node_modules/",
  //   "<rootDir>/.history/"
  // ],
  "transformIgnorePatterns": [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/.history/"
  ]

};
