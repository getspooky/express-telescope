import app from './express';
import log from "../utils/logger";
import Config from '../config/app';
const {port} = Config;
const {appStarted} = log;

// Start Express server
app.listen(port, appStarted);
