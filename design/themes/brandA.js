import { createTheme } from '../tokens.js';

const brandATheme = createTheme({
    name: 'brandA',
    colors: {
        primary: '#5D2E8C',
        primaryTint: 'rgba(93, 46, 140, 0.12)',
        primaryBorder: 'rgba(93, 46, 140, 0.38)',
        primaryBorderStrong: 'rgba(93, 46, 140, 0.56)',
        neutral900: '#221a2d',
        neutral800: '#2f243d',
        neutral750: '#3c304b',
        neutral700: '#625670',
        neutral600: '#9b92ab',
        surface: 'rgba(255,255,255,0.92)',
        surfaceGlass: 'rgba(255,255,255,0.16)',
        surfaceGlassStrong: 'rgba(255,255,255,0.26)',
    },
    typography: {
        display: '"Georgia", serif',
        heading: '"Georgia", serif',
        body: '"Noto Serif KR", serif',
        letterSpacingResultLogo: '3px',
    },
    assets: {
        background: '/assets/images/back.jpg',
        logo: '/assets/logos/HaneulLogo.png',
        favicon: '/assets/logos/HaneulLogo.png',
    },
});

export default brandATheme;
