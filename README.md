# TransFlow

A modern, responsive web application built with React, TypeScript, Vite, and Material-UI.

## Features

- ⚡ **Vite** - Fast development and build tool
- ⚛️ **React 19** - Latest React with TypeScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **Material-UI (MUI)** - Beautiful React component library
- 🛣️ **React Router** - Client-side routing and navigation
- 🔄 **API Client Auto-Generation** - OpenAPI TypeScript integration
- 📱 **Responsive Design** - Works on both web and mobile devices
- 🎯 **TypeScript** - Type-safe code

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Transflow-Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run generate-api` - Generate TypeScript API client from OpenAPI schema

## Project Structure

```
src/
├── api/              # API client configuration
├── components/       # Reusable components (e.g., Sidebar)
├── layouts/          # Layout components (e.g., MainLayout)
├── pages/            # Page components (Home, Dashboard, Settings)
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## API Client Generation

The project uses `openapi-typescript` to auto-generate TypeScript types from an OpenAPI schema.

1. Update the `openapi.yaml` file with your API specification
2. Run the generation script:
```bash
npm run generate-api
```

This will create a `src/api/generated/api.ts` file with TypeScript types for your API.

## Customization

### Theme

The MUI theme can be customized in `src/App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});
```

### Sidebar Menu

Add or modify menu items in `src/components/Sidebar.tsx`:

```typescript
const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];
```

## Technologies Used

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Material-UI](https://mui.com/) - React component library
- [React Router](https://reactrouter.com/) - Routing library
- [OpenAPI TypeScript](https://openapi-ts.pages.dev/) - API client generation

## License

MIT

