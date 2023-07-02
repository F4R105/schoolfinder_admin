import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// COMPONENTS
import Template from './Template'

// PAGES
import Home from "./pages/Home";
import Filter from "./pages/Filter";
import Matches from "./pages/Matches";
import School from "./pages/School";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/admin",
    element: <Template />,
    children: [{
      path: "",
      element: <Home />,
    },{
      path: "filter",
      element: <Filter />,
    },{
      path: "matches",
      element: <Matches />,
    },{
      path: "school",
      element: <School />,
    },{
      path: "about",
      element: <About />
    },{
      path: "*",
      element: <NotFound />
    }]
  },{
    path: "*",
    element: <NotFound />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
