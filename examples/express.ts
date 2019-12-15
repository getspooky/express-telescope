import express, {Response,Request} from 'express';
import {Telescope} from "../lib/Telescope";
import log from '../utils/logger';
import Config from '../config/app';
import path from 'path';
const {appStarted} = log;
const {public_url, port} = Config;
// Create Express server
const app = express();

// Express configuration
app.set("views", path.join(__dirname, "../resources/views"));
app.set("view engine", "ejs");
app.use(express.static(public_url));

app.get('/test', function (req: Request, res: Response) {
  throw new Error("Unauthorized error: Access to this resource is denied");
});

app.use(Telescope);

// Start Express server
app.listen(port, appStarted);
