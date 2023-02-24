// converts width and height to values with units
export function getValWithUnit(val) {
    if (!val)
        return '0';
    const valStr = val.toString();
    if (['px', '%', 'rem', 'em', 'vh', 'vw'].some(k => valStr.endsWith(k))) {
        return valStr;
    }
    return `${valStr}px`;
}
// throttle function that unit by milliseconds
export function throttle(fn, delay = 300, leading = true) {
    let timer = null;
    let executed = false;
    return (...args) => {
        if (!executed && leading) {
            fn.apply(this, args);
            executed = true;
        }
        else if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, delay);
        }
    };
}
