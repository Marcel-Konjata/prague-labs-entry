import React, { FC, memo, SetStateAction, useState } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 18px;
  border: 1px solid ${({ theme }) => theme.colors.biege};
  border-radius: 8px;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const StyledInPut = styled.input`
  padding: 1rem;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.primaryText};
  opacity: 1;
  width: 100%;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

const CurrencyLabel = styled.span`
  text-align: right;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.lightText};
  user-select: none;
`;

interface PriceInputProps {
  inputValue: number;
  setInputValue: React.Dispatch<SetStateAction<number>>;
  placeholderText?: string;
  maxNumberConstrain: number;
  minNumberConstrain: number;
}

const Input: FC<PriceInputProps> = ({
  inputValue,
  setInputValue,
  placeholderText = "",
  maxNumberConstrain,
  minNumberConstrain,
}) => {
  //callback is not necessary due to memo
  const onValueChange = (value: string) => {
    if (value === "" || value == null) {
      setInputValue(minNumberConstrain);
      return;
    }

    const valueAsNumber = parseInt(value);

    if (valueAsNumber <= minNumberConstrain) {
      setInputValue(minNumberConstrain);
      return;
    }

    if (valueAsNumber >= maxNumberConstrain) {
      setInputValue(maxNumberConstrain);

      return;
    }

    setInputValue(valueAsNumber);
  };

  return (
    <InputContainer>
      <NumberFormat
        customInput={StyledInPut}
        thousandSeparator={" "}
        value={inputValue}
        placeholder={placeholderText}
        onValueChange={(values) => onValueChange(values.value)}
        allowNegative={false}
        allowedDecimalSeparators={[]}
        allowLeadingZeros={false}
        displayType={"input"}
        isAllowed={({ floatValue }) =>
          (floatValue as number) <= maxNumberConstrain &&
          (floatValue as number) >= minNumberConstrain
        }
      />

      <CurrencyLabel>K??</CurrencyLabel>
    </InputContainer>
  );
};

export const PriceInput = memo(Input);
