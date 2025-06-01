# 🤖 GitHub Copilot Instructions

Welcome, Copilot! Here’s how you can best assist developers working in this project.

---

## 🛠️ Tech Stack Context

- **Framework:** React (SPA, JSX/JS)
- **Build Tool:** Vite (ESM, fast refresh, dev server)
- **Styling:** Tailwind CSS (utility-first, configured in `tailwind.config.js`)
- **Charts:** Recharts (data visualization)
- **Icons:** Heroicons (SVG icon set, often used with React)

---

## 📁 Project Structure

```
.
├── public/              # Static assets (served as-is)
│   └── vite.svg
├── src/
│   ├── components/      # React components (named *.jsx)
│   │   ├── InfoCard.jsx
│   │   └── DashboardChart.jsx
│   ├── assets/          # Images (importable in React)
│   │   └── react.svg
│   ├── App.jsx          # Main app shell (root component)
│   ├── App.css          # App-level styles
│   ├── index.css        # Global styles (Tailwind imports here)
│   └── main.jsx         # App entry point (ReactDOM/render)
├── index.html           # HTML template for Vite
├── package.json         # Project dependencies/scripts
├── tailwind.config.js   # TailwindCSS configuration
├── vite.config.js       # Vite build configuration
└── eslint.config.js     # ESLint rules
```

---

## 🧑‍💻 Copilot Guidance

### 1. File & Directory Conventions

- **React Components**:  
  - Add new components to `src/components/` as `ComponentName.jsx`.
  - Use PascalCase for component names.
- **Assets**:  
  - Store images & SVGs in `src/assets/`.  
  - Import images as modules in JSX.
- **Styling**:  
  - Use Tailwind CSS utility classes for most styling.
  - For custom styles, use `App.css` or `index.css`.
- **Charts**:  
  - Use [Recharts](https://recharts.org/) for any data visualizations.
- **Icons**:  
  - Use [Heroicons](https://heroicons.com/) React components (install via npm).

### 2. Imports & Best Practices

- Always use relative imports within `src/`.
- Import Tailwind’s base styles in `index.css` only.
- When creating new components, start with functional components and hooks.
- Follow existing code style; refer to ESLint for linting rules.

### 3. Entry Points & Bootstrapping

- The app starts in `src/main.jsx`, which renders the root `App` component.
- `index.html` is Vite’s HTML template; avoid direct edits unless necessary.

### 4. Adding Dependencies

- Add new dependencies via `npm install` (reflected in `package.json`).
- Configure tools (like Tailwind, ESLint) in their respective config files at the project root.

### 5. Example: Creating a New Chart Component

- Location: `src/components/`
- Name: `SalesChart.jsx`
- Usage:  
  - Import Recharts components (e.g., `<LineChart>`, `<XAxis>`, etc.)
  - Use Tailwind classes for layout and design.

```jsx
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [ ... ];

export default function SalesChart() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <LineChart width={400} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#2563eb" />
      </LineChart>
    </div>
  );
}
```

### 6. Example: Using an Icon

```jsx
import { AcademicCapIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="flex items-center">
      <AcademicCapIcon className="h-6 w-6 text-blue-500" />
      <span className="ml-2 font-bold">Dashboard</span>
    </header>
  );
}
```

---

## ✅ Project-Specific Tips

- Use Tailwind classes for layout, spacing, and responsiveness.
- Organize complex UIs into smaller components within `src/components/`.
- Keep configuration files (`tailwind.config.js`, `vite.config.js`, etc.) at the project root.
- Prefer named exports from utility files if you add any.

---

## 🚫 What NOT to Do

- Don’t put source code outside `src/`.
- Don’t use class-based React components.
- Don’t write global CSS except in `index.css` (prefer Tailwind).

---

## 📚 References

- [Vite Docs](https://vitejs.dev/guide/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)
- [Recharts Docs](https://recharts.org/)
- [Heroicons Docs](https://heroicons.com/)

---

Happy coding! 🚀