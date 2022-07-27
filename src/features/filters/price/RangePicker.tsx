import React, { FC, SetStateAction } from "react";
import { getTrackBackground, Range } from "react-range";
import {
  InnerTrack,
  RangeContainer,
  RangeThumb,
  RangeTrack,
} from "./RangePicker.styles";
import { PRICE_MAX, PRICE_MIN, RANGE_STEP } from "./constants";
import { useTheme } from "styled-components";

interface RangePickerProps {
  rangeMinimumValue: number;
  setRangeMinimumValue: React.Dispatch<SetStateAction<number>>;
  rangeMaximumValue: number;
  setRangeMaximumValue: React.Dispatch<SetStateAction<number>>;
}

export const RangePicker: FC<RangePickerProps> = ({
  rangeMinimumValue,
  setRangeMaximumValue,
  rangeMaximumValue,
  setRangeMinimumValue,
}) => {
  // @ts-ignore use theme not inferring extended .d.ts file
  const { colors } = useTheme();

  return (
    <RangeContainer>
      <Range
        values={[rangeMinimumValue, rangeMaximumValue]}
        step={RANGE_STEP}
        min={PRICE_MIN}
        max={PRICE_MAX}
        onChange={(values) => {
          setRangeMinimumValue(values[0]);
          setRangeMaximumValue(values[1]);
        }}
        renderTrack={({ props, children }) => (
          <RangeTrack
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
          >
            <InnerTrack
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: [rangeMinimumValue, rangeMaximumValue],
                  colors: [colors.biege, colors.green, colors.biege],
                  min: PRICE_MIN,
                  max: PRICE_MAX,
                }),
              }}
            >
              {children}
            </InnerTrack>
          </RangeTrack>
        )}
        renderThumb={({ props, isDragged }) => (
          <RangeThumb
            {...props}
            style={{
              ...props.style,
            }}
          ></RangeThumb>
        )}
      />
    </RangeContainer>
  );
};
