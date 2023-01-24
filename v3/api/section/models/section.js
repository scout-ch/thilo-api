"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require("slugify");

module.exports = {
  beforeCreate: async (data) => {
    if (data.menu_name) {
      data.slug = slugify(data.menu_name);
    }
  },
  beforeUpdate: async (params, data) => {
    if (data.menu_name) {
      data.slug = slugify(data.menu_name);
    }
  },
};
