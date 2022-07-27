import styled from "styled-components";

import { PriceFilter } from "../src/features/filters/price/PriceFilter";
import { CaravanTypeFilter } from "../src/features/filters/caravan-type/CaravanTypeFilter";

const Home = () => {
  return (
    <>
      <PriceFilter prop1={""} />
      <CaravanTypeFilter prop1={""} />
    </>
  );
};

const PageWrapper = styled.div``;

export default Home;
