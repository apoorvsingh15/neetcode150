// sum(1)(1,2,3,4)(56,32)() - Implement this - Infinite currying problem. - Interview question

// Solution 1 - Infinite currying with single parameters.

let sum = (a) => {
    return (b) => {
        if (b) return sum(a + b);
        else return a;
    }
}

// The plus sign forces the parser to treat the part following the + as an expression.
// This is usually used for functions that are invoked immediately
console.log(+sum(1)(2)(6)());

// Advance Variation with infinite arguments.
function sumInfinite(...args) {
    return Object.assign(
        sumInfinite.bind(null, ...args),
        { valueOf: () => args.reduce((a, c) => a + c, 0) }
    )
}

// The plus sign forces the parser to treat the part following the + as an expression.
// This is usually used for functions that are invoked immediately
console.log(+sumInfinite(1, 2, 30)(2)(6)());
