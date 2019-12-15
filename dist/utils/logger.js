"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const ip_1 = __importDefault(require("ip"));
const app_1 = __importDefault(require("../config/app"));
const { log } = console;
const divider = chalk_1.default.gray('\n-----------------------------------');
/**
 * Logger middleware, you can customize it to make messages more personal
 */
exports.default = {
    appStarted: function () {
        log(`Server started ! ${chalk_1.default.green('✓')}`);
        console.log(`
      ${chalk_1.default.bold('Access URLs:')}${divider}
      Localhost: ${chalk_1.default.magenta(app_1.default.url)}:${chalk_1.default.bold.green(app_1.default.port)}
      LAN: ${chalk_1.default.magenta(`http://${ip_1.default.address()}`)}
      ${chalk_1.default.blue(`Press ${chalk_1.default.italic('CTRL-C')} to stop`)}
    `);
    }
};
//# sourceMappingURL=logger.js.map