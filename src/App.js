import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { DefaultLayout } from './components/Layout/DefaultLayout'
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

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
