import { contentConfig } from '../../data/content.js';

export class Footer {
    constructor(basePath) {
        this.basePath = basePath;
    }

    render() {
        const config = contentConfig.footer;

        // Helper to generate links
        const generateLinks = (links) => links.map(link => {
            const url = link.url.startsWith('#') ? `${this.basePath}index.html${link.url}` : (link.url.startsWith('http') ? link.url : `${this.basePath}${link.url}`);
            const zhSpan = link.zh ? `<span class="zh">${link.zh}</span>` : '';
            return `<a href="${url}">${link.text} ${zhSpan}</a>`;
        }).join('');

        const footerHtml = `
        <footer class="site-footer">
            <div class="footer-grid">
                <div class="footer-col">
                    <span class="footer-logo">LIMMA</span>
                    <p class="footer-desc">${config.desc}</p>
                </div>
                <div class="footer-col">
                    <h4>Sitemap / 網站地圖</h4>
                    <div class="footer-links">
                        ${generateLinks(config.sitemap)}
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Social / 社群媒體</h4>
                    <div class="footer-links">
                        ${generateLinks(config.social)}
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Legal / 法律資訊</h4>
                    <div class="footer-links">
                        ${generateLinks(config.legal)}
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <span>${config.copyright}</span>
                <span>Designed with Feeling.</span>
            </div>
        </footer>
        `;
        document.body.insertAdjacentHTML('beforeend', footerHtml);
    }
}

