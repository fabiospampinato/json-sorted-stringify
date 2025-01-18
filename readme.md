# JSON Sorted Stringify

Alternative `JSON.stringify` function with sorted keys, so the output is stable.

## Install

```sh
npm install json-sorted-stringify
```

## Usage

```ts
import stringify from 'json-sorted-stringify';

// Let's stringify in a sorted/stable manner

stringify ({ a: 1, b: 2 }); // => '{"a":1,"b":2}'
stringify ({ b: 2, a: 1 }); // => '{"a":1,"b":2}'
```

## License

MIT © Fabio Spampinato
