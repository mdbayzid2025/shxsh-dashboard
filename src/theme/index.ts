import { Collapse } from "antd";

export const mainTheme = {
  token: { colorPrimary: "#027348" },
  components: {
    Input: {
      borderRadius: 12,
      colorBorder: "#404040",
      colorPrimaryBg: "#121212",
      colorText: "#757575",
      inputFontSize: 16,
      // activeBg: "#989898",
      colorBgBlur: "#989898",
      colorTextPlaceholder: "#757575 ",
      colorBgContainer: "rgba(255,255,255,.1)",
    },

    Modal: {     
      contentBg: "#121210",
      colorIcon: "white",
      colorBgMask: "rgba(64,64,64,0.5)",
      headerBg: "transparent",
      titleColor: "#909090 ",
      titleFontSize: 22,
    },
    Select: {
      colorBgContainer: "rgba(255, 255, 255, 0.1)",
      colorBorder: "#808080",
      colorText: "#FFFFFF",
      colorBgElevated: "#808080",
      optionSelectedBg: "#121212",
      optionActiveBg: "#404040",
      // colorTextPlaceholder: "#808080",
      colorTextPlaceholder: "#808080",      
    },
    Collapse: {
      headerBg: "#043623",
      contentBg: "rgba(255,255,255,0.4)",
      colorText: "#ffffff",
      colorTextHeading: "#fff",
      fontSize: 18,
      colorPrimaryBorder: '#043623',
      borderlessContentBg: 'transparent',

    },
    Pagination: {
      itemActiveBg: "rgba(2, 115, 72, .8)",
      itemBg: "rgba(0,42,96,0.3215686274509804)",
      colorPrimary: "rgb(255,255,255)",
      colorText: "rgb(255,255,255)",
      colorTextDisabled: "rgb(255,255,255, .5)",
      borderRadius: 25,
      itemSize: 40,
    },
    Table: {
      colorBgContainer: "#121215",
      borderColor: "#404040",
      headerBg: "#043623 ",
      colorText: "#fff",
      headerColor: "#ffffff",
      headerSplitColor: "transparent",
      colorSplit: "transparent",
      cellPaddingBlock: 15,      
    },    
  },
};

/*
export const mainTheme = {
  components: {
    Menu: {
      iconSize: 24,
      itemActiveBg: "#5A199B",
      itemActiveColor: "white",
      itemHoverColor: "white",
      itemHoverBg: "#BB628E",
      itemColor: "black",
      itemSelectedBg: "#BB628E",
      itemSelectedColor: "white",
    },
    Form: {
      colorError: "#F5382C",
    },
    Input: {
      colorIcon: "#18191B",
    },
    Checkbox: {
      colorPrimary: "#2D665F",
      colorPrimaryHover: "#2D665F",
    },
    Select: {
      colorBgContainer: "rgba(0,0,0)",
      fontSize: 20,
      optionSelectedBg: "rgb(114,46,209)",
      optionSelectedColor: "rgb(255,255,255)",
      optionActiveBg: "rgb(216,165,255)",
      optionActiveColor: "#fff",
      colorBorder: "#FCC1BE",
      colorBgElevated: "rgb(226,205,255)",
      selectorBg: "#FAFAFA",
      colorTextPlaceholder: "rgb(0, 0, 0)",
      colorText: "#000",
      // activeOutlineColor: "#FCC1BE",
      // activeBorderColor: "#FCC1BE",
      hoverBorderColor: "#FCC1BE",
    },
    DatePicker: {
      fontSize: 20,
      colorBorder: "rgb(0, 0, 0,0.5)",
      colorTextPlaceholder: "rgb(0, 0, 0,0.5)",
    },
    Upload: {
      colorFillAlter: "rgba(0,0,0,0)",
      colorBorder: "#18191B",
      colorBorderHover: "#18191B",
      colorText: "#18191B",
    },
    Table: {
      headerBg: "rgb(212,169,255)",
      colorBgContainer: "#FFFFFF",
      colorText: "#232323",
      borderColor: "#DFE1E3",
      headerColor: "#FFFFFF",
      fontSize: 18,
      footerColor: "#FE5C8E",
      colorPrimary: "#FFF9FD",
      // marginXXS: 4,
      colorLinkActive: "#FCC1BE",
      headerSplitColor: "rgb(255, 2555, 255)",
    },
    Pagination: {
      colorText: "rgba(255,255,255,0.88)",
      borderRadius: 20,
      itemActiveBg: "rgb(252,185,23)",
      colorPrimary: "rgb(255,255,255)",
      itemBg: "rgb(193,193,193)",
      colorBgTextHover: "rgb(245,236,155)",
      colorPrimaryHover: "rgb(0,0,0)",
      itemSize: 40,
    },
  },
};

*/
