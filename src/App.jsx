import Card from './Card'
const user = {
  avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
  name: 'Mark Zuckerberg',
  company: 'Facebook',
  location: 'Palo Alto, California',
  skills: [
    {
      name: 'JavaScript',
      level: '60',
      color: '#f0db4f',
    },
    {
      name: 'React',
      level: '70',
      color: '#61dbfb',
    },
    {
      name: 'Node',
      level: '80',
      color: '#8cc84b',
    },
    {
      name: 'MongoDB',
      level: '50',
      color: '#589636',
    },
    {
      name: 'Python',
      level: '40',
      color: '#f9c646',
    },
    {
      name: 'C++',
      level: '30',
      color: '#f34b7d',
    },
  ],
}
function App() {
  return (
    <div className='app'>
      <Card
        skills={user.skills}
        image={user.avatar}
        name={user.name}
        company={user.company}
        location={user.location}
      />
    </div>
  )
}

export default App
