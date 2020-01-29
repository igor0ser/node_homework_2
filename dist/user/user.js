"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/:id', ({ params: { id } }, res) => {
    res.json({ id });
});
exports.default = router;
//# sourceMappingURL=user.js.map