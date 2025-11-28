export class Widget {
    constructor(basePath) {
        this.basePath = basePath;
    }

    render() {
        const widgetHtml = `
        <div class="concierge-widget" id="concierge">
            <div class="widget-header">
                <span style="letter-spacing:0.1em; font-weight:700;">CONCIERGE</span>
                <span style="cursor:pointer; font-size:1.2rem;" onclick="document.getElementById('concierge').classList.remove('visible')">×</span>
            </div>
            <div class="widget-body">想探索哪方面的數位工藝？<br><span style="font-size:0.8em; color:#888;">How can we help you?</span></div>
            <select class="widget-select" id="identitySelect">
                <option value="" disabled selected>請選擇您的需求 / Select Service...</option>
                <option value="system">系統轉型 (System Transformation)</option>
                <option value="engine">品牌內容 (Content Engine)</option>
                <option value="space">空間體驗 (Immersive Space)</option>
            </select>
            <button class="widget-action-btn" onclick="navigateToSolution()">前往專屬方案 / GO</button>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', widgetHtml);
        
        // Initialize Widget Logic
        setTimeout(() => {
            const widget = document.getElementById('concierge');
            if (!widget) return;

            window.addEventListener('scroll', () => {
                if (window.scrollY > 600) {
                    if (!widget.classList.contains('manually-hidden')) widget.classList.add('visible');
                } else { widget.classList.remove('visible'); }
            });
            
            const that = this;
            window.navigateToSolution = function() {
                const targetId = document.getElementById('identitySelect').value;
                if (targetId) {
                    if (targetId === 'system') window.location.href = that.basePath + 'pages/system.html';
                    else if (targetId === 'engine') window.location.href = that.basePath + 'pages/engine.html';
                    else if (targetId === 'space') window.location.href = that.basePath + 'pages/space.html';
                }
            };
        }, 100);
    }
}

