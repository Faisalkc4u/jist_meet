// // @flow

// import { ColorSchemeRegistry, schemeColor } from '../../../base/color-scheme';
// import { BoxModel, ColorPalette } from '../../../base/styles';

// const BUTTON_SIZE = 48;

// // Toolbox, toolbar:

// /**
//  * The style of toolbar buttons.
//  */
// const toolbarButton = {
//     borderRadius: 3,
//     borderWidth: 0,
//     flex: 0,
//     flexDirection: 'row',
//     height: BUTTON_SIZE,
//     justifyContent: 'center',
//     marginHorizontal: 6,
//     marginTop: 6,
//     width: BUTTON_SIZE
// };

// /**
//  * The icon style of the toolbar buttons.
//  */
// const toolbarButtonIcon = {
//     alignSelf: 'center',
//     color: ColorPalette.darkGrey,
//     fontSize: 24
// };

// /**
//  * The icon style of toolbar buttons which display white icons.
//  */
// const whiteToolbarButtonIcon = {
//     ...toolbarButtonIcon,
//     color: ColorPalette.white
// };

// /**
//  * The Toolbox and toolbar related styles.
//  */
// const styles = {

//     expandMenuContainer: {
//         alignItems: 'center',
//         borderTopLeftRadius: 16,
//         borderTopRightRadius: 16,
//         flexDirection: 'column'
//     },

//     sheetGestureRecognizer: {
//         alignItems: 'stretch',
//         flexDirection: 'column'
//     },

//     /**
//      * The style of the toolbar.
//      */
//     toolbox: {
//         alignItems: 'center',
//         backgroundColor: ColorPalette.darkBackground,
//         borderTopLeftRadius: 3,
//         borderTopRightRadius: 3,
//         flexDirection: 'row',
//         flexGrow: 0,
//         justifyContent: 'space-between',
//         paddingHorizontal: BoxModel.margin,
//         paddingVertical: 8
//     },

//     /**
//      * The style of the root/top-level container of {@link Toolbox}.
//      */
//     toolboxContainer: {
//         flexDirection: 'column',
//         flexGrow: 0,
//         width: '100%',
//         maxWidth: 580,
//         marginLeft: 'auto',
//         marginRight: 'auto'
//     }
// };

// export default styles;

// /**
//  * Color schemed styles for the @{Toolbox} component.
//  */
// ColorSchemeRegistry.register('Toolbox', {
//     /**
//      * Styles for buttons in the toolbar.
//      */
//     buttonStyles: {
//         iconStyle: toolbarButtonIcon,
//         style: toolbarButton
//     },

//     buttonStylesBorderless: {
//         iconStyle: whiteToolbarButtonIcon,
//         style: {
//             ...toolbarButton,
//             backgroundColor: 'transparent'
//         }
//     },

//     backgroundToggle: {
//         backgroundColor: ColorPalette.toggled
//     },

//     hangupButtonStyles: {
//         iconStyle: whiteToolbarButtonIcon,
//         style: {
//             ...toolbarButton,
//             backgroundColor: schemeColor('hangup')
//         },
//         underlayColor: ColorPalette.buttonUnderlay
//     },

//     /**
//      * Styles for toggled buttons in the toolbar.
//      */
//     toggledButtonStyles: {
//         iconStyle: whiteToolbarButtonIcon,
//         style: {
//             ...toolbarButton
//         }
//     }
// });
// @flow

import { ColorSchemeRegistry, schemeColor } from "../../../base/color-scheme";
import { BoxModel, ColorPalette } from "../../../base/styles";

const BUTTON_SIZE = 48;

// Toolbox, toolbar:

/**
 * The style of toolbar buttons.
 */
const toolbarButton = {
    borderRadius: 3,
    borderWidth: 0,
    flex: 0,
    flexDirection: "row",
    height: BUTTON_SIZE,
    justifyContent: "center",
    marginHorizontal: 6,
    marginTop: 6,
    width: BUTTON_SIZE,
};
/**
 * The style of Hangup buttons.
 */
const hangupButton = {
    borderRadius: 100,
    borderWidth: 0,
    flex: 0,
    flexDirection: "row",
    height: 65,
    justifyContent: "center",
    marginHorizontal: 6,
    marginTop: 6,
    width: 65,
};

/**
 * The icon style of the toolbar buttons.
 */
const toolbarButtonIcon = {
    alignSelf: "center",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: ColorPalette.darkGrey,
    fontSize: 24,
};

/**
 * The icon style of the hangup buttons.
 */
const hangupButtonIcon = {
    alignSelf: "center",
    fontSize: 24,
};

/**
 * The icon style of toolbar buttons which display white icons.
 */
const whiteToolbarButtonIcon = {
    ...toolbarButtonIcon,
    color: ColorPalette.darkGrey,
};
/**
 * The icon style of toolbar buttons which display white icons.
 */
const hangToolbarButtonIcon = {
    ...hangupButtonIcon,
    color: "#fff",
};

/**
 * The Toolbox and toolbar related styles.
 */
const styles = {
    expandMenuContainer: {
        alignItems: "center",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: "column",
    },

    sheetGestureRecognizer: {
        alignItems: "stretch",
        flexDirection: "column",
    },

    /**
     * The style of the toolbar.
     */
    toolbox: {
        alignItems: "center",
        backgroundColor: ColorPalette.transparent,
        // backgroundColor: "#000",
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        flexDirection: "row",
        flexGrow: 0,
        justifyContent: "space-between",
        paddingHorizontal: BoxModel.margin,
        paddingVertical: 35,
    },

    /**
     * The style of the root/top-level container of {@link Toolbox}.
     */
    toolboxContainer: {
        flexDirection: "column",
        flexGrow: 0,
        width: "100%",
        maxWidth: 580,
        marginLeft: "auto",
        marginRight: "auto",
    },
};

export default styles;

/**
 * Color schemed styles for the @{Toolbox} component.
 */
ColorSchemeRegistry.register("Toolbox", {
    /**
     * Styles for buttons in the toolbar.
     */
    buttonStyles: {
        iconStyle: toolbarButtonIcon,
        style: toolbarButton,
    },

    buttonStylesBorderless: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
            backgroundColor: "transparent",
        },
        underlayColor: "none",
    },

    backgroundToggle: {
        backgroundColor: ColorPalette.toggled,
    },

    hangupButtonStyles: {
        iconStyle: hangToolbarButtonIcon,
        style: {
            ...hangupButton,
            // backgroundColor: schemeColor("hangup"),
            backgroundColor: "#D00000",
        },
        underlayColor: "none",
        // underlayColor: ColorPalette.buttonUnderlay,
    },

    /**
     * Styles for toggled buttons in the toolbar.
     */
    toggledButtonStyles: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
        },
        underlayColor: "none",
    },
});
