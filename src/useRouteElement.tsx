import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Profile from './components/Profile'
import MainLayout from './layouts/MainLayout'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
const isAuth = true
const ProtectedRoute = () => {
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}
const RejectedRoute = () => {
  return !isAuth ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <RegisterLayout>
          <Login />
        </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'register',
          element: (
            <RegisterLayout>
          <Register />
        </RegisterLayout>
          )
        }
      ]
    },
    
  ])
  return routeElement
}
