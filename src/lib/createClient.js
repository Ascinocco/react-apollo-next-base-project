import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { DEV_ENDPOINT, PROD_ENDPOINT } from '../../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? DEV_ENDPOINT : PROD_ENDPOINT,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    clientState: {
      resolvers: {},
      defaults: {},
    },
  });
}

export default withApollo(createClient);
