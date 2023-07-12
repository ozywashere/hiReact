import PropTypes from 'prop-types'
const CardData = (props) => {
  return (
    <>
      <div className='card-body'>
        <h2 className='card-title'>{props.name}</h2>
        <p className='card-text'>{props.company}</p>
        <p className='card-text'>
          <small className='text-muted'>{props.location}</small>
        </p>
      </div>
    </>
  )
}

CardData.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}
export default CardData
