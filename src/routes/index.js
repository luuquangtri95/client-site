import { LoginLayout } from '../components/Layout/LoginLayout'
import { Login, Register, Home, User } from '../pages'

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/user', component: User, exact: false },
  { path: '/login', component: Login, exact: false, layout: LoginLayout },
  { path: '/register', component: Register, exact: false, layout: LoginLayout },
]
