import PropTypes from 'prop-types'
const Skills = (props) => {
  return (
    <>
      <ul className='skill-list'>
        <li>
          <span
            className='skill'
            style={{ backgroundColor: props.skills[0].color }}
          >
            {props.skills[0].name} <strong>{props.skills[0].level}%</strong>
          </span>
        </li>
        <li>
          <span
            className='skill'
            style={{ backgroundColor: props.skills[1].color }}
          >
            {props.skills[1].name} <strong>{props.skills[1].level}%</strong>
          </span>
        </li>
        <li>
          <span
            className='skill'
            style={{ backgroundColor: props.skills[2].color }}
          >
            {props.skills[2].name} <strong>{props.skills[2].level}%</strong>
          </span>
        </li>
        <li>
          <span
            className='skill'
            style={{ backgroundColor: props.skills[3].color }}
          >
            {props.skills[3].name} <strong>{props.skills[3].level}%</strong>
          </span>
        </li>
        <li>
          <span
            className='skill'
            style={{ backgroundColor: props.skills[4].color }}
          >
            {props.skills[4].name} <strong>{props.skills[4].level}%</strong>
          </span>
        </li>
        <li>
          <span
            className='skill'
            style={{ backgroundColor: props.skills[5].color }}
          >
            {props.skills[5].name} <strong>{props.skills[5].level}%</strong>
          </span>
        </li>
      </ul>
    </>
  )
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
}

export default Skills
