import React, { createContext, Component } from "react";
import { SiGhostery } from "react-icons/si";
import {
  RiGhostLine,
  RiHomeSmileFill,
  RiLoginCircleFill,
  RiLogoutCircleFill,
} from "react-icons/ri";
import { BiHomeSmile, BiLogOutCircle } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    dark: {
      appBackground: "rgb(0 40 0 / 0.7)",
      themeText: "Light Mode",
      modeIcon: <RiGhostLine />,
      homeIcon: <BiHomeSmile />,
      loginIcon: <AiOutlineLogin />,
      logoutIcon: <BiLogOutCircle />,
      headerBackground:
        "linear-gradient(to top, rgb(73, 99, 68), rgb(2, 2, 2)  )",
      headerBoxShadow: "0px 7px 7px -4px rgb(49 246 44)",
      menuIconColor: "rgb(96, 182 ,105)",
      navLiBackground: "linear-gradient(to top, rgb(73, 99, 68), rgb(2, 2, 2))",
      navColor: "rgb(96, 182 ,105)",
      navTextShadow: "1px  1px  1px rgb(89, 250, 89)",
      iconColor: "rgb(96, 182 ,105)",
      logoColor: "rgb(96, 182 ,105)",
      logoTextShadow: "1px  1px  1px rgb(89, 250, 89)",
      formBackground: "rgb(0, 0, 0,0.9)",
      formColor: "rgb(95 182 105)",
      formBoxShadow: "0px 17px 14px -4px rgb(49 246 44)",
      formH1BoxShadow: "0px 5px 15px -4px rgb(49 246 44)",
      formH1TextShadow: "none",
      formInputBorderBottom: "1px solid rgb(49 246 44)",
      formInputColor: "rgb(49 246 44)",
      formBtnBackground: "rgb(84, 219, 82)",
      formBtnColor: "black",
      formLinkColor: "rgb(49 246 44)",
    },

    light: {
      appBackground: "rgb(51 245 44 / 14%)",
      logoColor: "rgb(14, 114, 64)",
      logoTextShadow: "1px  1px 1px black",
      themeText: "Dark Mode",
      modeIcon: <SiGhostery />,
      homeIcon: <RiHomeSmileFill />,
      loginIcon: <RiLoginCircleFill />,
      logoutIcon: <RiLogoutCircleFill />,
      headerBackground:
        "linear-gradient(to bottom, rgb(7, 247, 3) , rgb(135, 241, 134), rgb(201, 248, 182) )",
      headerBoxShadow: "0px 7px 7px -4px grey",
      menuIconColor: "rgb(14, 114, 64)",
      navLiBackground:
        "linear-gradient(to bottom, rgb(7, 247, 3,0.9) , rgb(135, 241, 134,0.9), rgb(201, 248, 182,0.9))",
      navColor: "rgb(14, 114, 64)",
      navTextShadow: "1px  1px 1px black",
      iconColor: "rgb(14, 114, 64)",
      formBackground:
        "linear-gradient(to top, rgba(7, 247, 3,0.5) , rgb(135, 241, 134), rgb(201, 248, 182) )",
      formColor: "rgb(14, 114, 64)",
      formBoxShadow: "0px 17px 14px -4px grey",
      formH1BoxShadow: "0px 5px 5px -4px black",
      formH1TextShadow: "1px  1px 1px black",
      formInputBorderBottom: "1px solid black",
      formInputColor: "rgb(14, 114, 64)",
      formBtnBackground: "rgb(14, 114, 64)",
      formBtnColor: "rgb(238, 250, 183)",
      formLinkColor: "black",
    },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
