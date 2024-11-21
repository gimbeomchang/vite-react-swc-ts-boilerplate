module.exports = {
  '**/*.{js,jsx,ts,tsx}': [() => 'tsc --noEmit', 'eslint --fix', 'prettier --write'],
  '**/*.{json,md,yml,yaml,css,scss}': ['prettier --write'],
};
