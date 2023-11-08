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
const _client = require("@prisma/client");
let prisma;
if (process.env.NODE_ENV === "production") {
    prisma = new _client.PrismaClient();
} else {
    let globalWithPrisma = global;
    if (!globalWithPrisma.prisma) {
        globalWithPrisma.prisma = new _client.PrismaClient();
    }
    prisma = globalWithPrisma.prisma;
}
const _default = prisma;

//# sourceMappingURL=prisma.db.js.map