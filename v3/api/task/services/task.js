"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = ({ strapi }) => {
  return {
    /**
     * Promise to fetch all records
     *
     * @return {Promise}
     */
    find(params, _populate) {
      return strapi
        .query("task")
        .findMany(params, ["chapters", "chapters.section.slug"]);
    },
  };
};
