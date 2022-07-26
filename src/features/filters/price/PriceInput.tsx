import React, { FC, SetStateAction } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 18px;
  border: 1px solid #edeae3;
  border-radius: 8px;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const StyledInPut = styled.input`
  padding: 1rem;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
  color: #1f2244;
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
  color: #9c8c8c;
  user-select: none;
`;

interface PriceInputProps {
  inputValue: number;
  setInputValue: React.Dispatch<SetStateAction<number>>;
  placeholderText?: string;
  maxNumberConstrain: number;
}

export const PriceInput: FC<PriceInputProps> = ({
  inputValue,
  setInputValue,
  placeholderText = "",
  maxNumberConstrain,
}) => {
  const onValueChange = (value: string) => {
    if (value === "" || value == null) {
      setInputValue(0);
      return;
    }

    const valueAsNumber = parseInt(value);

    if (valueAsNumber > maxNumberConstrain) {
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
      />

      <CurrencyLabel>Kč</CurrencyLabel>
    </InputContainer>
  );
};
