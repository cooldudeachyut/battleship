module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/mockCSS.js',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/test/jest/__mocks__/mockAsset.js'
  }
};