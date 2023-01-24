"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require("slugify");

module.exports = ({ strapi }) => {
  return {
    beforeCreate: async (data) => {
      if (data.title) {
        data.Slug = slugify(data.title);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.title) {
        data.Slug = slugify(data.title);
      }
    },
  },
};
