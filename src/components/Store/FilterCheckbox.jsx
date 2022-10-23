import React from "react";

const FilterCheckbox = (props) => {
  return (
    <div>
      <label htmlFor="ValTech">
        <input
          onChange={() => props.toggleFilter("ValTech")}
          checked={props.activeFilters.includes("ValTech")}
          type="checkbox"
          id="ValTech"
        />
        ValTech
      </label>
    </div>
  );
};

export default FilterCheckbox;
