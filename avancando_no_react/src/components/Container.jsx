import PropTypes from 'prop-types';

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        {myValue}
    </div>
  )
}

Container.propTypes = {
    children: PropTypes.string.isRequired,
    myValue: PropTypes.string.isRequired,
  };
export default Container