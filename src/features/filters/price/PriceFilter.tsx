import { FC, Fragment, useState } from "react";
import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";
import { RangePicker } from "./RangePicker";
import { PriceInput } from "./PriceInput";
import { PRICE_MAX } from "./constants";

const PriceFilterContainer = styled.div`
  padding: 2rem 3.1rem 2rem 1.6rem;
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

interface PriceFilterProps {
  prop1: string;
}

export const PriceFilter: FC<PriceFilterProps> = ({ prop1 }) => {
  const [rangeMinimumValue, setRangeMinimumValue] = useState(0);
  const [rangeMaximumValue, setRangeMaximumValue] = useState(50);

  return (
    <PriceFilterContainer>
      <PriceFilterTitle>Cena za den</PriceFilterTitle>
      <RangePicker
        rangeMinimumValue={rangeMinimumValue}
        setRangeMinimumValue={setRangeMinimumValue}
        rangeMaximumValue={rangeMaximumValue}
        setRangeMaximumValue={setRangeMaximumValue}
      />
      <InputsContainer>
        <PriceInput
          inputValue={rangeMinimumValue}
          placeholderText={"Od"}
          setInputValue={setRangeMinimumValue}
          maxNumberConstrain={PRICE_MAX}
        />
        <PriceInput
          inputValue={rangeMaximumValue}
          setInputValue={setRangeMaximumValue}
          placeholderText={"Do"}
          maxNumberConstrain={PRICE_MAX}
        />
      </InputsContainer>
    </PriceFilterContainer>
  );
};
