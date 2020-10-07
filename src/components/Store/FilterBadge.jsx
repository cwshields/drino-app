import React from "react";

const FilterBadge = (props) => {
  return (
    <div className="inner-badge-wrap">
      <span
        data-name="filterBadge"
        onClick={() => props.removeFilter(props.filter)}
        className="filter-badge"
      >
        {props.filter}
        <span className="remove-filter">x</span>
      </span>
    </div>
  );
};

export default FilterBadge;
