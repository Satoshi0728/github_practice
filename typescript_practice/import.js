"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var export_1 = require("./export");
console.log(export_1.name);
function double(val) {
    if (typeof val == "number") {
        console.log(val * 2);
    }
    else {
        console.log(val + " " + val);
    }
}
double(10);
double("hello");
