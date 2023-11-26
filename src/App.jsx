import { useState, useRef } from 'react'
import styled from 'styled-components'
import { buildBoard, checkGameStatus } from './utils'

export default function App() {
  const boardLength = 4
  const [board, setBoard] = useState(buildBoard(boardLength))
  const [gameStatus, setGameStatus] = useState('')
  const firstPlayer = 'X'
  const secondPlayer = 'O'
  const playerTurn = useRef(firstPlayer)

  const turn = `it's ${playerTurn.current} turn`

  const handleCellOnClick = (rowIndex, cellIndex) => {
    let newBoard = [...board]
    newBoard[rowIndex][cellIndex] = playerTurn.current
    setBoard(newBoard)
    let result = checkGameStatus(board, firstPlayer, secondPlayer)
    if(result) {
      setGameStatus(result)
    }
    playerTurn.current = playerTurn.current === firstPlayer ? secondPlayer : firstPlayer
  }

  const handleNewGame = () => {
    playerTurn.current = firstPlayer
    setBoard(buildBoard(boardLength))
    setGameStatus('')
  }

  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <GameStatus>{gameStatus || turn}</GameStatus>
      <Table>
        <tbody>
          { board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              { row.map((cell, cellIndex) => (
                <td onClick={() => handleCellOnClick(rowIndex, cellIndex)} key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <NewGameButton onClick={handleNewGame}>New Game</NewGameButton>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
`
const GameStatus = styled.h3`
  margin: 10px 0;
`
const NewGameButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
`
const Table = styled.table`
  font-size: 30px;
  cursor: pointer;
  td {
    text-align: center;
    border: 2px solid darkgray;
    width: 56px;
    height: 70px;
  }
`