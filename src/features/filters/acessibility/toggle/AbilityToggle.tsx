import { FC, useState } from "react";

import {
  AbilityToggleContainer,
  ToggleButton,
  OptionButton,
  OptionsWrapper,
} from "./AbilityToggle.styles";

import ChevronDown from "@svg/chevronArrow.svg";

interface AbilityToggleProps {
  isImmediatelyAvailable: boolean;
}

export const AbilityToggle: FC<AbilityToggleProps> = ({
  isImmediatelyAvailable,
}) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  return (
    <AbilityToggleContainer>
      <ToggleButton
        aria-label={"available-select-menu"}
        onClick={() => setIsOptionOpen((state) => !state)}
      >
        <span>{isImmediatelyAvailable ? "Ano" : "Ne"}</span>
        <ChevronDown />
      </ToggleButton>

      {isOptionOpen && (
        <OptionsWrapper>
          <OptionButton
            aria-label={"option-yes"}
            isSelected={isImmediatelyAvailable}
          >
            Ano
          </OptionButton>
          <OptionButton
            aria-label={"option-no"}
            isSelected={!isImmediatelyAvailable}
          >
            Ne
          </OptionButton>
        </OptionsWrapper>
      )}
    </AbilityToggleContainer>
  );
};
