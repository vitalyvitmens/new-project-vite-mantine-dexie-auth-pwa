import { RouteObject } from 'react-router-dom'
import { RoutePaths } from './RoutePaths'
import Navigation from '../layout/Navigation/Navigation.lazy'
import HomePage from '../pages/HomePage/HomePage.lazy'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.lazy'
import LoginPage from '../pages/LoginPage/LoginPage.lazy'
import RegisterPage from '../pages/RegisterPage/RegisterPage.lazy'
import Offline from '../pages/Offline/Offline.lazy'

export const routes: RouteObject[] = [
  {
    path: RoutePaths.CatchAll,
    element: <Navigation />,
    children: [
      { path: RoutePaths.Home, element: <HomePage /> },
      { path: RoutePaths.NotFound, element: <NotFoundPage /> },
    ],
  },
  { path: RoutePaths.Login, element: <LoginPage /> },
  { path: RoutePaths.Register, element: <RegisterPage /> },
  { path: RoutePaths.Offline, element: <Offline /> },
]
