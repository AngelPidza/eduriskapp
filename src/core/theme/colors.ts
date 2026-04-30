export const colors = {
  // Brand / accents
  primary: '#4F7DFF',
  primaryDark: '#3A64FF',
  primaryLight: '#8FB0FF',
  secondary: '#A78BFA',

  // Dark theme surfaces (inspired by your web dashboard)
  background: '#0B1220',
  surface: '#0F1A2E',
  surface2: '#121F36',

  // Text
  text: '#E6EDF7',
  textSecondary: '#AAB7CF',
  textLight: '#7F91B3',

  // Lines / overlays
  border: 'rgba(255, 255, 255, 0.08)',
  overlay: 'rgba(0, 0, 0, 0.6)',

  // Semantic
  error: '#FF5A6A',
  errorLight: 'rgba(255, 90, 106, 0.14)',
  success: '#22C55E',
  successLight: 'rgba(34, 197, 94, 0.14)',
  warning: '#FBBF24',
  warningLight: 'rgba(251, 191, 36, 0.16)',
  info: '#60A5FA',
  infoLight: 'rgba(96, 165, 250, 0.14)',

  // Basic
  white: '#FFFFFF',
  black: '#000000',
};

export type ColorKeys = keyof typeof colors;
