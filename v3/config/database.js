module.exports = ({ strapi }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: process.env.DATABASE_FILENAME || ".tmp / data.db",
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
