import PropTypes from 'prop-types'
import Avatar from './Avatar'
import CardData from './CardData'
import Skills from './Skills'
const Card = (props) => {
  return (
    <div className='card'>
      <Avatar img={props.image} />
      <CardData
        name={props.name}
        company={props.company}
        location={props.location}
      />
      <div className='card-skills'>
        <h3>Skills</h3>
        <Skills skills={props.skills} />
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
}
export default Card
