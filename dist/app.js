"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_wildcard(require("express"));
const _dotenv = /*#__PURE__*/ _interop_require_wildcard(require("dotenv"));
const _cors = /*#__PURE__*/ _interop_require_default(require("cors"));
const _helmet = /*#__PURE__*/ _interop_require_default(require("helmet"));
const _apiroute = /*#__PURE__*/ _interop_require_default(require("./routes/api.route"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
_dotenv.config();
if (!process.env.PORT) {
    console.log(`No port value specified...`);
}
let App = class App {
    initMiddleware() {
        this.app.use(_express.default.json());
        this.app.use(_express.default.urlencoded({
            extended: true
        }));
        this.app.use((0, _cors.default)());
        this.app.use((0, _helmet.default)());
    }
    initRoutes(routes) {
        this.app.get("/debug-sentry", function mainHandler(req, res) {
            throw new Error("My first Sentry error!");
        });
        // this.app.use(`/api/book/store`, function mainHandler(req, res) {
        //     throw new Error("My first Sentry error!");
        // });
        routes.forEach((route)=>{
            this.app.use('/', route.router);
        });
    }
    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Server is listening on port ${this.port}`);
        });
    }
    constructor(routes){
        _define_property(this, "app", void 0);
        _define_property(this, "port", void 0);
        _define_property(this, "router", (0, _express.Router)());
        this.port = parseInt(process.env.PORT) || 7000;
        let app = (0, _express.default)();
        this.app = app;
        this.initMiddleware();
        this.initRoutes(routes);
    }
};
const app = new App([
    new _apiroute.default()
]);
app.listen();

//# sourceMappingURL=app.js.map