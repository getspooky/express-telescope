import chalk from 'chalk';
import ip from 'ip';
import Config from '../config/app';
const {log} = console;

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
export default {

  appStarted: function () {
    log(`Server started ! ${chalk.green('✓')}`);
    console.log(`
      ${chalk.bold('Access URLs:')}${divider}
      Localhost: ${chalk.magenta(Config.url)}:${chalk.bold.green(Config.port)}
      LAN: ${chalk.magenta(`http://${ip.address()}`)}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `)
  }

};
