const assert = require("assert");
const { greet } = require("./app");

assert.strictEqual(greet("Tessy"), "Hello Tessy!");

console.log("All tests passed!");
