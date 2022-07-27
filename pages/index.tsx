import styled from "styled-components";
import { GetServerSideProps, NextPage } from "next";

import { PriceFilter } from "../src/features/filters/price/PriceFilter";
import { CaravanTypeFilter } from "../src/features/filters/caravan-type/CaravanTypeFilter";
import { AccessibilityFilter } from "../src/features/filters/acessibility/AccessibilityFilter";
import { getAllCaravans } from "../src/api/caravans/getAllCaravans";
import { CaravansGetType } from "../src/api/caravans/types";

const Home: NextPage<{ data: CaravansGetType }> = ({ data }) => {
  return (
    <>
      <PriceFilter prop1={""} />
      <CaravanTypeFilter prop1={""} />
      <AccessibilityFilter prop1={""} />
    </>
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
