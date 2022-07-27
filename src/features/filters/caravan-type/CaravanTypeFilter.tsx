import { FC } from "react";
import styled from "styled-components";
import { VehicleType } from "../../../api/caravans/types";
import { FilterButton } from "./FilterButton";

const CaravanTypeFilterContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.biege};
  border-bottom: 1px solid ${({ theme }) => theme.colors.biege};
  padding: 1.6rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.bp.sm}) {
    border-bottom: none;
    border-top: none;
  }

  @media (min-width: ${({ theme }) => theme.bp.xl}) {
    border-bottom: none;
    border-top: none;
    border-left: 1px solid ${({ theme }) => theme.colors.biege};
    border-right: 1px solid ${({ theme }) => theme.colors.biege};
  }
`;

const FilterLabel = styled.label`
  text-align: left;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.lightText};
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
`;

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;
interface FilterType {
  vehicleType: VehicleType;
  description: string;
  label: string;
}

const filterTypes: Array<FilterType> = [
  {
    vehicleType: VehicleType.Alcove,
    description: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné.",
    label: "Přívěs",
  },
  {
    vehicleType: VehicleType.BuiltIn,
    description: "Celý byt geniálně poskládaný do dodávky.",
    label: "Vestavba",
  },
  {
    vehicleType: VehicleType.Campervan,
    description: "Obytka s rozměry osobáku, se kterou dojedete všude.",
    label: "Campervan",
  },
  {
    vehicleType: VehicleType.Intergrated,
    description: "Král mezi karavany. Luxus na kolech.",
    label: "Integrál",
  },
];

interface CaravanTypeFilterProps {
  prop1: string;
}

export const CaravanTypeFilter: FC<CaravanTypeFilterProps> = ({ prop1 }) => {
  return (
    <CaravanTypeFilterContainer>
      <FilterLabel>Typ karavanu</FilterLabel>
      <FiltersWrapper>
        {filterTypes.map((filterType) => (
          <FilterButton
            label={filterType.label}
            vehicleType={filterType.vehicleType}
            description={filterType.description}
            key={filterType.vehicleType}
          />
        ))}
      </FiltersWrapper>
    </CaravanTypeFilterContainer>
  );
};
