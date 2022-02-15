import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { ProductListing } from '../components/product-listing';
import { container, intro } from './index.module.css';

export const query = graphql`
    query {
        shopifyCollection(handle: { eq: "frontpage" }) {
            products {
                ...ProductCard
            }
        }
    }
`;

const Hero = () => {
  return (
    <div className={container}>
      <h1 className={intro}>Welcome to the Jamified Webshop - Gatsby
        Edition!</h1>
    </div>
  );
};

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  );
}
