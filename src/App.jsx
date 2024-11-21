import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./components/RootLayout";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about-page',
          element: <About />
        }

      ]
    },

  ]);


  return <RouterProvider router={router} />;
}
export default App