import './App.css'
import FirstFloor from './FirstFloor/FirstFloor'
import SecondFloor from './SecondFloor/SecondFloor'
import {useState} from 'react'
import cx from 'classnames'

function App() {
  const [floor, setFloor] = useState('firstFloor')

  const isFirstFloor = floor === 'firstFloor'
  const isSecondFloor = floor === 'secondFloor'

  return (
    <>
      <div className="main">
        <div className="sidebar">
          <h1>Westmore's Mansion</h1>
          <h2 
            className={cx({selected: isFirstFloor})} 
            onClick={() => setFloor('firstFloor')}>
            Primera planta
          </h2>
          <h2 
            className={cx({selected: isSecondFloor})}
            onClick={() => setFloor('secondFloor')}>
            Segunda planta
          </h2>
        </div>
      
        <div className="content">
          {isFirstFloor && <FirstFloor />}
          {isSecondFloor && <SecondFloor />}
        </div>
      </div>
    </>
  )
}

export default App
