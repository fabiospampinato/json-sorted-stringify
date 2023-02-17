
/* IMPORT */

import benchmark from 'benchloop';
import fs from 'node:fs';
import stringify from '../dist/index.js';

/* HELPERS */

const SMALL = JSON.parse ( fs.readFileSync ( './tasks/small.json', 'utf8' ) );
const MEDIUM = JSON.parse ( fs.readFileSync ( './tasks/medium.json', 'utf8' ) );
const LARGE = JSON.parse ( fs.readFileSync ( './tasks/large.json', 'utf8' ) );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1
});

benchmark ({
  name: 'small',
  fn: () => {
    stringify ( SMALL );
  }
});

benchmark ({
  name: 'medium',
  fn: () => {
    stringify ( MEDIUM );
  }
});

benchmark ({
  name: 'large',
  fn: () => {
    stringify ( LARGE );
  }
});

benchmark.summary ();
