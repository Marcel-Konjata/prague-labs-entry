import { FC, Fragment } from "react";
import { Caravan } from "../../../api/caravans/types";

export const CaravanCard: FC<Caravan> = (props) => {
  return (
    <div>
      <div>carousel</div>
      <div>
        <span>type</span>
        <span>name</span>
      </div>
      <div>
        <p>location</p>
        <div>
          <div>
            icon <span>pocet osob</span>
          </div>
          <div>
            icon <span>pocet posteli</span>
          </div>
          <div>icon toaleta </div>
          <div>icon sprcha </div>
        </div>
      </div>
      <div>
        <div>cena od</div>
        <div>cena / den</div>
      </div>
    </div>
  );
};
