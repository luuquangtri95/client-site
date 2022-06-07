import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { DefaultLayout } from './components/Layout/DefaultLayout'
import { LoginLayout } from './components/Layout/LoginLayout'
import { routes } from './routes'
function App() {
  return (
    <div className='App'>
      <Switch>
        {routes.map((route, index) => {
          const Page = route.component
          let Layout = DefaultLayout

          if (route.layout) {
            Layout = route.layout
          }

          return (
            <Route key={index} path={route.path} exact={route.exact}>
              <Layout>
                <Page />
              </Layout>
            </Route>
          )
        })}
      </Switch>
    </div>
  )
}

export default App
