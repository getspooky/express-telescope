"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Telescope_1 = require("../lib/Telescope");
const logger_1 = __importDefault(require("../utils/logger"));
const app_1 = __importDefault(require("../config/app"));
const path_1 = __importDefault(require("path"));
const { appStarted } = logger_1.default;
const { public_url, port } = app_1.default;
// Create Express server
const app = express_1.default();
// Express configuration
app.set("views", path_1.default.join(__dirname, "../resources/views"));
app.set("view engine", "ejs");
app.use(express_1.default.static(public_url));
app.get('/test', function (req, res) {
    throw new Error("Unauthorized error: Access to this resource is denied");
});
app.use(Telescope_1.Telescope);
// Start Express server
app.listen(port, appStarted);
//# sourceMappingURL=express.js.map