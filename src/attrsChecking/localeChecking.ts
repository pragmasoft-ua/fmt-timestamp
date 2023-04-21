import {MemoizedDateTimeFormat} from '../cache/memoizeFormatConstructor'

// This function prevent from RangeError, if  we got it - we will return current browser's locale.
 export const localeChecking = (locale: string): string => {
  try {
    const _ = new Intl.Locale(locale);
    return locale;
  } catch {
    return MemoizedDateTimeFormat(undefined, {},'localeChecking').resolvedOptions().locale;
  }
};


