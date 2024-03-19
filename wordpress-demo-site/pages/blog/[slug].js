import { gql } from "@apollo/client";
import client from "client";
import { BlogPost } from "components/Blog";
import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import navbarMocks from "components/NavBar/mocks";
import React from "react";

export default function Blog({ data }) {
  console.log(data, "dataa");
  return (
    <div>
      <NavBar {...navbarMocks} />
      <BlogPost {...data?.blogs?.edges[0]?.node} />
    </div>
  );
}

export async function getStaticPaths() {
  const pagesWithSlugs = await client.query({
    query: gql`
      query AllBlogsQuery {
        blogs {
          edges {
            node {
              title
              uri
              slug
            }
          }
        }
      }
    `,
  });
  const paths =
    pagesWithSlugs?.blogs?.edges?.map(
      ({ node: { slug } }) => `/blog/${slug}`
    ) || [];

  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  console.log(params, "params");
  const uri = params?.slug;
  console.log(uri, "uri");
  const { data } = await client.query({
    query: gql`
      query AllBlogsQuery {
        blogs {
          edges {
            node {
              title
              uri
              slug
              content
              featuredImage {
                node {
                  sourceUrl
                  authorId
                }
              }
              authorImage {
                authorImage {
                  sourceUrl
                }
              }
            }
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
      data,
    },
    revalidate: 10,
  };
}

export async function getStaticQuery() {}
