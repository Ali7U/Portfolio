export const ACCENT_OPTIONS = [
  { id: 'indigo',  dark: '#5b6cff', light: '#3344d0', label: 'Indigo'  },
  { id: 'green',   dark: '#7CF5BD', light: '#0d7a52', label: 'Green'   },
  { id: 'sunset',  dark: '#ff7849', light: '#c23308', label: 'Sunset'  },
  { id: 'lime',    dark: '#b8ff5b', light: '#4d6b00', label: 'Lime'    },
  { id: 'crimson', dark: '#ff2347', light: '#c20020', label: 'Crimson' },
  { id: 'cyan',    dark: '#5be0ff', light: '#0272a8', label: 'Cyan'    },
] as const;

export type AccentId = (typeof ACCENT_OPTIONS)[number]['id'];
