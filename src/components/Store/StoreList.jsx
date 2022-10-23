import React from "react";
import StoreItem from "../Store/StoreItem";
import FilterBadge from "./FilterBadge";

const StoreList = (props) => {
  return (
    <div className="store-browse">
      <div className="shop-list">
        <div className="filter-badge-wrap">
          <div className="page-title">{props.category} 
            <span className="item-count">{props.filteredItems.length} items</span>
          </div>
          <div className={ props.activeFilters.length > 0 ? "outer-badge-wrap" : "display-none" }>
            <span className="filters-title">Filters: </span>
            { props.activeFilters.map((filter, index) => {
                return (
                  <FilterBadge
                    key={index}
                    removeFilter={props.removeFilter}
                    filter={filter}
                    {...props}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="shop-item-wrap">
          { props.filteredItems.length === 0
          ? <h2 className="no-items">No items to display...</h2>
          : props.filteredItems.map((item, index) => {
              return (
                <StoreItem
                  key={index}
                  item={item}
                  addItem={props.addItem}
                  removeItem={props.removeItem}
                  itemExists={props.itemExists}
                  toggleItemPage={props.toggleItemPage}
                  {...props}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default StoreList;
