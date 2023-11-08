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
const _prismadb = /*#__PURE__*/ _interop_require_default(require("../prisma/prisma.db"));
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
let BookController = class BookController {
    constructor(){
        _define_property(this, "store", async (req, res, next)=>{
            try {
                await _prismadb.default.book.create({
                    data: req.body
                });
                res.status(201).json({
                    book: req.body,
                    status: 'Book created successfully.'
                });
            } catch (error) {
                res.status(400).json({
                    data: error,
                    status: 'error'
                });
            }
        });
        _define_property(this, "listBooks", async (req, res, next)=>{
            try {
                let books = await _prismadb.default.book.findMany();
                res.status(200).json({
                    data: books,
                    status: 'Books fetched successfully'
                });
            } catch (error) {
                res.status(400).json({
                    data: error,
                    status: 'error'
                });
            }
        });
        _define_property(this, "find", async (req, res, next)=>{
            try {
                let book = await _prismadb.default.book.findUnique({
                    where: {
                        id: req.params.id
                    }
                });
                res.status(200).json({
                    data: book,
                    status: 'Book detail fetched successfully'
                });
            } catch (error) {
                res.status(400).json({
                    data: error,
                    status: 'error'
                });
            }
        });
        _define_property(this, "deleteBook", async (req, res, next)=>{
            try {
                let book = await _prismadb.default.book.delete({
                    where: {
                        id: req.params.id
                    }
                });
                res.status(201).json({
                    data: book,
                    status: 'Book deleted successfully'
                });
            } catch (e) {
                res.status(400).json({
                    data: e,
                    status: 'error'
                });
            }
        });
    }
};
const _default = BookController;

//# sourceMappingURL=book.controller.js.map