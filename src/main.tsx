import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'

const router = createBrowserRouter([
  { path: '/', Component: LandingPage },
])

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FDFDFD',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
