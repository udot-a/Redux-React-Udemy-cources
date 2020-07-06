export const compose= (...funcs) => (component) =>
    funcs.reduceRight((res, func) =>
            res = func(res),
        component
    );
