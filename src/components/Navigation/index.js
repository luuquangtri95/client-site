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

          <div className='actions'>
            <p style={{ color: 'white', marginBottom: '0', marginTop: '14px' }}>Lưu Quang Trí</p>
          </div>
        </div>
      </div>
    </div>
  )
}
