module.exports = {
  './**/*.{vue,ts,js}?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,
};
