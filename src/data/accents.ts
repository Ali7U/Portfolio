export const ACCENT_OPTIONS = [
  { id: 'indigo',  dark: '#5b6cff', light: '#3344d0', darkLabel: 'Indigo',  lightLabel: 'Indigo'  },
  { id: 'green',   dark: '#7CF5BD', light: '#0d7a52', darkLabel: 'Mint',    lightLabel: 'Green'   },
  { id: 'sunset',  dark: '#ff7849', light: '#c23308', darkLabel: 'Sunset',  lightLabel: 'Rust'    },
  { id: 'lime',    dark: '#b8ff5b', light: '#4d6b00', darkLabel: 'Lime',    lightLabel: 'Olive'   },
  { id: 'crimson', dark: '#ff2347', light: '#c20020', darkLabel: 'Crimson', lightLabel: 'Crimson' },
  { id: 'cyan',    dark: '#5be0ff', light: '#0272a8', darkLabel: 'Cyan',    lightLabel: 'Teal'    },
] as const;

export type AccentId = (typeof ACCENT_OPTIONS)[number]['id'];
