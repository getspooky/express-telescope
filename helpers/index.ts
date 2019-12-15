export default {

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
  env: function (key:string, value?:string|number|boolean|object):any {
    return process.env[key] || value;
  },

};
