import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";

export default function page(props) {
  console.log(props, "pages props");
  return <div></div>;
}

export const getStaticProps = async (context) => {
  console.log(context, "contexts");
  const uri = `/${context.params.slug.join("/")}/`;
  console.log(uri, "uri");
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          id
          ... on Page {
            id
            blocks(postTemplate: false)
            title
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      title: data.nodeByUri.title,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });
  return {
    paths: data.pages.nodes
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: false,
  };
};
