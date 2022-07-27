import { FC } from "react";
import { AbilityToggle } from "./toggle/AbilityToggle";
import styled from "styled-components";
import ActionIcon from "@svg/action.svg";

const AccessibilityFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.3rem 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.biege};

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    border-bottom: none;
  }
`;

const FilterTitle = styled.p`
  text-align: left;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  > svg {
    margin-left: 0.8rem;
  }
`;

export const AccessibilityFilter: FC = ({}) => {
  return (
    <AccessibilityFilterContainer>
      <FilterTitle>
        Okamžitá rezervace
        <ActionIcon />
      </FilterTitle>
      <AbilityToggle />
    </AccessibilityFilterContainer>
  );
};
