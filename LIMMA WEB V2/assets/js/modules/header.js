import { contentConfig } from '../../data/content.js';

export class Header {
    constructor(basePath) {
        this.basePath = basePath;
    }

    render() {
        const config = contentConfig.nav;
        
        // Generate Nav Links
        const linksHtml = config.links.map(link => {
            const url = link.url.startsWith('#') ? `${this.basePath}index.html${link.url}` : `${this.basePath}${link.url}`;
            const activeClass = link.isBtn ? 'nav-btn-contact' : '';
            
            // Dropdown Logic
            if (link.dropdown) {
                const dropdownItems = link.dropdown.map(item => `
                    <a href="${this.basePath}${item.url}" class="dropdown-item">${item.text}</a>
                `).join('');
                
                return `
                <div class="nav-item dropdown">
                    ${link.text} <span class="zh">${link.zh}</span>
                    <div class="dropdown-menu">
                        ${dropdownItems}
                    </div>
                </div>`;
            }

            return `
            <a href="${url}" class="nav-item ${activeClass}">
                ${link.text} <span class="zh">${link.zh}</span>
            </a>`;
        }).join('');

        const headerHtml = `
        <nav class="navbar">
            <a href="${this.basePath}${config.brand.link}" class="brand">
                <div class="logo-text">${config.brand.text}</div>
                <div class="logo-sub">${config.brand.sub}</div>
            </a>
            <div class="mobile-toggle" onclick="document.querySelector('.nav-links').classList.toggle('active')">☰</div>
            <div class="nav-links">
                ${linksHtml}
            </div>
        </nav>
        `;
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
    }
}

