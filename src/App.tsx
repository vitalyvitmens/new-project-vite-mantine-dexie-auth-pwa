import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { routes } from './routes/routes'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

export const App = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.element?.toString()}
              path={route.path}
              element={
                <ErrorBoundary>
                  {route.children ? (
                    <PrivateRoute
                      route={route}
                      key={route.element?.toString()}
                    />
                  ) : (
                    route.element
                  )}
                </ErrorBoundary>
              }
            />
          ))}
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}
