import React, {
  createContext,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { VehicleType } from "../../api/caravans/types";

interface FilterContextValues {
  minPrice: number;
  setMinPrice: React.Dispatch<SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<SetStateAction<number>>;
  typeSelected: VehicleType[];
  setTypeSelected: React.Dispatch<SetStateAction<VehicleType[]>>;
  isImmediatelyAvailable: boolean;
  setIsImmediatelyAvailable: React.Dispatch<SetStateAction<boolean>>;
}

const FiltersContext = createContext<FilterContextValues>({
  isImmediatelyAvailable: true,
  maxPrice: 7600,
  minPrice: 2500,
  typeSelected: [],
  setIsImmediatelyAvailable: () => {},
  setMaxPrice: () => {},
  setMinPrice: () => {},
  setTypeSelected: () => {},
});

export const useFiltersContext = () => useContext(FiltersContext);

/**@description context that holds filters values
 * BEWARE!!! every component using context hook is rendered every single time when value change
 * due to often changes via range select use memoization as intermediate layer between useFilterContext and actual component
 * for example
 * const minPrice = usefilters()
 * <Memo minPrice={minPrice} />
 *
 * for more interesting info read from Dan Abramov how context and fiber works
 * */
export const FiltersContextProvider: FC = ({ children }) => {
  const [typeSelected, setTypeSelected] = useState<VehicleType[]>([]);
  const [maxPrice, setMaxPrice] = useState(7600);
  const [minPrice, setMinPrice] = useState(2500);
  const [isImmediatelyAvailable, setIsImmediatelyAvailable] = useState(true);

  return (
    <FiltersContext.Provider
      value={{
        typeSelected,
        minPrice,
        maxPrice,
        isImmediatelyAvailable,
        setTypeSelected,
        setIsImmediatelyAvailable,
        setMinPrice,
        setMaxPrice,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
