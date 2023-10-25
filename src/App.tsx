import './App.scss'
import { Logo } from './assets/images';

function App() {
  console.log(import.meta.env.VITE_SOME_KEY, "------");
  
  return (
    <>
      <div>
        <Logo />
      </div>
      
      <p className="font-bold underline">
        Hello World
      </p>
    </>
  )
}

export default App
