import { FC, useMemo, useState } from "react";

import {
  AbilityToggleContainer,
  ToggleButton,
  OptionButton,
  OptionsWrapper,
} from "./AbilityToggle.styles";

import ChevronDown from "@svg/chevronArrow.svg";
import { useFiltersContext } from "../../FiltersContext";

export const AbilityToggle: FC = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const { isImmediatelyAvailable, setIsImmediatelyAvailable } =
    useFiltersContext();

  return useMemo(
    () => (
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
              onClick={() => setIsImmediatelyAvailable(true)}
            >
              Ano
            </OptionButton>
            <OptionButton
              aria-label={"option-no"}
              isSelected={!isImmediatelyAvailable}
              onClick={() => setIsImmediatelyAvailable(false)}
            >
              Ne
            </OptionButton>
          </OptionsWrapper>
        )}
      </AbilityToggleContainer>
    ),
    [
      isOptionOpen,
      setIsOptionOpen,
      isImmediatelyAvailable,
      setIsImmediatelyAvailable,
    ]
  );
};
