import React, { createContext, Component } from "react";
import { SiGhostery } from "react-icons/si";
import { RiGhostLine, RiHomeSmileFill, RiLoginCircleFill, RiLogoutCircleFill } from 'react-icons/ri'
import {BiHomeSmile, BiLogOutCircle } from 'react-icons/bi'
import {AiOutlineLogin} from 'react-icons/ai'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    dark: {
      appBackground:'rgb(117 148 116)',
        themeText:'Light Mode',
        modeIcon: <RiGhostLine />,
        homeIcon:< BiHomeSmile/>,
        loginIcon:< AiOutlineLogin/>,
        logoutIcon:<BiLogOutCircle />,
        headerBackground:'linear-gradient(to top, rgb(73, 99, 68), rgb(2, 2, 2)  )',
        menuIconColor:'rgb(96, 182 ,105)',
      navLiBackground: "linear-gradient(to top, rgb(73, 99, 68), rgb(2, 2, 2))",
      navColor: "rgb(96, 182 ,105)",
      navTextShadow: "1px  1px  1px rgb(89, 250, 89)",
      iconColor:'rgb(96, 182 ,105)',
      logoColor:'rgb(96, 182 ,105)',
      logoTextShadow:'1px  1px  1px rgb(89, 250, 89)'
 
    },

    light: {
      appBackground:'rgb(51 245 44 / 14%)',
      logoColor:'rgb(14, 114, 64)',
      logoTextShadow:'1px  1px 1px black',
        themeText:'Dark Mode',
        modeIcon: <SiGhostery />,
        homeIcon:<RiHomeSmileFill />,
        loginIcon:< RiLoginCircleFill/>,
        logoutIcon:<RiLogoutCircleFill />,
        headerBackground:'linear-gradient(to bottom, rgb(7, 247, 3) , rgb(135, 241, 134), rgb(201, 248, 182) )',
        menuIconColor:'rgb(14, 114, 64)',
      navLiBackground:
        "linear-gradient(to bottom, rgb(7, 247, 3,0.9) , rgb(135, 241, 134,0.9), rgb(201, 248, 182,0.9))",
        navColor: "rgb(14, 114, 64)",
      navTextShadow: "1px  1px 1px black",
      iconColor:  'rgb(14, 114, 64)'

    },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {

    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
