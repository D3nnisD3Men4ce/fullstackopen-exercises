import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(e.target);

    switch (name) {
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
      default:
        return
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, password, confirmPassword } = event.target
    console.log({ name, email, password, confirmPassword });
  }


  return (
    <>
      <section className="heading">
          <h1>
            <FaSignInAlt /> Login
          </h1>

          <p>Login and start setting goals</p>
      </section>

      <section className="form">
      <form onSubmit={ handleSubmit }>

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
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}


export default Login
