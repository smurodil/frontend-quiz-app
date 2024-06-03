// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// pages
import Home from './pages/Home'
import Quiz from './pages/Quiz'

// Layouts
import MainLayout from './layout/MainLayout'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/quiz/:title",
          element: <Quiz/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}/>
}

export default App