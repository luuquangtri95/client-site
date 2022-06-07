import { LoginLayout } from '../components/Layout/LoginLayout'
import { Login } from '../pages'
import { Home } from '../pages/Home'
import { User } from '../pages/User'

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/user', component: User, exact: false },
  { path: '/login', component: Login, exact: false, layout: LoginLayout },
]
