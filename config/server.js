module.exports = ({
  strapi
}) => ({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 1337,
  app: {
    keys: ['strapi', 'strapi'],
  },
});
