module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "quotes": 0,
    "linebreak-style": 0,
    "comma-dangle": 0
  },
  plugins: ["react"],
  settings: {
    "import/resolver": "webpack",
  },
};
