import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import { themeOptions } from "./assets/mui-theme";
import "./assets/styles/styles.scss";
import HomePage from './Pages/HomePage/HomePage';

console.log("An optimist says the glass is half full, a pessimist says it's half empty, an engineer says the glass is twice as big as it needs to be.")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "*", element: <HomePage /> },
];


const router = createBrowserRouter(routes, {
  basename: `${process.env.PUBLIC_URL}/`,
});


root.render(
  <ThemeProvider theme={createTheme(themeOptions)}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);

