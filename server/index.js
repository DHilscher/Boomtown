import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './api/schema';
import createLoaders from './api/loaders';
import cors from 'cors';

const app = express();
const GQL_PORT = 5001;

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { loaders: createLoaders() } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }));

app.listen(GQL_PORT, () => console.log(
  `GraphQL server is running on http://localhost:${GQL_PORT}/graphql`
))
