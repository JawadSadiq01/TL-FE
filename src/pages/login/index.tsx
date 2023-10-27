import Input from '../../components/input'
import Button from '../../components/Button'
import { Logo } from '../../assets/images';
import './style.scss'
const index = () => {
  return (
    <>
    <div className="loginPage">
      <div className="sideDiv">
        <Logo/>
      </div>
      <div className="loginForm">
        <h1 className='text-white'>Log In to Panel</h1>
        <form action="submit">
          <Input name="Email" type="email"placeholder='Enter Email'/>
          <Input name="password" type="password" placeholder='Enter Password'/>

          <div className="logged my-8">
            <input type="checkbox" name="keepLogIn" id="keepLogIn" />
            <p className='text-white w-3/4 '>Keep me Login</p>
          </div>

          <Button value='Log In'/>
        </form>
      </div>

    </div>
    </>
  )
}

export default index
