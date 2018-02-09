"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton = (function () {
    var instance = null;
    return class Singleton {
        constructor() {
            if (instance) {
                return instance;
            }
            instance = this;
        }
    };
})();
exports.Singleton = Singleton;
//# sourceMappingURL=Singleton.js.map