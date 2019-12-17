import express, {Response,Request} from 'express';
import {Telescope} from "../lib/Telescope";
import Config from '../config/app';
import path from 'path';
const {public_url} = Config;
// Create Express server
const app = express();

// Express configuration
app.set("views", path.join(__dirname, "../resources/views"));
app.set("view engine", "ejs");
app.use(express.static(public_url));

app.get('/telescope', function (req: Request, res: Response) {
  throw new Error("Unauthorized error: Access to this resource is denied");
});

app.use(Telescope);

export default app;
