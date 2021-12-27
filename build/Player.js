"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.createPlayer = void 0;
const createPlayer = (fn, ln, num) => {
    const getFullName = () => {
        return `${fn} ${ln}`;
    };
    return {
        fn,
        ln,
        num,
        getFullName
    };
};
exports.createPlayer = createPlayer;
const add = (n1, n2) => {
    return n1 + n2;
};
exports.add = add;
