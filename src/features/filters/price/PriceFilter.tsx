import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { RangePicker } from "./RangePicker";
import { PriceInput } from "./PriceInput";
import { PRICE_MAX, PRICE_MIN } from "./constants";
import { useFiltersContext } from "../FiltersContext";

const PriceFilterContainer = styled.div`
  padding: 2rem 3.1rem 2rem 1.6rem;
  max-width: 32.8rem;
  @media (min-width: ${({ theme }) => theme.bp.xl}) {
    justify-self: end;
  }
`;

const PriceFilterTitle = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  user-select: none;
  text-align: left;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
`;

const InputsContainer = styled.div`
  display: flex;
`;

export const PriceFilter: FC = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useFiltersContext();

  useEffect(() => {
    if (minPrice >= maxPrice) {
      setMaxPrice(minPrice);
    }
  }, [minPrice, maxPrice, setMaxPrice]);

  return (
    <PriceFilterContainer>
      <PriceFilterTitle>Cena za den</PriceFilterTitle>
      <RangePicker
        rangeMinimumValue={minPrice}
        setRangeMinimumValue={setMinPrice}
        rangeMaximumValue={maxPrice}
        setRangeMaximumValue={setMaxPrice}
      />
      <InputsContainer>
        <PriceInput
          inputValue={minPrice}
          placeholderText={"Od"}
          setInputValue={setMinPrice}
          maxNumberConstrain={PRICE_MAX}
          minNumberConstrain={PRICE_MIN}
        />
        <PriceInput
          inputValue={maxPrice}
          setInputValue={setMaxPrice}
          placeholderText={"Do"}
          maxNumberConstrain={PRICE_MAX}
          minNumberConstrain={PRICE_MIN}
        />
      </InputsContainer>
    </PriceFilterContainer>
  );
};
