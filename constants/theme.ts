/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
    /** Glass TTY VT220 font */
    vt220: 'GlassTTYVT220',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
    /** Glass TTY VT220 font */
    vt220: 'GlassTTYVT220',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    /** Glass TTY VT220 font - for web, add @font-face in your HTML or use a CDN */
    vt220: "'Glass TTY VT220', 'GlassTTYVT220', 'Courier New', monospace",
  },
});

/** Default font for starship dashboard - Glass TTY VT220 */
export const DashboardFont = Fonts?.vt220 || 'monospace';

/** Global text styles for starship dashboard */
export const DashboardTextStyles = {
  base: {
    color: '#33FF33',
    fontFamily: DashboardFont,
    textShadowColor: '#33FF33',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold' as const,
    color: '#33FF33',
    fontFamily: DashboardFont,
    textShadowColor: '#33FF33',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  value: {
    fontSize: 14,
    color: '#33FF33',
    fontFamily: DashboardFont,
    textShadowColor: '#33FF33',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  status: {
    fontSize: 12,
    color: '#33FF33',
    fontFamily: DashboardFont,
    textShadowColor: '#33FF33',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    color: '#33FF33',
    fontFamily: DashboardFont,
    textShadowColor: '#33FF33',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  systemName: {
    fontSize: 14,
    color: '#33FF33',
    fontFamily: DashboardFont,
    textShadowColor: '#33FF33',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  statusValue: {
    fontSize: 14,
    fontWeight: 'bold' as const,
    color: '#33FF33',
    fontFamily: DashboardFont,
    textShadowColor: '#33FF33',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  percentage: {
    fontSize: 18,
    color: '#33FF33',
    fontFamily: DashboardFont,
    textShadowColor: '#33FF33',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
};
