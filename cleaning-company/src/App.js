import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <LandingPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
