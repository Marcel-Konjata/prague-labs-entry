import { FC, useCallback, useMemo } from "react";
import { VehicleType } from "../../../api/caravans/types";
import styled, { css } from "styled-components";
import { useFiltersContext } from "../FiltersContext";

const FilterButtonContainer = styled.button<{ isSelected: boolean }>`
  padding: 1.1rem 2rem;
  max-width: 15.6rem;
  min-height: 8.8rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.biege};
  border-radius: 8px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: ${({ theme }) => theme.colors.green};
    `}
`;

const StyledLabel = styled.label`
  text-align: left;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 0.4rem;
`;

const StyledDescription = styled.p`
  text-align: left;
  font: normal normal normal 12px/14px Roboto;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.lightText};
  opacity: 1;
`;

interface FilterButtonProps {
  label: string;
  vehicleType: VehicleType;
  description: string;
}

export const FilterButton: FC<FilterButtonProps> = ({
  label,
  vehicleType,
  description,
}) => {
  const { setTypeSelected, typeSelected } = useFiltersContext();
  const selectType = useCallback(() => {
    if (typeSelected.includes(vehicleType)) {
      setTypeSelected((state) => state.filter((type) => type !== vehicleType));
      return;
    }

    setTypeSelected((state) => state.concat(vehicleType));
  }, [typeSelected, setTypeSelected, vehicleType]);

  const isFilterSelected = useMemo(
    () => typeSelected.includes(vehicleType),
    [vehicleType, typeSelected]
  );

  // this will prevent rerender due to any changes useFiltersContext
  return useMemo(
    () => (
      <FilterButtonContainer onClick={selectType} isSelected={isFilterSelected}>
        <StyledLabel>{label}</StyledLabel>
        <StyledDescription>{description}</StyledDescription>
      </FilterButtonContainer>
    ),
    [selectType, isFilterSelected, label, description]
  );
};
