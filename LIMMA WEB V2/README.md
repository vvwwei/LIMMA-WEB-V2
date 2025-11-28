# LIMMA WEB V2 - 專案結構與開發規範

本文件說明 LIMMA WEB V2 的專案結構、檔案分類原則以及開發維護規範。

## 1. 專案結構 (Project Structure)

為了確保專案的可維護性與擴充性，我們採用模組化的目錄結構：

```
LIMMA WEB V2/
├── index.html          # 首頁 (Main Entry)
├── assets/             # 靜態資源目錄
│   ├── css/            # 樣式表
│   │   └── style.css   # 全域共用樣式 (Design System)
│   └── js/             # 腳本檔案 (預留)
│       └── main.js     # (可選) 共用邏輯
├── pages/              # 子頁面目錄
│   ├── about.html      # 關於我們
│   ├── system.html     # 系統轉型案例
│   ├── engine.html     # 內容引擎案例
│   └── space.html      # 空間體驗案例
└── README.md           # 專案說明文件
```

## 2. 分類管理原則 (Classification Principles)

### 2.1 頁面 (Pages)
- **首頁 (`index.html`)**: 作為網站入口，包含全域導航、視覺特效 (WebGL) 與主要服務區塊。
- **子頁面 (`pages/*.html`)**: 所有詳細內容頁面應放置於 `pages/` 目錄下，保持根目錄整潔。
  - 新增頁面時，請確保連結路徑正確指向 `../assets/css/style.css` 與 `../index.html`。

### 2.2 樣式 (Styles)
- **共用樣式**: 所有頁面共用的設計系統（變數、排版、導航、頁尾）統一由 `assets/css/style.css` 管理。
- **設計變數 (CSS Variables)**: 請務必使用 `:root` 中定義的變數（如 `--c-accent`, `--f-display`）以確保視覺一致性。
- **模組化**: 若某個頁面有特殊樣式，可於該 HTML 內部的 `<style>` 撰寫，但若該樣式被兩個以上頁面使用，請提取至 `style.css`。

## 3. 自動檢查與維護規範 (Maintenance Rules)

為了確保程式碼品質與「單獨調整不影響全部」的目標，請遵守以下規範：

### 3.1 命名規範
- **檔案命名**: 使用全小寫英文，以連字號分隔 (kebab-case)，例如 `service-detail.html`。
- **CSS 類名**: 建議使用語意化命名，避免過於通用的名稱（如 `.box`, `.red`）。

### 3.2 修改流程 (Workflow)
1. **修改全域樣式**: 若需調整導航列 (Navbar) 或頁尾 (Footer)，請修改 `assets/css/style.css`。
   - *注意*: 導航列的 HTML 結構目前分散於各頁面，若需增減選單項目，需同步更新所有 HTML 檔案（或未來導入樣板引擎）。
2. **新增頁面**:
   - 複製現有的 `pages/` 檔案作為模板。
   - 確保 `<link rel="stylesheet" href="../assets/css/style.css">` 路徑正確。
   - 更新導航列中的連結狀態（如 `active` 樣式）。

### 3.3 檢查清單 (Checklist)
在提交修改前，請自我檢查：
- [ ] **路徑檢查**: 所有 `href` 與 `src` 是否正確？（特別是 `../` 的使用）
- [ ] **RWD 測試**: 在手機與桌機版面是否正常顯示？
- [ ] **主色調檢核**: 是否使用了全域變數 `--c-accent` 而非硬編碼顏色？
- [ ] **控制台無錯誤**: 開發者工具 (F12) 中是否有紅字錯誤 (JS/404)？

## 4. 未來優化建議
- **組件化**: 隨著專案擴大，建議導入前端框架 (如 Vue, React) 或靜態網站產生器 (如 Astro, Jekyll) 以解決 HTML 重複問題。
- **自動化**: 建立 CI/CD 流程，自動檢查死連結與語法錯誤。

---
*Designed with Feeling by LIMMA Engineering Team*

