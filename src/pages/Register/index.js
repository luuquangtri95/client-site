import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Register.scss'
import classNames from 'classnames'
import authApi from '../../services/authApi'

export const Register = () => {
  const history = useHistory()
  const formRef = useRef()
  const [formInput, setFormInput] = useState({
    email: '',
    username: '',
    phone: '',
    password: '',
    retypePassword: '',
  })

  const [stateValid, setStateValid] = useState({
    isValidEmail: false,
    isValidPhone: false,
    isValidPassword: false,
    isValidRetypePassword: false,
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
      setStateValid((prevState) => ({
        ...prevState,
        isValidEmail: true,
      }))

      return false
    }

    if (!formInput.phone) {
      toast.error('Please enter your phone number')
      setStateValid((prevState) => ({
        ...prevState,
        isValidPhone: true,
      }))

      return false
    }

    if (!formInput.password) {
      toast.error('Please enter your password')
      setStateValid((prevState) => ({
        ...prevState,
        isValidPassword: true,
      }))

      return false
    }
    if (!formInput.retypePassword) {
      toast.error('Please enter your retype password')
      setStateValid((prevState) => ({
        ...prevState,
        isValidRetypePassword: true,
      }))

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
      [name]: value.trim(),
    }))

    setStateValid((prevState) => ({
      ...prevState,
      isValidEmail: false,
      isValidPhone: false,
      isValidPassword: false,
      isValidRetypePassword: false,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let check = isValidateInputs()
    if (check) {
      let result = await authApi.register(formInput)
      if (result.EC === 0) {
        // if create user success, redirect to login page
        toast.success('register account successfully, redirect to login page after 3s')
        setTimeout(() => {
          history.push('/login')
        }, 3000)
      } else {
        toast.error(result.EM)
      }
      // reset form
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
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className='mb-3'>
                <label htmlFor='' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className={classNames('form-control', {
                    'is-invalid': stateValid.isValidEmail,
                  })}
                  name='email'
                  value={formInput.email}
                  onChange={handleChange}
                />
                <div className='invalid-feedback'>
                  {stateValid.isValidEmail ? 'Please enter your email' : ''}
                </div>
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
                  Phone Number
                </label>
                <input
                  type='text'
                  className={classNames('form-control', {
                    'is-invalid': stateValid.isValidPhone,
                  })}
                  name='phone'
                  value={formInput.phone}
                  onChange={handleChange}
                />
                <div className='invalid-feedback'>
                  {stateValid.isValidPhone ? 'Please enter your phone' : ''}
                </div>
              </div>

              <div className='mb-3'>
                <label htmlFor='' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className={classNames('form-control', {
                    'is-invalid': stateValid.isValidPassword,
                  })}
                  name='password'
                  value={formInput.password}
                  onChange={handleChange}
                />
                <div className='invalid-feedback'>
                  {stateValid.isValidPassword ? 'Please enter your password' : ''}
                </div>
              </div>

              <div className='mb-3'>
                <label htmlFor='' className='form-label'>
                  Retype Password
                </label>
                <input
                  type='password'
                  className={classNames('form-control', {
                    'is-invalid': stateValid.isValidRetypePassword,
                  })}
                  name='retypePassword'
                  value={formInput.retypePassword}
                  onChange={handleChange}
                />
                <div className='invalid-feedback'>
                  {stateValid.isValidRetypePassword ? 'Please enter your retype password' : ''}
                </div>
              </div>

              <button type='submit' className='btn btn-success register '>
                Create new account
              </button>

              <hr />

              <button className='btn btn-primary login' onClick={handleMoveLoginPage}>
                Already an account. Login Here
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
