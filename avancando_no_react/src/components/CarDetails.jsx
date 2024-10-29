import PropTypes from "prop-types"

const CarDetails = ({brand, Km, color, newCar}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {Km}</li>
        <li>Cor: {color}</li>
      </ul> 
      {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

CarDetails.propTypes = {
  brand: PropTypes.string.isRequire,
  Km: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  newCar: PropTypes.bool
}

export default CarDetails