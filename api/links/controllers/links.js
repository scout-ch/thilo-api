'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.links.search(ctx.query);
    } else {
      entities = await strapi.services.links.find(ctx.query);
    }

    return entities.map(entity => {
      let chapter = entity['chapter']
      let slug = chapter ? chapter['slug_with_section'] : ''
      return {
        id: entity['id'],
        key: entity['key'],
        title: entity['title'],
        link: entity['Link'],
        slug: slug
      }
    });
  },
};
