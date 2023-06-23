import { useState } from 'react';
import './App.css';

const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Anecdote = ({anecdote, votes}) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
    
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(()=> 0))
  const [max, setMax] = useState(-1);

  const handleClick = () => {
    setSelected(Math.round(Math.random()*(anecdotes.length-1)))
  }

  const handleVote = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    let index = getMaxVotedIndex(copy)
    setMax(index)
  }

  const getMaxVotedIndex = (arr) => {
    let maxValue = -1;
    let maxValueIndex = 0;
    arr.forEach((item,index) => {
      if (item>maxValue) {
        maxValue = item
        maxValueIndex = index
      }
    });
    return maxValueIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[max]} votes={votes[max]} />
    </div>
  )
}

export default App