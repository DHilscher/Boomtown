import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './api/schema';

const app = express();
const GQL_PORT = 5001;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }));

app.listen(GQL_PORT, () => console.log(
  `GraphQL server is running on http://localhost:${GQL_PORT}/graphql`
))