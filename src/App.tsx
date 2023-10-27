import './App.scss'
import { Logo } from './assets/images';
import Signup from './pages/signup';

function App() {
  console.log(import.meta.env.VITE_SOME_KEY, "------");
  
  return (
    <>
      <div>
        <Logo />
      </div>
      
      <Signup />
    </>
  )
}

export default App
