import App from './app'
import Home from './pages/Home/Home'
import Labels from './pages/Labels/Labels'

import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', index: true, element: <Home /> },
      { path: '/etiquettes', index: true, element: <Labels /> },
    ],
  },
])

export default Router
