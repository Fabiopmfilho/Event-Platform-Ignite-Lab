import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tiwn1x03m701uiccq6h189/master',
  cache: new InMemoryCache()
});