import Input from '../../components/Input'
import Button from '../../components/Button'
import BgBox from '../../components/BgBox'
import { Logo } from '../../assets/images';
import './style.scss'
const index = () => {
  let boxStyle1:React.CSSProperties = {
    width: '210px',
    height: '210px',
    background:'linear-gradient(rgba(255, 255, 255, 0.81),rgba(255, 255, 255, 0.23))',
    position: 'absolute',
    top: '-9em',
    left: '0',
    borderRadius: '20px',
    transform:'rotate(45deg)',
  }
  let boxStyle2:React.CSSProperties ={
    width: '100px',
    height: '100px',
    background:'linear-gradient(rgba(255, 255, 255, 0.81),rgba(255, 255, 255, 0.23))',
    position: 'absolute',
    top: '20em',
    right: '-4.3em',
    borderRadius: '30px',
    transform:'rotate(40deg)',
  }
  let boxStyle3:React.CSSProperties ={
    width: '210px',
    height: '210px',
    background:'linear-gradient(170deg,rgba(255, 255, 255, 0.81),rgba(255, 255,255,0.1),rgba(255, 255,255,0)',
    position: 'absolute',
    bottom: '-1em',
    left: '-.8em',
    borderRadius: '50px',
    transform:'rotate(30deg)',
  }
  let boxStyle4:React.CSSProperties = {
    width: '210px',
    height: '210px',
    background:'linear-gradient(rgba(157, 157, 157, 0.05),rgba(157,157,157, 0.02))',
    position: 'absolute',
    top: '-5em',
    left: '1em',
    borderRadius: '30px',
    transform:'rotate(45deg)',
  }
  let boxStyle5:React.CSSProperties ={
    width: '250px',
    height: '250px',
    background:'linear-gradient(rgba(157, 157, 157, 0.05),rgba(157,157,157, 0.02))',
    position: 'absolute',
    top: '22em',
    right: '-8em',
    borderRadius: '30px',
    transform:'rotate(40deg)',
  }
  let boxStyle6:React.CSSProperties ={
    width: '210px',
    height: '210px',
    background:'linear-gradient(rgba(157, 157, 157, 0.05),rgba(157,157,157, 0.02))',
    position: 'absolute',
    bottom: '-4em',
    left: '-4em',
    borderRadius: '50px',
    transform:'rotate(30deg)',
  }



  return (
    <>
    <div className="loginPage">
      <div className="sideDiv">
        <BgBox style={boxStyle1}/>
        <BgBox style={boxStyle2}/>
        <BgBox style={boxStyle3}/>
        <Logo/>
      </div>
      <div className="loginForm">
      <BgBox style={boxStyle4}/>
      <BgBox style={boxStyle5}/>
      <BgBox style={boxStyle6}/>

        <h1 className='text-white'>Log In to Panel</h1>
        <form action="submit">
          <Input name="Email" type="email"placeholder='Enter Email'/>
          <Input name="password" type="password" placeholder='Enter Password'/>

          <div className="logged my-8">
            <input type="checkbox" name="keepLogIn" id="keepLogIn" />
            <p className='text-white w-11/12 '>Keep me Login</p>
          </div>

          <Button value='Log In'/>
        </form>
      </div>

    </div>
    </>
  )
}

export default index
