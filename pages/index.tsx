import styled from "styled-components";
import { GetServerSideProps, NextPage } from "next";
import { getAllCaravans } from "../src/api/caravans/getAllCaravans";
import { CaravansGetType } from "../src/api/caravans/types";
import { CaravansSearchResults } from "../src/features/caravans/CaravansSearchResults";
import { CaravanFilters } from "../src/features/filters/CaravanFilters";
import { FiltersContextProvider } from "../src/features/filters/FiltersContext";
import Head from "next/head";

const Home: NextPage<{ data: CaravansGetType }> = ({ data }) => {
  return (
    <FiltersContextProvider>
      <Head>
        <title>prague labs karavany</title>
        <meta />
        <meta property="og:title" content="CSS grid: mřížka v kostce (Video)" />
        <meta
          property="og:description"
          content="Husto krutoprisne super rychle udelanej content"
        />
        <meta
          property="og:image"
          content="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768"
        />
        <meta property="og:url" content="https://fakeURL" />
        <meta property="og:site_name" content="Prague Swag" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Prague Swag" />
      </Head>
      <CaravanFilters />
      <CaravansSearchResults caravansResults={data.items} />
    </FiltersContextProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  let data = undefined;
  try {
    data = await getAllCaravans();
  } catch (e) {
    console.error("failed to fetch");
  }
  return { props: { data } };
};
