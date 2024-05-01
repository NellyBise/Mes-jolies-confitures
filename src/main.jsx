import { render } from 'preact'
import './index.scss'
import * as React from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './router.jsx'
render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('app')
)
