import defaultTheme from './themes/default.js';
import brandATheme from './themes/brandA.js';
import brandBTheme from './themes/brandB.js';

const themes = {
    default: defaultTheme,
    brandA: brandATheme,
    brandB: brandBTheme,
};

const root = document.documentElement;

function toKebab(key) {
    return key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function applyGroup(prefix, group = {}) {
    Object.entries(group).forEach(([key, value]) => {
        root.style.setProperty(`--${prefix}-${toKebab(key)}`, value);
    });
}

function formatUrl(path) {
    if (!path) return '';
    const trimmed = path.trim();
    return trimmed.startsWith('url(') ? trimmed : `url('${trimmed}')`;
}

function applyAssets(assets = {}) {
    if (assets.background) {
        root.style.setProperty('--asset-background', formatUrl(assets.background));
    }

    if (assets.logo) {
        root.style.setProperty('--asset-logo', formatUrl(assets.logo));
        document.querySelectorAll('[data-asset="logo"]').forEach((el) => {
            if (el.tagName === 'IMG') {
                el.src = assets.logo;
            } else {
                el.style.backgroundImage = formatUrl(assets.logo);
            }
        });
    }

    if (assets.favicon) {
        root.style.setProperty('--asset-favicon', assets.favicon);
        document.querySelectorAll('link[rel="icon"]').forEach((link) => {
            link.href = assets.favicon;
        });
    }
}

export function applyTheme(themeKey = 'default') {
    const selectedTheme = themes[themeKey] || themes.default;

    applyGroup('color', selectedTheme.colors);
    applyGroup('font', selectedTheme.typography);
    applyGroup('space', selectedTheme.spacing);
    applyGroup('size', selectedTheme.size);
    applyGroup('radius', selectedTheme.radius);
    applyGroup('shadow', selectedTheme.shadow);
    applyGroup('motion', selectedTheme.motion);
    applyAssets(selectedTheme.assets);

    const themeName = selectedTheme.name || themeKey;
    root.dataset.theme = themeName;
    localStorage.setItem('app-theme', themeName);
}

const storedTheme = localStorage.getItem('app-theme') || 'default';
applyTheme(storedTheme);

// 노출용 API: window.__theme.apply('brandA') 처럼 교체 가능
window.__theme = {
    apply: applyTheme,
    available: Object.keys(themes),
};
