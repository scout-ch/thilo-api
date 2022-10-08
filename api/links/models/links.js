'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      const chapter = data.chapter
      const link = data.Link

      if (typeof chapter === 'undefined') {
        if (link === null) {
          throw strapi.errors.badRequest('Link oder Kapitel auswählen.');
        }
      } else {
        if (link === null && chapter === null) {
          throw strapi.errors.badRequest('Link oder Kapitel auswählen');
        }

        if (chapter !== null && link !== null) {
          throw strapi.errors.badRequest('Nur Link oder Kapitel, nicht beides');
        }
      }
    },
    beforeUpdate: async (params, data) => {
      const chapter = data.chapter
      const link = data.Link

      if (typeof chapter === 'undefined') {
        if (link === null) {
          throw strapi.errors.badRequest('Bitte Link oder Kapitel auswählen.');
        }
      } else {
        if (link === null && chapter === null) {
          throw strapi.errors.badRequest('Bitte Link oder Kapitel auswählen');
        }

        if (chapter !== null && link !== null) {
          throw strapi.errors.badRequest('Nur Link oder Kapitel, nicht beides');
        }
      }
    },
  },
};
