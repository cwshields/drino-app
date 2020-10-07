import React from "react";
import { NavLink } from "react-router-dom";

// import FilterCheckbox from "./FilterCheckbox";

const SideNav = (props) => {
  // const filters = [
  //   "New",
  //   "On Sale",
  //   "Special Offer",
  //   "ValTech",
  //   "MT",
  //   "Fluentic",
  //   "Nero",
  //   "Innovage",
  //   "Visional",
  //   "Dorcel",
  //   "Android",
  //   "iOS",
  //   "Other",
  // ];

  // const filtersMap = filters.map((filter, index) => {
  //   return (
  //     <FilterCheckbox
  //       filter={filter}
  //       index={index}
  //       toggleFilter={props.toggleFilter}
  //       activeFilters={props.activeFilters}
  //     />
  //   )
  // })

  return (
    <div className="side-nav-wrap">
      <div className="search-wrap">
        <button /*onClick={}*/ name="cartOpen" className="">
          <i className="fas fa-search"></i>
        </button>
        <input onChange={props.handleChange} type="text" name="search" />
      </div>
      <div className="nav-sect">
        <div className="side-nav-title">Shop</div>
        <hr />
        <NavLink to="/store/phones" className="category side-nav-props">
          <div className="img-wrap">
            <img
              alt="📱"
              src="https://img.icons8.com/windows/32/f5f5f5/two-smartphones.png"
            />
          </div>
          Phones
        </NavLink>
        <NavLink
          to="/store/tablets-devices"
          className="category side-nav-props"
        >
          <div className="img-wrap">
            <img
              alt="📟"
              src="https://img.icons8.com/ios-glyphs/30/f5f5f5/ipad-mini.png"
            />
          </div>
          Tablets & Devices
        </NavLink>
        <button
          onClick={props.toggleEl}
          name="accesDrpDwn"
          className="category-wrap side-nav-props"
        >
          <div className="drpdwn-btn-container">
            <div className="drpdwn-btn-wrap">
              <div className="img-wrap">
                <img
                  alt="🎧"
                  src="https://img.icons8.com/material-outlined/24/f5f5f5/headphones.png"
                />
              </div>
              Accessories
            </div>
            {props.accesDrpDwn ? (
              <i className="fas fa-angle-down"></i>
            ) : (
              <i className="fas fa-angle-left"></i>
            )}
          </div>
        </button>
        <div className={props.accesDrpDwn ? "drpdwn-list" : "display-none"}>
          <NavLink to="/store/cases-covers" className="drpdwn-item">
            Cases & Covers
          </NavLink>
          <NavLink to="/store/chargers-adapters" className="drpdwn-item">
            Chargers & Adapters
          </NavLink>
          <NavLink to="/store/headphones" className="drpdwn-item">
            Headphones
          </NavLink>
          <NavLink to="/store/mounts-docks-stands" className="drpdwn-item">
            {" "}
            Mounts, Docks & Stands
          </NavLink>
          <NavLink to="/store/screen_protectors" className="drpdwn-item">
            Screen Protectors
          </NavLink>
        </div>
      </div>
      <div className="nav-sect">
        <div className="title-wrap">
          <div className="side-nav-title">Filters</div>
          <div onClick={props.resetFilters} className="clear-btn">Clear All</div>
        </div>
        <hr />
        <button
          onClick={props.toggleEl}
          name="dealsDrpDwn"
          className="filter-wrap side-nav-props"
        >
          Deals
          {props.dealsDrpDwn ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-left"></i>
          )}
        </button>
        <div className={props.dealsDrpDwn ? "drpdwn-list" : "display-none"}>
          <div>
            <label htmlFor="New">
              <input
                onChange={() => props.toggleFilter("New")}
                checked={props.activeFilters.includes("New")}
                type="checkbox"
                id="New"
              />
              New
            </label>
          </div>
          <div>
            <label htmlFor="On Sale">
              <input
                onChange={() => props.toggleFilter("On Sale")}
                checked={props.activeFilters.includes("On Sale")}
                type="checkbox"
                id="On Sale"
              />
              On Sale
            </label>
          </div>
          <div>
            <label htmlFor="Special Offer">
              <input
                onChange={() => props.toggleFilter("Special Offer")}
                checked={props.activeFilters.includes("Special Offer")}
                type="checkbox"
                id="Special Offer"
              />
              Special Offer
            </label>
          </div>
        </div>
        <button
          onClick={props.toggleEl}
          name="brandsDrpDwn"
          className="filter-wrap side-nav-props"
        >
          Brands
          {props.brandsDrpDwn ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-left"></i>
          )}
        </button>
        <div className={props.brandsDrpDwn ? "drpdwn-list" : "display-none"}>
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
          <div>
            <label htmlFor="mt">
              <input
                onChange={() => props.toggleFilter("MT")}
                checked={props.activeFilters.includes("MT")}
                type="checkbox"
                id="mt"
                name="MT"
              />
              NT
            </label>
          </div>
          <div>
            <label htmlFor="fluentic">
              <input
                onChange={() => props.toggleFilter("Fluentic")}
                checked={props.activeFilters.includes("Fluentic")}
                type="checkbox"
                id="fluentic"
                name="Fluentic"
              />
              Fluentic
            </label>
          </div>
          <div>
            <label htmlFor="Nero">
              <input
                onChange={() => props.toggleFilter("Nero")}
                checked={props.activeFilters.includes("Nero")}
                type="checkbox"
                id="Nero"
              />
              Nero
            </label>
          </div>
          <div>
            <label htmlFor="Innovage">
              <input
                onChange={() => props.toggleFilter("Innovage")}
                checked={props.activeFilters.includes("Innovage")}
                type="checkbox"
                id="Innovage"
              />
              Innovage
            </label>
          </div>
          <div>
            <label htmlFor="Visional">
              <input
                onChange={() => props.toggleFilter("Visional")}
                checked={props.activeFilters.includes("Visional")}
                type="checkbox"
                id="Visional"
              />
              Visional
            </label>
          </div>
          <div>
            <label htmlFor="Aerocel">
              <input
                onChange={() => props.toggleFilter("Aerocel")}
                checked={props.activeFilters.includes("Aerocel")}
                type="checkbox"
                id="Aerocel"
              />
              Aerocel
            </label>
          </div>
          <div>
            <label htmlFor="Dorcel">
              <input
                onChange={() => props.toggleFilter("Dorcel")}
                checked={props.activeFilters.includes("Dorcel")}
                type="checkbox"
                id="Dorcel"
              />
              Dorcel
            </label>
          </div>
          <div>
            <label htmlFor="M-Brand">
              <input
                onChange={() => props.toggleFilter("M-Brand")}
                checked={props.activeFilters.includes("M-Brand")}
                type="checkbox"
                id="M-Brand"
              />
              M-Brand
            </label>
          </div>
        </div>
        <button
          onClick={props.toggleEl}
          name="opSysDrpDwn"
          className="filter-wrap side-nav-props"
        >
          Operating System
          {props.opSysDrpDwn ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-left"></i>
          )}
        </button>
        <div className={props.opSysDrpDwn ? "drpdwn-list" : "display-none"}>
          <div>
            <label htmlFor="Android">
              <input
                onChange={() => props.toggleFilter("Android")}
                checked={props.activeFilters.includes("Android")}
                type="checkbox"
                id="Android"
              />
              Android
            </label>
          </div>
          <div>
            <label htmlFor="iOS">
              <input
                onChange={() => props.toggleFilter("iOS")}
                checked={props.activeFilters.includes("iOS")}
                type="checkbox"
                id="iOS"
              />
              iOS
            </label>
          </div>
          <div>
            <label htmlFor="Other">
              <input
                onChange={() => props.toggleFilter("Other")}
                checked={props.activeFilters.includes("Other")}
                type="checkbox"
                id="Other"
              />
              Other
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
