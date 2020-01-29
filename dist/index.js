"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("./user");
const app = express();
app.get('/', function (req, res) {
    res.send('Node.js homework #2');
});
app.use('/users', user_1.userRouter);
console.log(123);
app.listen(3000);
//# sourceMappingURL=index.js.map