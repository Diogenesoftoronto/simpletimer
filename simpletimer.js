'use strict';
const args = process.argv.slice(2); //array of args
args.forEach( arg => {
  setTimeout(() => process.stdout.write('.'), arg);
})
