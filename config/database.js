const path = require('path');

module.exports = ({
  strapi
}) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', process.env.DATABASE_FILENAME || '.tmp / data.db'),
    },
    useNullAsDefault: true,
  },
});
