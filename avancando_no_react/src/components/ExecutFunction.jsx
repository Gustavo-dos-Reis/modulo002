import PropTypes from 'prop-types';

const ExecutFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique para executar a função</button>
    </div>
  )
}

ExecutFunction.propTypes = {
    myFunction: PropTypes.string.isRequired,
  };

export default ExecutFunction