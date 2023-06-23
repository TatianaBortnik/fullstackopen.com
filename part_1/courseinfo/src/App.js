const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({course}) => {
  return(
    <div>
      {course.parts.map((item, index) => {
        return (
          <Part key={index} part={item} /> 
        )
      })}
    </div>
  )
}

const Total = ({course}) => {
  const exercises = course.parts.map(item => item.exercises);
  return (
    <p>Number of exercises {exercises.reduce((prev,curr) => prev + curr, 0)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default App