## 🧪 SkillSpark Sandbox — Feature Mastery Checklist

A Notion-style checklist covering all the experimental, real-world, chaos-mode frontend features — to help you master UI logic, DOM control, and component thinking using **Next.js, React, Tailwind**.

---

### ✅ 1. Persistent Dark Mode Toggle (Hydration Safe)

* **Description**: Detect and persist user theme (light/dark) using system preference or localStorage
* **Teaches**: SSR-safe theming, `useEffect`, hydration mismatch fix, inline script hacks
* **Bonus**: Animate theme toggle, sync with system preferences

---

### ✅ 2. Active Link Highlight in Navbar

* **Description**: Navbar highlights the current page based on the route
* **Teaches**: `usePathname()` usage, conditional classnames, DRY nav rendering
* **Bonus**: Works with nested/dynamic routes

---

### 🔳 3. Resizable Panels (Like VS Code Split View)

* **Description**: Click-drag to resize two panels (left/right or top/bottom)
* **Teaches**: DOM refs, `onMouseDown`, `onMouseMove`, state sync, layout reflow
* **Bonus**: Snap to min width, persist size in localStorage

---

### 🔄 4. Tab Sync with URL Query

* **Description**: Maintain selected tab using `?tab=xyz` in the URL
* **Teaches**: `useSearchParams()`, syncing UI with URL state, shallow routing
* **Bonus**: Back/forward browser navigation works smoothly

---

### 📜 5. Scroll Sync Between Two Panes

* **Description**: Scroll one pane and the second pane scrolls in sync (e.g., Markdown + Preview)
* **Teaches**: `scrollTop`, `scrollHeight`, event listeners, scroll ratio sync
* **Bonus**: Add smooth scrolling + fine-tuned calibration

---

### 🎢 6. Animated Route Transitions

* **Description**: Smooth animations between routes/pages using Framer Motion
* **Teaches**: Layout nesting, `AnimatePresence`, key-based re-renders
* **Bonus**: Loading skeletons between routes

---

### ⚙️ 7. Settings Modal with Keyboard Shortcut (`cmd/ctrl + K`)

* **Description**: Command menu that opens with keyboard, overlays screen, searchable list
* **Teaches**: Accessibility, key listeners, modals, portals, focus trapping
* **Bonus**: Use with dynamic navigation/actions

---

### 🔍 8. Search Highlight (Like VS Code Ctrl+F)

* **Description**: Highlight searched terms dynamically in long text blocks
* **Teaches**: Text parsing, RegExp, DOM manipulation, fuzzy search
* **Bonus**: Add scroll-to-highlight feature

---

### 🎯 9. Click-and-Focus Tracker

* **Description**: Log every clicked DOM element, outline it visually like Inspect Tool
* **Teaches**: Event delegation, `document.addEventListener`, DOM traversal, z-index
* **Bonus**: Export click map or heatmap-style logs

---

### 📦 10. Theme Builder UI (Like Tailwind Play)

* **Description**: A UI for changing theme variables and previewing them live
* **Teaches**: CSS variables, controlled inputs, live styling, dynamic class generation
* **Bonus**: Save and share theme configs

---

### 🧠 11. AI Markdown Editor (Mock)

* **Description**: Markdown editor + preview with fake AI reply on key press
* **Teaches**: `textarea`, `react-markdown`, async loading simulation, typing delay logic
* **Bonus**: Add typing animation + mock API feel

---

Use this like a **skill gym** — tick them off one by one, revisit the ones that broke your brain.
Let me know which one you're unlocking next 💥
