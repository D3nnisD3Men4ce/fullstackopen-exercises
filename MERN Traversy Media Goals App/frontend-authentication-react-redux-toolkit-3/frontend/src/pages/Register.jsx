import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from "react-icons/fa"
import { register, reset } from "../features/auth/authSlice"
import Spinner from '../components/Spinner'



function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { name, email, password, confirmPassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth) 
  // destructuring authSlice states
  // state.auth can be traced back to authSlice

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
    // dispatch is executing the authSlice methods

  }, [user, isError, isSuccess, message, navigate, dispatch])


  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(e.target);

    switch (name) {
        case "name":
            setFormData( prev => {
                return {
                  ...prev,
                  [name] : value
                }
            });
          return
      case "email":
            setFormData( prev => {
                return {
                  ...prev,
                  [name] : value
                }
            });
          return
      case "password":
            setFormData( prev => {
                return {
                  ...prev,
                  [name] : value
                }
            });
          return
      case "confirmPassword":
            setFormData( prev => {
                return {
                  ...prev,
                  [name] : value
                }
            });
          return
      default:
        return
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }


  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
          <h1>
            <FaUser /> Register
          </h1>

          <p>Please create an account</p>
      </section>

      <section className="form">
      <form onSubmit={ handleSubmit }>
          <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={ name }
                placeholder="Enter your name"
                onChange={ handleChange }
                />
          </div>

          <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                id="email" 
                name="email" 
                value={ email }
                placeholder="Enter your email"
                onChange={ handleChange }
                />
          </div>

          <div className="form-group">
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                name="password" 
                value={ password }
                placeholder="Enter your password"
                onChange={ handleChange }
                />
          </div>

          <div className="form-group">
              <input 
                type="password" 
                className="form-control" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={ confirmPassword }
                placeholder="Confirm password"
                onChange={ handleChange }
                />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}


export default Register

