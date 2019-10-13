const test = require('ava');
const isMultipleOf3 = require("./index.js");

test('numbers', t => {
    t.is(isMultipleOf3(6), true);
    t.is(isMultipleOf3(10), false);
});

test('strings', t => {
    t.is(isMultipleOf3("9"), true);
    t.is(isMultipleOf3(14), false);
});
