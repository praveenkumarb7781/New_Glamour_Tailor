import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter(
  [
    {
      path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "gallery", Component: Gallery },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
  ],
  { basename: import.meta.env.BASE_URL }
);
