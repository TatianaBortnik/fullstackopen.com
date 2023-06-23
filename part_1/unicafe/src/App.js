import { useState } from 'react'
import "./App.css"

const Button = ({text, handler}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
} 

const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    (good+neutral+bad) 
      ?
        (<table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={good+neutral+bad}/>
            <StatisticLine text="average" value={(good-bad)/(good+bad+neutral)}/>
            <StatisticLine text="positive" value={`${good/(good+bad+neutral)*100} %`}/>
          </tbody>
        </table>) 
      : <p>No feedback given</p>
    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const clickHandler = (setState, newValue) => {
    const handler = () => {
      setState(newValue)
    }
    return handler
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={clickHandler(setGood, good+1)} />
      <Button text="neutral" handler={clickHandler(setNeutral, neutral+1)} />
      <Button text="bad" handler={clickHandler(setBad, bad+1)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App