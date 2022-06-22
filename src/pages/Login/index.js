import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import authApi from '../../services/authApi'
import './Login.scss'
import { toast } from 'react-toastify'

export const Login = () => {
  const history = useHistory()

  useEffect(() => {
    const sesstion = sessionStorage.getItem('account')

    if (sesstion) {
      history.push('/')
    }
  }, [])

  const [formInput, setFormInput] = useState({
    valueLogin: '',
    password: '',
  })
  const [isLogging, setIsLogging] = useState(false)

  const handleChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //
    const isLoggined = await authApi.login(formInput)

    if (isLoggined.EC === 0) {
      toast.success(isLoggined.EM)

      let data = {
        isAuthenticated: true,
        token: 'fake token',
      }

      sessionStorage.setItem('account', JSON.stringify(data))
      setIsLogging(true)

      history.push('/')
    } else {
      setIsLogging(false)
      toast.error(isLoggined.EM)
    }
  }

  const handleCreateNewAccount = () => {
    history.push('/register')
  }

  return (
    <div className='login-container'>
      <div className='container'>
        <div className='row login-content '>
          <div className='content-left col-md-7 mt-5'>
            <div className='brand'>Fakebook</div>
            <div className='detail'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cum dignissimos iure
              excepturi asperiores reiciendis neque doloremque ad ratione! Reiciendis cumque
              maiores, sequi dignissimos ex magni ipsum perspiciatis? Eum, rerum!
            </div>
          </div>
          <div className='content-right col-md-5'>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Email address / Phone number
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  name='valueLogin'
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  name='password'
                  onChange={handleChange}
                />
              </div>

              <button type='submit' disabled={isLogging} className='btn btn-primary login mt-3 '>
                Login
              </button>
              <span className='text-center d-block mt-3 mb-3'>Forgot password</span>

              <hr />

              <button
                type='button'
                onClick={handleCreateNewAccount}
                className='btn btn-success login'
              >
                Create new account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
