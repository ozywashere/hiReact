import PropTypes from 'prop-types'
const Avatar = (props) => {
  return (
    <>
      <img
        src={props.img}
        className='card-img'
        alt='Mark Zuckerberg'
        height={300}
      />
    </>
  )
}

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
}

export default Avatar
