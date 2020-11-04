type Fn = () => any;

/**
 * simple method call debounce (swe do not need lodash for just one simple thing :) )
 * @param fn - method that will be wrapped
 * @param debounceIntervalMilliseconds - interval of debounce in ms
 */
export const debounce = (fn: Fn, debounceIntervalMilliseconds: number = 250): Fn => {
    let lastInvoked = Date.now();

    return () => {
        const now = Date.now();

        if (now - lastInvoked > debounceIntervalMilliseconds) {
            lastInvoked = now;

            fn();
        }
    };
};
