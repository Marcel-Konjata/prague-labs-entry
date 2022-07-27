import { FC } from "react";
import styled from "styled-components";
import { Caravan } from "../../api/caravans/types";
import { CaravanCard } from "./card/CaravanCard";

const Container = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-wrap: wrap;
  padding: 3.2rem 1.6rem;
  justify-content: center;
`;

interface CaravansSearchResultsProps {
  caravansResults: Caravan[];
}

export const CaravansSearchResults: FC<CaravansSearchResultsProps> = ({
  caravansResults,
}) => {
  return (
    <Container>
      {caravansResults.map((caravan) => (
        <CaravanCard {...caravan} key={caravan.name} />
      ))}
    </Container>
  );
};
