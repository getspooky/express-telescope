"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const stacktrace_parser_1 = require("stacktrace-parser");
const util_1 = require("util");
const fs_1 = require("fs");
const get_content = util_1.promisify(fs_1.readFile);
const MissingPackageSolution = __importStar(require("./Solutions/MissingPackageSolution.json"));
const PageNotFoundSolution = __importStar(require("./Solutions/PageNotFoundSolution.json"));
/**
 * Register the solutions for the application.
 * @type {object}
 */
const Solution = [
    MissingPackageSolution,
    PageNotFoundSolution,
];
/**
 * Handle Errors.
 *
 * @param req
 * @param res
 * @param err
 * @param next
 * @return {void}
 */
function Telescope({ name, message, stack }, req, res, next) {
    let details = {
        name,
        message,
        stack: null,
        statusCode: 500,
        solution: null
    };
    // set solution details.
    details.solution = Solution.filter((element) => message.includes(element.getErrorTitle))[0] || null;
    if (stack) {
        const trace = stacktrace_parser_1.parse(stack);
        details.stack = trace[0];
        details.stack.frames = trace.length;
        get_content(details.stack['file'], 'utf8').then((data) => {
            details.stack.content = data;
        }).then(() => {
            res.render('ErrorPage.ejs', details);
        });
    }
}
exports.Telescope = Telescope;
//# sourceMappingURL=Telescope.js.map