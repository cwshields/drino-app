import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../../assets/scss/store.scss";
import axios from "axios";

import DrinoNavbar from "../Navbar/DrinoNavbar";
import Footer from "../Navbar/Footer";
import StoreList from "../Store/StoreList";

import mobile3 from "../../assets/images/mobile3.png";
import SideNav from "./SideNav";
import Cart from "./Cart";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      storeItems: [],
      filteredItems: [],
      cart: 0, // to be changed to array of objects(shop items)
      cartOpen: false,
      category: '',
      // drop-down menues
      accesDrpDwn: false,
      dealsDrpDwn: false,
      brndsDrpDwn: false,
      opSysDrpDwn: false,
      // filters
      activeFilters: [],
      search: '',
    };
  }

  // updates page title category using dictionary and react router location props
  updateCategory = (prevProps) => {
    const { storeItems } = this.state
    const { location } = this.props
    const category = {
      '/store/phones': 'Phones',
      '/store/tablets-devices': 'Tablets & Devices',
      '/store/cases-covers': 'Cases & Covers',
      '/store/chargers-adapters': 'Chargers & Adapters',
      '/store/headphones': 'Headphones',
      '/store/mounts-docks-stands': 'Mounts, Docks & Stands',
      '/store/screen_protectors': 'Screen Protectors',
    }
    if (!prevProps || location !== prevProps.location) {
      const result = storeItems.filter(item => item.category === category[location.pathname])
      this.setState({ category: category[location.pathname], filteredItems: result });
    }
  }
  
  componentDidUpdate = (prevProps) => {
    this.updateCategory(prevProps)
  }
  
  getItems = () => {
    axios
    .get("/api/items")
    .then((res) => {
      this.setState({ storeItems: res.data });
      this.updateCategory()
    })
    .catch((err) => console.log(err));
  };
  
  componentDidMount = () => {
    this.getItems()
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // const { activeFilters } = this.state

  removeFilter = (str) => {
    if (this.state.activeFilters.includes(str)) {
      const i = this.state.activeFilters.indexOf(str)
      this.state.activeFilters.splice(i, 1)
    }
    this.componentDidUpdate()
  }

  addFilter = (str) => {
    if (!this.state.activeFilters.includes(str)) {
      this.state.activeFilters.push(str)
    }
    this.componentDidUpdate()
  }

  resetFilters = () => {
    this.setState({ activeFilters: [] });
  }

  toggleFilter = (str) => {
    if (this.state.activeFilters.includes(str)) {
      this.removeFilter(str)
    } else {
      this.addFilter(str)
      if (this.state.storeItems.filter(e => e === str).length > 0) {
        this.state.activeFilters.push()
      }
    }
  }

  toggleEl = (e) => {
    let el = e.target;
    while (!el.name) {
      el = el.parentElement;
    }
    const { name } = el;
    this.setState({ [name]: !this.state[name] });
  };

  addItem = () => {
    this.setState({ cart: this.state.cart + 1 });
  };

  removeItem = () => {
    if (this.state.cart > 0) {
      this.setState({ cart: this.state.cart - 1 });
    }
  };

  resetCart = () => {
    this.setState({ cart: 0 });
  };

  submitSearch() {
    
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state.filteredItems);
    return (
      <div className="drino">
        <DrinoNavbar></DrinoNavbar>
        <main>
          <div className="store-body">
            <div className="store-container">
              <div className="feat-container">
                <img className="feat-img" src={mobile3} alt="featured item" />
                <div className="feat-info">
                  <div className="brand">Innovage</div>
                  <div className="model">ModelX Nitro 5G</div>
                  <div className="specs">
                    <ul>
                      <li>5G Network</li>
                      <li>256GB Storage</li>
                      <li>12MP Camera</li>
                    </ul>
                  </div>
                  <Button className="" variant="success">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="store-browse">
                <SideNav
                  resetFilters={this.resetFilters}
                  toggleFilter={this.toggleFilter}
                  toggleEl={this.toggleEl}
                  scrollToTop={this.scrollToTop}
                  handleChange={this.handleChange}
                  {...this.state}
                />
                <StoreList
                  removeFilter={this.removeFilter}
                  addItem={this.addItem}
                  {...this.state}
                />
              </div>
            </div>
            <Footer></Footer>
          </div>
          <Cart
            toggleEl={this.toggleEl}
            removeItem={this.removeItem}
            resetCart={this.resetCart}
            {...this.state}
          />
        </main>
      </div>
    );
  }
}

export default Store;
