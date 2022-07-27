import styled, { css } from "styled-components";

export const AbilityToggleContainer = styled.div`
  position: relative;
  max-width: 17.6rem;
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.biege};
  padding: 0.5rem 1rem;
  border-radius: 8px;
`;

export const OptionButton = styled.button<{ isSelected: boolean }>`
  padding: 1rem;
  cursor: pointer;
  :not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.biege};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.biege};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.biege};
    `}
`;
export const OptionsWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.biege};
  z-index: 10;
  background: white;
`;
