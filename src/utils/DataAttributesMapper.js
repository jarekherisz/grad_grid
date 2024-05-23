/**
 * Class responsible for mapping HTML data attributes to options.
 */
export class DataAttributesMapper {
    /**
     * Converts kebab-case to camelCase.
     * @param {string} str - The kebab-case string.
     * @return {string} The camelCase string.
     */
    static kebabToCamel(str) {
        return str.replace(/-./g, match => match.charAt(1).toUpperCase());
    }

    /**
     * Parses a string value to its appropriate type (array, number, boolean, or string).
     * @param {string} value - The string value to parse.
     * @return {*} The parsed value.
     */
    static parseValue(value) {
        if (value.startsWith('[') && value.endsWith(']')) {
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        } else if (!isNaN(value)) {
            return Number(value);
        } else if (value === 'true' || value === 'false') {
            return value === 'true';
        }
        return value;
    }

    /**
     * Maps HTML data attributes to an options object.
     * @param {HTMLElement} element - The HTML element to extract data attributes from.
     * @return {Object} The mapped options.
     */
    static map(element) {
        const dataset = element.dataset;
        const options = {};

        for (let key in dataset) {
            if (dataset.hasOwnProperty(key)) {
                const camelKey = this.kebabToCamel(key);
                options[camelKey] = this.parseValue(dataset[key]);
            }
        }

        return options;
    }
}