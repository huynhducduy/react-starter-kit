import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  console.log(history.location.state)
  return <h1>Login Page</h1>
}

export default Login
