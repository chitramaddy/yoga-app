import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckwlkfio21lva01xuhteu0irb/master"
);

export const getQuotes = async () => {
  const { quotes } = await graphcms.request(
    `{
  quotes {
    id
    quote {
      text
    }
    source
  }

}`
  );

  return quotes;
};
