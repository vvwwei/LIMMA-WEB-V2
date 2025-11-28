import { Header } from './modules/header.js';
import { Footer } from './modules/footer.js';
import { Widget } from './modules/widget.js';

class LayoutManager {
    constructor() {
        this.basePath = this.calculateBasePath();
    }

    calculateBasePath() {
        // Check if we are in a subdirectory (like /pages/)
        const path = window.location.pathname;
        // Simple check: if path ends with .html and doesn't contain 'pages/', it's root
        // If it contains 'pages/', it's inside pages
        // But for local file system, it might be trickier.
        // Let's assume standard structure: root -> pages/
        
        // Better check: look at script src
        const script = document.querySelector('script[src*="components.js"]');
        if (script) {
            const src = script.getAttribute('src');
            if (src.includes('../')) return '../';
        }
        return '';
    }

    init() {
        const header = new Header(this.basePath);
        header.render();

        const footer = new Footer(this.basePath);
        footer.render();

        const widget = new Widget(this.basePath);
        widget.render();
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const layout = new LayoutManager();
    layout.init();
});
