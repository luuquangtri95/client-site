import './Navigation.scss'
import { NavLink } from 'react-router-dom'
export const Navigation = () => {
  return (
    <div className='topnav'>
      <div className='container'>
        <div className='menu'>
          <NavLink to='/' exact>
            Home
          </NavLink>
          <NavLink to='/user'>User</NavLink>

          <NavLink to='/login'>Login</NavLink>
        </div>
      </div>
    </div>
  )
}
