import { FC, Fragment } from "react";

interface AccessibilityFilterProps {
  prop1: string;
}

export const AccessibilityFilter: FC<AccessibilityFilterProps> = ({
  prop1,
}) => {
  return (
    <div>
      <p>Okamžitá rezervace</p>
    </div>
  );
};
