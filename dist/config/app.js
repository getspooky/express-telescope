"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../helpers/index"));
const path_1 = __importDefault(require("path"));
const { env } = index_1.default;
exports.default = {
    /*
     |--------------------------------------------------------------------------
     | Application URL
     |--------------------------------------------------------------------------
     */
    'url': env('APP_URL', 'http://localhost'),
    /*
     |--------------------------------------------------------------------------
     | Application PORT
     |--------------------------------------------------------------------------
     */
    'port': env('PORT', 5000),
    /*
     |--------------------------------------------------------------------------
     | PUBLIC URL
     |--------------------------------------------------------------------------
     */
    'public_url': env('PUBLIC_URL', path_1.default.join(__dirname, '../public')),
};
//# sourceMappingURL=app.js.map