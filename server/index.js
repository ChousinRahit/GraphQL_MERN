const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const PORT = process.env.PORT || 5000;
const schema = require('./schema/schema');
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== 'production',
  })
);

app.listen(PORT, console.log(`Server runnig on PORT ${PORT}`));
