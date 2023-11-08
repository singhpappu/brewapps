"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _express = require("express");
const _bookcontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/book.controller"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let ApiRoute = class ApiRoute {
    initRoutes() {
        this.router.post(`${this.path}book/store`, this.bookController.store);
        this.router.get(`${this.path}books`, this.bookController.listBooks);
        this.router.get(`${this.path}book/:id`, this.bookController.find);
        this.router.delete(`${this.path}book/:id`, this.bookController.deleteBook);
    }
    constructor(){
        _define_property(this, "path", '/api/');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "bookController", new _bookcontroller.default());
        this.initRoutes();
    }
};
const _default = ApiRoute;

//# sourceMappingURL=api.route.js.map