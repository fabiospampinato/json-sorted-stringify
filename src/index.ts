
/* MAIN */

const stringify = ( value: object ): string => {

  return JSON.stringify ( value, ( _, value ) => {

    if ( typeof value === 'object' && value !== null && !Array.isArray ( value ) ) {

      const keys = Object.keys ( value ).sort ();
      const clone: Record<string, unknown> = {};

      for ( let i = 0, l = keys.length; i < l; i++ ) {

        const key = keys[i];

        clone[key] = value[key];

      }

      return clone;

    }

    return value;

  });

};

/* EXPORT */

export default stringify;
