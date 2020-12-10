#!/usr/bin/env node


const Generator = require('./packageJson');
const yeoman = require('yeoman-environment');

const cwd = process.cwd();

const env = yeoman.createEnv([], {
  cwd,
});

const generator = new Generator({
  env,
  resolved: require.resolve('./packageJson'),
});
generator.run(() => {
  console.log('✨ File Generate Done');
});
