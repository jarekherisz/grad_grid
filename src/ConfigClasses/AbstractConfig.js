export class AbstractConfig {
    /**
     * Set multiple options.
     * @param {Object} config - The configuration options.
     */
    setConfig(config) {
        for (let key in config) {
            if (config.hasOwnProperty(key)) {
                this[key] = config[key];
            }
        }
    }
}