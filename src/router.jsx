import App from './app'
import Home from './pages/Home/Home'
import Etiquettes from './pages/Etiquettes/Etiquettes'

import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', index: true, element: <Home /> },
      { path: '/etiquettes', index: true, element: <Etiquettes /> },
    ],
  },
])

export default Router
