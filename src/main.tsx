import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// import Home from './home'
// import Contact from './contact'
import Header from './header'
import Fallback from './fallback'
import { ErrorBoundary } from 'react-error-boundary'

const Home = lazy(() => import('./home'))
const Contact = lazy(() => import('./contact'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          // <ErrorBoundary fallback={<div>Something went wrong!</div>}>
          <Home />
          // </ErrorBoundary>
        ),
      },
      {
        path: '/contact',
        element: (
          <ErrorBoundary fallback={<div>Something went wrong!</div>}>
            <Contact />
          </ErrorBoundary>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
