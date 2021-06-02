#! /usr/bin/env node
import { main } from './main';
main(process.argv[2]).then(() => {
  console.log('SUCCESS');
});
