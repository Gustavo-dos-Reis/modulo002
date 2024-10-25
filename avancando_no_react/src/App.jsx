
import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageDatas'
import ShowUserName from './components/ShowUserName'

function App() {
  const [userName] = useState("Maria");


  return (
    <div className="App">
   
    {/* Imagem em public */}
    <div>
      <img src="/img1.jpg" alt="Paissagem" />
    </div>
    {/* Imagem em asset */}
    <div>
    <img src={City} alt="Cidade" />
    </div>
    <ManageData />
    <ListRender />
    <ConditionalRender />
    <ShowUserName name={userName}/>
    </div>
  )
}

export default App
