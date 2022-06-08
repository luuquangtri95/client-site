import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Register.scss'

export const Register = () => {
  const history = useHistory()
  const [formInput, setFormInput] = useState({
    email: '',
    username: '',
    password: '',
    retypePassword: '',
  })

  // const schema = yup.object().shape({
  //   email: yup.string().email().required('Please enter your email'),
  //   username: yup.string().required('Please enter your username'),
  //   password: yup.string().required('Please enter your password').min(3),
  //   retypePassword: yup
  //     .string()
  //     .required('Please enter your retype password')
  //     .oneOf([yup.ref('password')], 'Password does not match'),
  // })

  const isValidateInputs = () => {
    if (!formInput.email) {
      toast.error('Please enter your email')

      return false
    }
    if (!formInput.username) {
      toast.error('Please enter your username')

      return false
    }
    if (!formInput.password) {
      toast.error('Please enter your password')

      return false
    }
    if (!formInput.retypePassword) {
      toast.error('Please enter your retype password')

      return false
    }

    if (formInput.password !== formInput.retypePassword) {
      toast.error('Password does not match')

      return false
    }
    return true
  }

  const handleChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let check = isValidateInputs()
    if (check) {
      console.log(formInput)
    }
  }

  const handleMoveLoginPage = () => {
    history.push('/login')
  }

  return (
    <div className='register-container'>
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
                <label htmlFor='' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  value={formInput.email}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='' className='form-label'>
                  User Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='username'
                  value={formInput.username}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  value={formInput.password}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='' className='form-label'>
                  Retype Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='retypePassword'
                  value={formInput.retypePassword}
                  onChange={handleChange}
                />
              </div>

              <button type='submit' className='btn btn-success register '>
                Create new account
              </button>

              <hr />

              <button className='btn btn-primary login' onClick={handleMoveLoginPage}>
                Already an account. Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
