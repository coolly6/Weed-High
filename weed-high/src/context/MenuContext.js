import React, { createContext, Component } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { GiSkullCrossedBones } from "react-icons/gi";


export const MenuContext = createContext();

class MenuContextProvider extends Component {
  state = {
    isMenuOpen: false,
    iconMenu:  <HiOutlineMenu/>,
    nav: {
      display: 'block',
      animationName: 'navbar',
      left: '0%'
    },
    noNav: {
      display: 'block',
      animationName: 'noNavbar',
      left: '-100%'
    }
  }
  toggleMenu = () => {
    const {isMenuOpen}=  this.state
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
    if (!isMenuOpen) {
      this.setState({ iconMenu: <GiSkullCrossedBones/> })
    }
    else {
      this.setState({ iconMenu:  <HiOutlineMenu/>})
    }
  }

  render() {
    
    return (
      <MenuContext.Provider value={{ ...this.state, toggleMenu:this.toggleMenu }}>
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}

export default MenuContextProvider;