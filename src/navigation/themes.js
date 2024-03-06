import Colors from 'src/theme/Colors';
import { extendTheme } from 'native-base';
import Fonts from 'src/constants/Fonts';

export const customTheme = extendTheme({
  fontConfig: {
    FiraSans: {
      100: {
        normal: Fonts.FiraSansLight,
        italic: Fonts.FiraSansLightItalic,
      },
      200: {
        normal: Fonts.FiraSansRegular,
        italic: Fonts.FiraSansItalic,
      },
      300: {
        normal: Fonts.FiraSansMedium,
        italic: Fonts.FiraSansMediumItalic,
      },
      400: {
        normal: Fonts.FiraSansSemiBold,
        italic: Fonts.FiraSansSemiBoldItalic,
      },
      500: {
        normal: Fonts.FiraSansBold,
        italic: Fonts.FiraSansBoldItalic,
      },
      600: {
        normal: Fonts.FiraSansRegular,
        italic: Fonts.FiraSansItalic,
      },
      700: {
        normal: Fonts.FiraSansRegular,
        italic: Fonts.FiraSansItalic,
      },
      800: {
        normal: Fonts.FiraSansRegular,
        italic: Fonts.FiraSansItalic,
      },
      900: {
        normal: Fonts.FiraSansRegular,
        italic: Fonts.FiraSansItalic,
      },
    },
  },
  fonts: {
    heading: 'FiraSans',
    body: 'FiraSans',
    mono: 'FiraSans',
  },
  colors: {
    light: {
      primaryGreen: Colors.GenericViridian,
      primaryBackground: Colors.LightYellow,
      primaryGreenBackground: Colors.pantoneGreen,
      pantoneGreenLight: Colors.pantoneGreenLight,
      // mainBackground: Colors.LightWhite,
      modalGreenBackground: Colors.pantoneGreen,
      modalGreenContent: Colors.White,
      modalWhiteBackground: Colors.LightWhite,
      // modalWhiteButton: Colors.LightWhite,
      modalGreenTitle: Colors.Black,
      modalAccentTitle: Colors.Black,
      modalWhiteButton: Colors.White,
      modalWhiteButtonText: Colors.greenText,
      modalGreenLearnMore: Colors.CastelGreenDark,
      greenButtonBackground: Colors.pantoneGreen,
      choosePlanHome: Colors.White,
      choosePlanCard: Colors.SmokeGreen,
      choosePlanIconBackSelected: Colors.DeepOlive,
      choosePlanIconBack: Colors.PaleKhaki,
      hexagonIconBackColor: Colors.deepTeal,
      qrBorderColor: Colors.LightYellow,
      coffeeBackground: Colors.Coffee,
      yellowButtonBackground: Colors.MacaroniAndCheese,
      yellowButtonTextColor: Colors.Coffee,
      btcLabelBack: Colors.Periwinkle,
      white: Colors.White,
      primaryText: Colors.RichBlack,
      secondaryText: Colors.GraniteGray,
      learnMoreBorder: Colors.Coffee,
      textBlack: Colors.DarkGreen,
      greenText: Colors.RichGreen,
      greenText2: Colors.TropicalRainForest,
      accent: Colors.MacaroniAndCheese,
      lightAccent: Colors.MacaroniAndCheese,
      QrCode: Colors.WhiteCoffee,
      recieverAddress: Colors.DimGray,
      textInputBackground: Colors.Isabelline,
      secondaryBackground: Colors.Isabelline,
      GreyText: Colors.Feldgrau,
      dateText: Colors.HookerGreen,
      Border: Colors.CastletonGreen,
      textColor: Colors.LightGray,
      textColor2: Colors.DeepSpaceSparkle,
      headerText: Colors.pantoneGreen,
      copyBackground: Colors.LightGray,
      sendCardHeading: Colors.BlueGreen,
      Glass: Colors.Glass,
      TorLable: Colors.Menthol,
      divider: Colors.GrayX11,
      errorRed: Colors.CarmineRed,
      SlateGreen: Colors.SlateGreen,
      textWallet: Colors.MediumJungleGreen,
      indicator: Colors.OutrageousOrange,
      addTransactionText: Colors.PineTree,
      sendMax: Colors.JackoBean,
      inActiveMsg: Colors.SpanishGray,
      vaultCardText: Colors.Bisque,
      satsDark: Colors.DeepSpaceGreen,
      gradientStart: Colors.GenericViridian, // linearGradient
      gradientEnd: Colors.RichGreen, // linearGradient
      error: Colors.CongoPink,
      black: Colors.Black,
      fadedGray: Colors.FadedGray,
      fadedblue: Colors.FadeBlue,
      dustySageGreen: Colors.DustySageGreen,
      forestGreen: Colors.ForestGreen,
      pantoneGreen: Colors.pantoneGreen,
      seashellWhite: Colors.Seashell,
      lightSeashell: Colors.lightSeashell,
      // Champagne: Colors.Champagne,
      BrownNeedHelp: Colors.RussetBrown,
      // GreenishGrey: Colors.GreenishGrey,
      // Ivory: Colors.Ivory,
      RecoveryBorderColor: Colors.RussetBrownLight,
      // brownColor: Colors.brownColor,
      learMoreTextcolor: Colors.learMoreTextcolor,
      Linen: Colors.Linen,
      whiteText: Colors.OffWhite,
      SageGreen: Colors.SageGreen,
      TransactionIconBackColor: Colors.Eggshell,
      Teal: Colors.Teal,
      LightBrown: Colors.LightBrown,
      PaleTurquoise: Colors.PaleTurquoise,
      ForestGreenDark: Colors.ForestGreenDark,
      // SlateGrey: Colors.SlateGrey,
      // LightKhaki: Colors.LightKhaki,
      // SmokeGreen: Colors.SmokeGreen,
      // Warmbeige: Colors.Warmbeige,
      // PearlWhite: Colors.PearlWhite,
      // PaleIvory: Colors.PaleIvory,
      // DarkSage: Colors.DarkSage,
      // Smoke: Colors.Smoke,
      // deepTeal: Colors.deepTeal,
      // ChampagneBliss: Colors.ChampagneBliss,
      // PearlGrey: Colors.PearlGrey,
      // Taupe: Colors.Taupe,
      // Crayola: Colors.Crayola,
    },
    dark: {
      primaryGreen: Colors.GenericViridian,
      primaryBackground: Colors.LightYellowDark,
      primaryGreenBackground: Colors.LightYellowDark,
      pantoneGreenLight: Colors.pantoneGreenLight,
      // mainBackground: Colors.LightWhite,
      modalGreenBackground: Colors.LightYellowDark,
      modalGreenButton: Colors.pantoneGreenDark,
      modalGreenContent: Colors.White,
      modalWhiteBackground: Colors.LightYellowDark,
      modalWhiteButton: Colors.pantoneGreenDark,
      modalWhiteButtonText: Colors.Black,
      modalGreenTitle: Colors.TropicalRainForestDark,
      modalAccentTitle: Colors.GoldCrayola,
      // modalWhiteButton: Colors.pantoneGreenDark,
      modalGreenLearnMore: Colors.LightYellowDark,
      greenButtonBackground: Colors.ForestGreenDark,
      choosePlanHome: Colors.White,
      choosePlanCard: Colors.SmokeGreen,
      choosePlanIconBackSelected: Colors.DeepOlive,
      choosePlanIconBack: Colors.PaleKhaki,
      hexagonIconBackColor: Colors.deepTeal,
      qrBorderColor: Colors.White,
      coffeeBackground: Colors.CoffeeDark,
      yellowButtonBackground: Colors.LightYellowDark,
      yellowButtonTextColor: Colors.White,
      btcLabelBack: Colors.Periwinkle,
      white: Colors.Black,
      primaryText: Colors.RichBlackDark,
      secondaryText: Colors.GraniteGrayDark,
      learnMoreBorder: Colors.GoldCrayola,
      textBlack: Colors.DarkGreen,
      greenText: Colors.RichGreenDark,
      greenText2: Colors.TropicalRainForestDark,
      accent: Colors.MacaroniAndCheese,
      lightAccent: Colors.GoldCrayola,
      QrCode: Colors.WhiteCoffee,
      recieverAddress: Colors.DimGray,
      textInputBackground: Colors.Isabelline,
      secondaryBackground: Colors.Isabelline,
      GreyText: Colors.RichBlackDark,
      dateText: Colors.HookerGreen,
      Border: Colors.CastletonGreen,
      textColor: Colors.LightGray,
      textColor2: Colors.DeepSpaceSparkleDark,
      headerText: Colors.pantoneGreen,
      copyBackground: Colors.LightGray,
      sendCardHeading: Colors.BlueGreen,
      Glass: Colors.Glass,
      SlateGreen: Colors.SlateGreen,
      TorLable: Colors.Menthol,
      divider: Colors.GrayX11,
      errorRed: Colors.CarmineRed,
      textWallet: Colors.MediumJungleGreen,
      indicator: Colors.OutrageousOrange,
      addTransactionText: Colors.PineTree,
      sendMax: Colors.JackoBean,
      inActiveMsg: Colors.SpanishGray,
      vaultCardText: Colors.Bisque,
      satsDark: Colors.DeepSpaceGreen,
      gradientStart: Colors.GenericViridian, // linearGradient
      gradientEnd: Colors.DeepAquamarine, // linearGradient
      error: Colors.CongoPink,
      black: Colors.White,
      fadedGray: Colors.SeashellDark,
      fadedblue: Colors.FadeBlue,
      dustySageGreen: Colors.DustySageGreen,
      forestGreen: Colors.ForestGreen,
      pantoneGreen: Colors.pantoneGreenDark,
      seashellWhite: Colors.SeashellDark,
      lightSeashell: Colors.lightSeashell,
      BrownNeedHelp: Colors.RussetBrown,
      // GreenishGrey: Colors.GreenishGrey,
      RecoveryBorderColor: Colors.RussetBrownLight,
      // brownColor: Colors.brownColor,
      learMoreTextcolor: Colors.learMoreTextcolor,
      Linen: Colors.Linen,
      whiteText: Colors.OffWhite,
      SageGreen: Colors.SageGreen,
      TransactionIconBackColor: Colors.Eggshell,
      Teal: Colors.Teal,
      LightBrown: Colors.LightBrown,
      PaleTurquoise: Colors.PaleTurquoise,
      ForestGreenDark: Colors.ForestGreenDark,
      // SlateGrey: Colors.SlateGrey,
      // LightKhaki: Colors.LightKhaki,
      // SmokeGreen: Colors.SmokeGreen,
      // DeepOlive: Colors.DeepOlive,
      // PaleKhaki: Colors.PaleKhaki,
      // Warmbeige: Colors.Warmbeige,
      // PearlWhite: Colors.PearlWhite,
      // PaleIvory: Colors.PaleIvory,
      // DarkSage: Colors.DarkSage,
      // Smoke: Colors.Smoke,
      // deepTeal: Colors.deepTeal,
      // Champagne: Colors.Champagne,
      // Ivory: Colors.Ivory,
      // ChampagneBliss: Colors.ChampagneBliss,
      // PearlGrey: Colors.PearlGrey,
      // Taupe: Colors.Taupe,
      // Crayola: Colors.Crayola,
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

export default customTheme;
