'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

 module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, _populate) {
    return strapi.query('task').find(params, ['chapters', 'chapters.section.slug']);
  },
};