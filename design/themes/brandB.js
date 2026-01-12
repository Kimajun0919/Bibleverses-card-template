import { createTheme } from '../tokens.js';

const brandBTheme = createTheme({
    name: 'brandB',
    colors: {
        primary: '#0F6A6A',
        primaryTint: 'rgba(15, 106, 106, 0.14)',
        primaryBorder: 'rgba(15, 106, 106, 0.36)',
        primaryBorderStrong: 'rgba(15, 106, 106, 0.58)',
        neutral900: '#0f1c2c',
        neutral800: '#1f3044',
        neutral750: '#24384f',
        neutral700: '#486079',
        neutral600: '#8196af',
        surface: 'rgba(255,255,255,0.93)',
        surfaceGlass: 'rgba(255,255,255,0.18)',
        surfaceGlassStrong: 'rgba(255,255,255,0.28)',
    },
    typography: {
        display: '"Trebuchet MS", "Noto Serif KR", serif',
        heading: '"Trebuchet MS", "Noto Serif KR", serif',
        body: '"Noto Serif KR", serif',
        letterSpacingResultLogo: '2.5px',
    },
    assets: {
        background: '/assets/images/back.jpg',
        logo: '/assets/logos/HaneulLogo.png',
        favicon: '/assets/logos/HaneulLogo.png',
    },
});

export default brandBTheme;
