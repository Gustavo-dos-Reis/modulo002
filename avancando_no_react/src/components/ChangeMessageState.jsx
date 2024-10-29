import PropTypes from 'prop-types';


const ChangeMessageState = ({handleMessage}) => {
    const messages = ["oi", "olá", "oi, tudo bem?"]

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

ChangeMessageState.propTypes = {
    handleMessage: PropTypes.func.isRequired,
  };

export default ChangeMessageState