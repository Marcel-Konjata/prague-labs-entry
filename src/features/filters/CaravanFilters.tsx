import React, { FC } from "react";
import { PriceFilter } from "./price/PriceFilter";
import { CaravanTypeFilter } from "./caravan-type/CaravanTypeFilter";
import { AccessibilityFilter } from "./acessibility/AccessibilityFilter";
import styled from "styled-components";
import { MaxWidthContentContainer } from "styles/reusables";

const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: baseline;
    border-bottom: 1px solid ${({ theme }) => theme.colors.biege};
  }
  @media (min-width: ${({ theme }) => theme.bp.xl}) {
    display: grid;
    grid-template-columns: repeat(3, auto);
  }
`;

export const CaravanFilters: FC = () => {
  return (
    <MaxWidthContentContainer>
      <Container>
        <PriceFilter prop1={""} />
        <CaravanTypeFilter prop1={""} />
        <AccessibilityFilter prop1={""} />
      </Container>
    </MaxWidthContentContainer>
  );
};
