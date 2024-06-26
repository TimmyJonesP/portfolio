import { Contact, Home, Projects, ProjectDetail } from "./pages";

export interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetail />,
  },
];
