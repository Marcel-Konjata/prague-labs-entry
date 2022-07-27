import { FC, Fragment } from "react";
import { AbilityToggle } from "./toggle/AbilityToggle";
import styled from "styled-components";

const AccessibilityFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.3rem 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.biege};
`;

const FilterTitle = styled.p`
  text-align: left;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 2rem;
`;

interface AccessibilityFilterProps {
  prop1: string;
}

export const AccessibilityFilter: FC<AccessibilityFilterProps> = ({
  prop1,
}) => {
  return (
    <AccessibilityFilterContainer>
      <FilterTitle>Okamžitá rezervace</FilterTitle>
      <AbilityToggle isImmediatelyAvailable={true} />
    </AccessibilityFilterContainer>
  );
};
