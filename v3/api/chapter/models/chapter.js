'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 const slugify = require('slugify');

 module.exports = {
   lifecycles: {
     beforeCreate: async (data) => {
      if (data.title) {
        const sectionId = data.section
        const section = await strapi.services.section.findOne({id: sectionId});
        if (section) {
          data.slug = slugify(data.title);
          data.slug_with_section = section.slug + '#' + slugify(data.title);
        } else {
          data.slug = slugify(data.title);
        }
      }
     },
     beforeUpdate: async (params, data) => {
       if (data.title) {
         const sectionId = data.section
         const section = await strapi.services.section.findOne({id: sectionId});
         if (section) {
           data.slug = slugify(data.title);
           data.slug_with_section = section.slug + '#' + slugify(data.title);
         } else {
           data.slug = slugify(data.title);
         }
       }  
     },
   },
 };
