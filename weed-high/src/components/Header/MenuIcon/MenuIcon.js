import React,{Component} from 'react';
import {HiOutlineSearch} from 'react-icons/hi'
import './menuIcon.css';
import  { MenuContext } from '../../../context/MenuContext';

 class MenuIcon extends Component {
  static contextType= MenuContext;
 
  render() {
    const {toggleMenu, iconMenu}=this.context

  return (
    <header  className='menuIcon'>
         <HiOutlineSearch/>
         <span onClick={toggleMenu}  >{iconMenu}</span>
    </header>
  )
}
}

export default MenuIcon;