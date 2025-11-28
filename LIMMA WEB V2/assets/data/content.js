export const contentConfig = {
    nav: {
        brand: {
            text: "LIMMA",
            sub: "Engineer Feeling",
            link: "index.html"
        },
        links: [
            { text: "About", zh: "關於我們", url: "pages/about.html" },
            { 
                text: "Services", zh: "服務項目", url: "#services",
                dropdown: [
                    { text: "System Transformation", url: "pages/system.html" },
                    { text: "Content Engine", url: "pages/engine.html" },
                    { text: "Immersive Space", url: "pages/space.html" }
                ]
            },
            { text: "Work", zh: "精選案例", url: "#work" },
            { text: "News", zh: "最新動態", url: "#" },
            { text: "Contact", zh: "聯絡我們", url: "#contact", isBtn: true }
        ]
    },
    footer: {
        desc: "Engineer Feeling. <br>We bridge the gap between logical systems and emotional experiences.<br><br>台北市信義區松仁路 100 號<br>hello@limma.studio",
        sitemap: [
            { text: "Home", zh: "首頁", url: "index.html" },
            { text: "About Us", zh: "關於我們", url: "pages/about.html" },
            { text: "Services", zh: "服務項目", url: "#services" },
            { text: "Work", zh: "精選案例", url: "#work" },
            { text: "Contact", zh: "聯絡我們", url: "#contact" }
        ],
        social: [
            { text: "Instagram", url: "#" },
            { text: "LinkedIn", url: "#" },
            { text: "Behance", url: "#" },
            { text: "Facebook", url: "#" }
        ],
        legal: [
            { text: "Privacy Policy", zh: "隱私權政策", url: "#" },
            { text: "Terms of Use", zh: "使用條款", url: "#" }
        ],
        copyright: "© 2024 LIMMA STUDIO. All Rights Reserved."
    }
};

