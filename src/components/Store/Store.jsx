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
    super()
    this.state = {
      storeItems: [],
      filteredItems: [],
      cart: [],
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
    }
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
      this.setState({ category: category[location.pathname], filteredItems: result })
    }
  }

  componentDidMount = () => {
    this.getItems()
  }

  componentDidUpdate = (prevProps) => {
    this.updateCategory(prevProps)
  }
  
  getItems = () => {
    axios
    .get("/api/items")
    .then((res) => {
      this.setState({ storeItems: res.data })
      this.updateCategory()
    })
    .catch((err) => console.log(err))
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  removeFilter = (str) => {
    const { activeFilters } = this.state
    if (activeFilters.includes(str)) {
      const i = activeFilters.indexOf(str)
      activeFilters.splice(i, 1)
    }
    this.componentDidUpdate()
  }
  
  addFilter = (str) => {
    const { activeFilters } = this.state
    if (!activeFilters.includes(str)) {
      activeFilters.push(str)
    }
    this.componentDidUpdate()
  }
  
  resetFilters = () => {
    this.setState({ activeFilters: [] });
  }
  
  toggleFilter = (str) => {
    const { activeFilters, storeItems } = this.state
    if (activeFilters.includes(str)) {
      this.removeFilter(str)
    } else {
      this.addFilter(str)
      if (storeItems.filter(e => e === str).length > 0) {
        activeFilters.push()
      }
    }
  }

  toggleEl = (e) => {
    let el = e.target
    while (!el.name) {
      el = el.parentElement
    }
    const { name } = el
    this.setState({ [name]: !this.state[name] })
  }
  
  itemExists = (id) => {
    return this.state.cart.some(function(item) {
      return item.id === id
    })
  }

  addItem = (item, num) => {
    const { cart } = this.state
    let itemObj = Object.assign({}, item)
    itemObj['qty'] = num
    cart.push(itemObj)
    this.forceUpdate()
  }
  
  removeItem = (id) => {
    const { cart } = this.state
    let obj = cart.find(obj => obj.id === id)
    let itemIndex = cart.indexOf(obj)
    cart.splice(itemIndex, 1)
    this.forceUpdate()
  }

  resetCart = () => {
    this.setState({ cart: [] })
  }

  submitSearch() {
    
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="drino">
        <DrinoNavbar />
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
                  removeItem={this.removeItem}
                  itemExists={this.itemExists}
                  {...this.state}
                />
              </div>
            </div>
            <Footer />
          </div>
          <Cart
            toggleEl={this.toggleEl}
            removeItem={this.removeItem}
            resetCart={this.resetCart}
            itemExists={this.itemExists}
            {...this.state}
          />
        </main>
      </div>
    );
  }
}

export default Store;
