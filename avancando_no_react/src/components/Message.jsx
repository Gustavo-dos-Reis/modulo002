import PropTypes from 'prop-types';


const Message = ({msg}) => {
  return (
    <div>A messagem é: {msg}</div>
  )
}

Message.propTypes = {
    msg: PropTypes.string.isRequired,
  };
export default Message;