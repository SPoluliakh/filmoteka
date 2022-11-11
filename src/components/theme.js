export const theme = Object.freeze({
  space: [0, 4, 8, 16, 32, 64, 72, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    primary: 'white',
    secondary: '#0b0b0bbd',
    activeText: 'black',
    background: '#ff000087',
    hoverBcg: '#ffffff94',
    buttonBcg: '#0b0b0b00',
    headerBcg: 'brown',
    description: 'antiquewhite',
    navBcg: 'navajowhite',
  },
  radii: {
    none: '0',
    normal: '2px',
    round: '50%',
    sadVew: '18px',
    ratingVew: '5px',
  },
  borders: {
    none: 'none',
    loadMore: '2px solid #4056b4',
    serchBtn: '4px solid yellow',
  },
  shadows: {
    textShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',

    buttonsShadow: ' 0 1px 1px #2d2020',
    deletButton: '3px 3px 3px 0 red',
  },
});