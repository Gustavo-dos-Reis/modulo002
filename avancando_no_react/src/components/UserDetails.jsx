import PropTypes from "prop-types"

const UserDetails = ({name, age, profession}) => {
  return (
    <div>
        <h2>Auto escola</h2>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profession}</li>
        </ul>
        {age >= 18 ?(
            <p>Pode tirar a carteira!</p>
        ): (
            <p>Não pode tirar a carteira!</p>
        )}
        {/*abilitado && <p>Pode ter carteira!</p>
        !abilitado && <p>Não pode ter carteira!</p>}*/}
    </div>
  )
}

UserDetails.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    profession: PropTypes.string.isRequired,
  }

export default UserDetails