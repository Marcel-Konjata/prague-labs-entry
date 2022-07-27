import React, { FC, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Caravan, VehicleType } from "../../api/caravans/types";
import { CaravanCard } from "./card/CaravanCard";
import { PRICE_MAX, PRICE_MIN } from "../filters/price/constants";
import { useFiltersContext } from "../filters/FiltersContext";
import deepEqual from "deep-equal";

const Container = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-wrap: wrap;
  padding: 3.2rem 1.6rem;
  justify-content: center;
`;

const NextButton = styled.button`
  background: #119383 0% 0% no-repeat padding-box;
  border-radius: 8px;
  padding: 1.2rem 3.5rem;
  color: white;
  cursor: pointer;
`;

const filterCaravans = (
  caravans: Caravan[],
  vehicleTypesSelected: VehicleType[],
  minPrice: number,
  maxPrice: number,
  isImmediatelyAvailable: boolean
) => {
  //skip iterations if not needed -> default is all if nothing is checked
  const isNoTypeSelected = vehicleTypesSelected.length === 0;
  const isPriceAbsoluteMin = minPrice === PRICE_MIN;
  const isPriceAbsoluteMax = maxPrice === PRICE_MAX;
  //skip unnecessary iterations
  if (
    isPriceAbsoluteMin &&
    isNoTypeSelected &&
    isPriceAbsoluteMax &&
    !isImmediatelyAvailable
  ) {
    return caravans;
  }

  return caravans.filter((caravan) => {
    const isInTypeSearch =
      vehicleTypesSelected.length === 0 ||
      vehicleTypesSelected.includes(caravan.vehicleType);

    const isInPriceRange =
      minPrice <= caravan.price && maxPrice >= caravan.price;
    const isAvailable = isImmediatelyAvailable ? caravan.instantBookable : true;

    return isInTypeSearch && isInPriceRange && isAvailable;
  });
};

interface CaravansSearchResultsProps {
  caravansResults: Caravan[];
}

export const CaravansSearchResults: FC<CaravansSearchResultsProps> = ({
  caravansResults,
}) => {
  const { minPrice, maxPrice, isImmediatelyAvailable, typeSelected } =
    useFiltersContext();
  const filteredData = filterCaravans(
    caravansResults,
    typeSelected,
    minPrice,
    maxPrice,
    isImmediatelyAvailable
  );

  return (
    <>
      <MemoisedResults data={filteredData} />
    </>
  );
};

const FilteredResults: FC<{ data: Caravan[] }> = ({ data }) => {
  const [countToDisplay, setCountToDisplay] = useState(5);
  const dataToDisplay = useMemo(
    () => data.filter((value, index) => index <= countToDisplay),
    [countToDisplay, data]
  );

  const shouldBeButtonVisible = dataToDisplay.length > countToDisplay;

  return (
    <>
      <Container>
        {dataToDisplay.map((caravan, index) => (
          <CaravanCard {...caravan} key={index} />
        ))}
      </Container>
      {shouldBeButtonVisible && (
        <Container>
          <NextButton onClick={() => setCountToDisplay((s) => s + 5)}>
            Načíst další
          </NextButton>
        </Container>
      )}
    </>
  );
};

const MemoisedResults = React.memo(FilteredResults, (prevProps, nextProps) =>
  deepEqual(prevProps, nextProps)
);
