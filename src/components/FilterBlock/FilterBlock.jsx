import React from "react";
import "./styles.css";
import { useFilterCoins } from "../../helpers/hooks/useFilterCoins";

const FilterBlock = ({ coins, setCoins }) => {
  console.log("-render filter");
  const { setValue, value } = useFilterCoins(setCoins, coins);

  return (
    <div className="filter-block">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="input"
        type="text"
        placeholder="bitcoin"
      />
    </div>
  );
};

export default React.memo(FilterBlock);
