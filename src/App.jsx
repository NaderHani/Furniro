
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home/Home"
function App() {

let routes = createBrowserRouter([
  {path:'', element:<RootLayout/>, children:[
    {index: true , element:<Home/>}
  ]
}])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
