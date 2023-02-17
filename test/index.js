
/* IMPORT */

import {describe} from 'fava';
import stringify from '../dist/index.js';

/* MAIN */

describe ( 'JSON Sorted Stringify', it => {

  it ( 'works', t => {

    const a = { a: 1, b: 2, c: [1, 2, { a: 1, b: 2 }], d: { a: 1, b: 2 } };
    const b = { d: { b: 2, a: 1 }, b: 2, a: 1, c: [1, 2, { b: 2, a: 1 }] };

    t.deepEqual ( a, b );

    const sa = stringify ( a );
    const sb = stringify ( b );

    t.is ( sa, sb );

    const pa = JSON.parse ( sa );
    const pb = JSON.parse ( sb );

    t.deepEqual ( pa, pb );
    t.deepEqual ( pa, a );
    t.deepEqual ( pb, b );

  });

});
