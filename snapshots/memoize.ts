import * as R_memoize from '../ramda/dist/src/memoize';

declare const T_to_T: <T>(value: T) => T;

// @dts-jest:pass -> <T>(value: T) => T
R_memoize(T_to_T);
