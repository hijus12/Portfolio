import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ListeProject from './Navig/ListeProject.tsx'
import DetailProject from './components/DetilProject.tsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/listeP",
    element: <ListeProject />
  },
  {
    path: "/detailproject/:id",
    element: <DetailProject/>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
