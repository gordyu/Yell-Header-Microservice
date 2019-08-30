import React from 'react';
import { Nav, NavItem, NavLink,
         UncontrolledButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMotorcycle, faCalendarDay, faHamburger, faDragon, faFish, faPepperHot, faRepublican, faPizzaSlice, faHome, faUserEdit, faStore, faBolt, faSeedling, faUnlockAlt, faBiohazard, faPeopleCarry, faHammer, faTools, faToilet, faThermometerQuarter, faOilCan, faCar, faCarCrash, faParking, faTruckPickup, faCloudShowersHeavy, faAirFreshener, faCommentsDollar, faMobileAlt, faUserTie, faCut, faBeer, faCocktail, faDumbbell, faHotTub, faShoppingBag, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
const utensils = <FontAwesomeIcon icon={faUtensils}/>
const motorcycle = <FontAwesomeIcon icon={faMotorcycle}/>
const reservation = <FontAwesomeIcon icon={faCalendarDay}/>
const hamburger = <FontAwesomeIcon icon={faHamburger}/>
const dragon = <FontAwesomeIcon icon={faDragon}/>
const pizza = <FontAwesomeIcon icon={faPizzaSlice}/>
const fish = <FontAwesomeIcon icon={faFish}/>
const pepper = <FontAwesomeIcon icon={faPepperHot}/>
const elephant = <FontAwesomeIcon icon={faRepublican}/>

const home = <FontAwesomeIcon icon={faHome}/>
const hammer = <FontAwesomeIcon icon={faHammer}/>
const bolt = <FontAwesomeIcon icon={faBolt}/>
const thermometer = <FontAwesomeIcon icon={faThermometerQuarter}/>
const plant = <FontAwesomeIcon icon={faSeedling}/>
const padlock = <FontAwesomeIcon icon={faUnlockAlt}/>
const biohazard = <FontAwesomeIcon icon={faBiohazard}/>
const movers = <FontAwesomeIcon icon={faPeopleCarry}/>
const toilet = <FontAwesomeIcon icon={faToilet}/>

const car = <FontAwesomeIcon icon={faCar}/>
const tools = <FontAwesomeIcon icon={faTools}/>
const crash = <FontAwesomeIcon icon={faCarCrash}/>
const truck = <FontAwesomeIcon icon={faTruckPickup}/>
const parking = <FontAwesomeIcon icon={faParking}/>
const freshener = <FontAwesomeIcon icon={faAirFreshener}/>
const oil = <FontAwesomeIcon icon={faOilCan}/>
const rain = <FontAwesomeIcon icon={faCloudShowersHeavy}/>
const negotiate = <FontAwesomeIcon icon={faCommentsDollar}/>

const ellipsis = <FontAwesomeIcon icon={faEllipsisH}/>

const phone = <FontAwesomeIcon icon={faMobileAlt}/>
const suit = <FontAwesomeIcon icon={faUserTie}/>
const beer = <FontAwesomeIcon icon={faBeer}/>
const cocktail = <FontAwesomeIcon icon={faCocktail}/>
const scissors = <FontAwesomeIcon icon={faCut}/>
const dumbbell = <FontAwesomeIcon icon={faDumbbell}/>
const spa = <FontAwesomeIcon icon={faHotTub}/>
const shopping = <FontAwesomeIcon icon={faShoppingBag}/>

const write = <FontAwesomeIcon icon={faUserEdit}/>
const store = <FontAwesomeIcon icon={faStore}/>

export default class Dropdowns extends React.Component {
  constructor(props) {
    super(props);

    this.state = {    };
  }

  render() {
    return (
      <span style={{display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <Nav tabs>
          <UncontrolledButtonDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" nav caret>
              {utensils} Restaurants
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a">
                {motorcycle} Delivery
              </DropdownItem>
              <DropdownItem tag="a">
                {reservation} Reservations
              </DropdownItem>
              <DropdownItem tag="a">
                {hamburger} Burgers
              </DropdownItem>
              <DropdownItem tag="a">
                {dragon} Chinese
              </DropdownItem>
              <DropdownItem tag="a">
                {pizza} Italian
              </DropdownItem>
              <DropdownItem tag="a">
                {fish} Japanese
              </DropdownItem>
              <DropdownItem tag="a">
                {pepper} Mexican
              </DropdownItem>
              <DropdownItem tag="a">
                {elephant} Thai
              </DropdownItem>
            </DropdownMenu>
            </UncontrolledButtonDropdown>

          <UncontrolledButtonDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" nav caret>
              {home} Home Services
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a">
                {hammer} Contractors
              </DropdownItem>
              <DropdownItem tag="a">
                {bolt} Electricians
              </DropdownItem>
              <DropdownItem tag="a">
                {biohazard} Home Cleaners
              </DropdownItem>
              <DropdownItem tag="a">
                {thermometer} HVAC
              </DropdownItem>
              <DropdownItem tag="a">
                {plant} Landscaping
              </DropdownItem>
              <DropdownItem tag="a">
                {padlock} Locksmiths
              </DropdownItem>
              <DropdownItem tag="a">
                {movers} Movers
              </DropdownItem>
              <DropdownItem tag="a">
                {toilet} Plumbers
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          <UncontrolledButtonDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" nav caret>
              {car} Auto Services
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a">
                {tools} Auto Repair
              </DropdownItem>
              <DropdownItem tag="a">
                {freshener} Auto Detailing
              </DropdownItem>
              <DropdownItem tag="a">
                {crash} Body Shops
              </DropdownItem>
              <DropdownItem tag="a">
                {rain} Car Wash
              </DropdownItem>
              <DropdownItem tag="a">
                {negotiate} Car Dealers
              </DropdownItem>
              <DropdownItem tag="a">
                {oil} Oil Change
              </DropdownItem>
              <DropdownItem tag="a">
                {parking} Parking
              </DropdownItem>
              <DropdownItem tag="a">
                {truck} Towing
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          <UncontrolledButtonDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" nav caret>
              {ellipsis} More
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a">
                {suit} Dry Cleaning
              </DropdownItem>
              <DropdownItem tag="a">
                {phone} Phone Repair
              </DropdownItem>
              <DropdownItem tag="a">
                {beer} Bars
              </DropdownItem>
              <DropdownItem tag="a">
                {cocktail} Nightlife
              </DropdownItem>
              <DropdownItem tag="a">
                {scissors} Hair Salons
              </DropdownItem>
              <DropdownItem tag="a">
                {dumbbell} Gyms
              </DropdownItem>
              <DropdownItem tag="a">
                {spa} Massage
              </DropdownItem>
              <DropdownItem tag="a">
                {shopping} Shopping
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          <NavItem>
            <NavLink disabled href="#">{'  '}</NavLink>
          </NavItem>

          <NavItem>
            <NavLink>{write} Write a Review</NavLink>
          </NavItem>

          <NavItem>
            <NavLink>{store} For Businesses</NavLink>
          </NavItem>

        </Nav>
      </span>
    );
  }
}