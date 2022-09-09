import React, { useState } from 'react'
import './App.css'
import Square from './components/Square'


const App = () => {

  const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])
  const [winSquare, setWinSquare] = useState(Math.floor(Math.random() * board.length))
  const [loseSquare, setLoseSquare] = useState(Math.floor(Math.random() * board.length))
  



  
//   console.log("Winning Square: " + winSquare)

  const handleGamePlay = (index) => {
    console.log(index)

//     // alert(index)
    if (index === winSquare) {
      let newBoard = [...board]
      newBoard[winSquare] = "💎"
      setBoard(newBoard)
      alert("You Win")
    } else if(index === loseSquare) {
    let newBoard = [...board]
    newBoard[loseSquare] = "💣"
    setBoard(newBoard)
    alert("You Lose")
}
}
    
  return(
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="boardgame">
        {board.map((value, index) => {
          return (
            <Square value={value} index={index} handleGamePlay={handleGamePlay}/>
          )
        })}
      </div>
    </>
  )
}

  
export default App


