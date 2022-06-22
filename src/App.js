import { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import { DefaultLayout } from './components/Layout/DefaultLayout'
import { privateRoutes, publicRoutes } from './routes'

function App() {
  const [accessPrivateRouter, setAccessPrivateRouter] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const session = sessionStorage.getItem('account')

    if (!session) {
      history.push('/login')
    }

    setAccessPrivateRouter(true)
  }, [])

  return (
    <div className='App'>
      <Switch>
        {publicRoutes.map((route, index) => {
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

        {accessPrivateRouter &&
          privateRoutes.map((route, index) => {
            const Page = route.component

            return (
              <Route key={index} path={route.path} exact={route.exact}>
                <DefaultLayout>
                  <Page />
                </DefaultLayout>
              </Route>
            )
          })}
      </Switch>
    </div>
  )
}

export default App
