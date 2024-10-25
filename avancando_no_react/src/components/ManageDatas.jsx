import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(21);
    console.log(number);
    
  return (
    <div>
        <p>valor: {someData}</p>
        <button
            onClick={() => (someData = 15)}
        >
            Mudar valor
        </button>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(23)}>Mudar o state</button>
    </div>
  )
}

export default ManageData