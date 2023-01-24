module.exports = ({ strapi }) => ({
  auth: {
    secret: process.env.ADMIN_JWT_SECRET,
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT,
  },
});
