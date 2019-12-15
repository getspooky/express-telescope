"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * Gets the value of an environment variable. Supports boolean, empty and null.
     *
     * @exports
     * @function
     * @name env
     * @param key
     * @param value
     * @returns {*}
     */
    env: function (key, value) {
        return process.env[key] || value;
    },
};
//# sourceMappingURL=index.js.map