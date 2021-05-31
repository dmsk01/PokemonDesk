module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^.+\\.(css|less|scss|svg|png|jpeg|jpg)$': 'identity-obj-proxy',
  },
};
