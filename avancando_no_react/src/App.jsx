
import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageDatas'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecutFunction from './components/ExecutFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const [userName] = useState("Maria");

  const cars = [
    {id:1, brand: "Mercedes", color: "Cinza", newCar: true, km: 0},
    {id:2, brand: "Toyota", color: "Verde", newCar: false, km: 300.000},
    {id:3, brand: "ByD", color: "Branco", newCar: true, km: 0}
  ];

  function showMessage(){
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }


  return (
    <div className="App">
   
    {/** Imagem em public */}
    <div>
      <img src="/img1.jpg" alt="Paissagem" />
    </div>
    {/** Imagem em asset */}
    <div>
    <img src={City} alt="Cidade" />
    </div>
    <ManageData />
    <ListRender />
    <ConditionalRender />
    {/** props */}
    <ShowUserName name={userName}/>
    {/** destruturing */}
    <CarDetails brand="VW" Km={100000} color="Branco" newCar={false}/>
    {/** reaproveitando */}
    <CarDetails brand="Ford" Km={0} color="Cinza" newCar={true}/>
    <CarDetails brand="Fiat" Km={4500} color="Preto" newCar={false}/>
    {/** loop em array de objetos */}
    {cars.map((car) =>(
      <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        Km={car.km} 
        newCar={car.newCar}
      />
    ))}
    {/** fragment */}
    <Fragment propFragment="test" />
    {/** children */}
    <Container myValue="testing">
      <p>E este é o conteúdo</p>
    </Container>
      {/**Executar função */}
      <ExecutFunction myFunction = {showMessage} /> 
      {/** state lift */}
      <Message msg={message}/>
      {/** state lift */}
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  )
}

export default App
