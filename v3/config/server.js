module.exports = ({
  strapi
}) => ({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 1337,
  admin: {
    auth: {
      secret: process.env.ADMIN_JWT_SECRET || '418f42963a2d656c06c8e64c51bbe977',
    },
  },
});
