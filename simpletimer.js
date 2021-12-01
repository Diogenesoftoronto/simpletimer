'use strict';
const args = process.argv.slice(2); //array of args
args.forEach( arg => {
  if (arg < 0) {
    continue;
  }
  if (arg === NaN) {
    continue;
  }
  setTimeout(() => process.stdout.write('.'), arg);
})
