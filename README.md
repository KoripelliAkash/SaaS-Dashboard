# SaaS Dashboard - React & Vite

This is a feature-rich, fully responsive SaaS dashboard application built from scratch using React and Vite. The project showcases a modern, clean UI with both light and dark themes, interactive data visualizations, and a complete set of controls for data tables, including searching, filtering, and sorting.

### ✨ **[Live Demo](https:




---

## Features

- **Fully Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile screen sizes.
- **Dual Theming:** Switch between light and dark modes with persistence in local storage.
- **Collapsible Sidebars:** Both left and right sidebars can be toggled open or closed. On tablet and mobile, they function as overlays.
- **Dynamic Favorites System:** Click the star icon to add/remove a page from a dynamic "Favorites" list in the main sidebar.
- **Interactive Notifications:** A bell icon opens a notification popup that can be dismissed by clicking outside of it.
- **Two Main Pages:**
  - **eCommerce Dashboard:** A comprehensive overview with various data visualization charts.
  - **Order List:** A detailed table with full interactivity.
- **Data Visualization:**
  - Bar, Line, and Donut charts using **Recharts**.
  - A geographic world map chart using **react-simple-maps**.
- **Advanced Table Controls:**
  - **Client-Side Searching:** Instantly search across multiple data fields.
  - **Status Filtering:** Filter the list by order status using a dropdown.
  - **Three-State Sorting:** Clickable table headers cycle through ascending, descending, and no-sort states.
  - **Pagination:** Automatically calculated and displayed when the number of items exceeds the page limit.
  - **Row Selection:** Interactive checkboxes to select single or all rows.

---

## Tech Stack

- **Framework:** React 19 (with Hooks)
- **Build Tool:** Vite
- **Styling:** CSS Modules
- **Icons:** `react-icons`
- **Charting:** `recharts`
- **Mapping:** `react-simple-maps`

---

## Setup and Local Development

To set up and run this project on your local machine, follow these steps:

**1. Clone the Repository**
```bash
git clone https:
```

**2. Navigate to the Project Directory**
```bash
cd SaaS-Dashboard
```

**3. Install Dependencies**

This project was built with React 19, and some of its libraries have peer dependencies for React 18. You must use the `--legacy-peer-deps` flag to install correctly.

```bash
npm install --legacy-peer-deps
```

**4. Run the Development Server**
```bash
npm run dev
```

The application will be available at `http:

---

## Deployment

This application is deployed on Vercel. The deployment process involves:

1. Pushing the project to a public GitHub repository.
2. Importing the repository into Vercel.
3. Crucially, overriding the default "Install Command" in the Vercel project settings to `npm install --legacy-peer-deps` to resolve the peer dependency conflicts during the build process.

Vercel automatically builds and deploys the `dist` directory. Continuous deployment is enabled for every push to the main branch.

**Live Version:** [https:

---

## Design Decisions, Challenges, and Improvements

### Design Decisions

- **State Hoisting:** All shared state (like sidebar visibility, active page, and the favorites list) is managed in the top-level `App.jsx` component. Similarly, all data logic for the order list (filtering, sorting, etc.) is managed in the parent `Orders.jsx` component. This makes state management predictable and keeps child components "dumb" and reusable.

- **CSS Variables for Theming:** A global set of CSS variables was defined for colors, backgrounds, and shadows. A `[data-theme='dark']` selector overrides these variables, allowing for an efficient and scalable light/dark mode system.

- **Component-Based Architecture:** The UI is broken down into small, reusable components (e.g., `StatCard`, `Pagination`, `OrderTable`), each with its own scoped styles using CSS Modules.

- **Custom Hooks:** Reusable logic for detecting window size (`useWindowSize`) and clicks outside a component (`useOnClickOutside`) was encapsulated in custom hooks for clean and maintainable code.

### Challenges Faced & Solutions

**Peer Dependency Conflicts:** The biggest challenge was the `ERESOLVE` error from npm. This was caused by using React 19 while several key libraries (`react-simple-maps`, `@mui/material`) officially required React 18.

- **Solution:** The `--legacy-peer-deps` flag was used for both local `npm install` and the Vercel "Install Command" to bypass the strict peer dependency checks.

**react-icons Import Errors:** We encountered several `SyntaxError` issues where valid icon names were not found.

- **Solution:** This pointed to a corrupted or outdated local `react-icons` installation. The definitive fix was to update the library to the latest version with `npm install react-icons@latest` (using the legacy flag) and restart the Vite server to clear its dependency cache.

**Responsive Chart Rendering:** An initial attempt with the Nivo library resulted in the map chart not being visible.

- **Solution:** This was a classic issue where the responsive chart component's parent div did not have a defined height. The solution was to explicitly set a height in the CSS for the container.

### Improvements Made

- **Dynamic Pagination:** The initial pagination was hardcoded. It was refactored to be fully dynamic, calculating the number of pages based on the total items after searching and filtering are applied.

- **Enhanced Sorting:** The initial sorting was a simple two-state toggle. This was upgraded to a more intuitive three-state cycle (ascending → descending → off).

- **Responsive Overlays:** For tablet and mobile, the sidebars were converted from pushing the content to sliding in as overlays, providing a much better user experience on smaller screens.

- **UX Refinements:** Added a `useEffect` hook to reset the pagination to page 1 whenever a filter is changed, preventing the user from being on a non-existent page.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https:

---

## Author

**Your Name**
- GitHub: [@KoripelliAkash](https:
- LinkedIn: [Koripelli Akash](https:

---

## Acknowledgments

- Thanks to the React and Vite teams for their excellent frameworks
- Recharts for the beautiful charting library
- react-simple-maps for geographic visualizations