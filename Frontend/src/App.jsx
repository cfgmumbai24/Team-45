import './App.css'
import { Button } from './components/ui/button'

function App() {
   return (
    <div>
      <Button onClick={()=>console.log("Button Clicked")}> Hello There</Button>
    </div>
  )
}

export default App
