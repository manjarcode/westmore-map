import { useState } from 'react'
import firstFloorSvg from '../assets/FirstFloor/FirstFloor.svg'
import hideHallSvg from '../assets/FirstFloor/HideHall.svg'
import hideKitchenSvg from '../assets/FirstFloor/HideKitchen.svg'
import hideGuestRoomSvg from '../assets/FirstFloor/HideGuestRoom.svg'
import hideGuestRoomToiletSvg from '../assets/FirstFloor/HideGuestRoomToilet.svg'
import hideStairsSvg from '../assets/FirstFloor/HideStairs.svg'
import hideGuestToiletSvg from '../assets/FirstFloor/HideGuestToilet.svg'
import hidePrivateHallSvg from '../assets/FirstFloor/HideInternalHall.svg'
import hidePrivateToiletSvg from '../assets/FirstFloor/HideInternalToilet.svg'
import hidePantrySvg from '../assets/FirstFloor/HidePantry.svg'
import hideServiceRoom1Svg from '../assets/FirstFloor/HideServiceRoom1.svg'
import hideServiceRoom2Svg from '../assets/FirstFloor/HideServiceRoom2.svg'
import hideServiceRoom3Svg from '../assets/FirstFloor/HideServiceRoom3.svg'
import hideServiceRoom4Svg from '../assets/FirstFloor/HideServiceRoom4.svg'
import hideLibrarySvg from '../assets/FirstFloor/HideLibrary.svg'
import hidePrivateLivingSvg from '../assets/FirstFloor/HidePrivateLiving.svg'
import hideTowerPorcheSvg from '../assets/FirstFloor/HideTowerPorche.svg'

import './FirstFloor.css'

export default function FirstFloor() {
  const [hideHall, setHideHall] = useState(true)
  const [hideKitchen, setHideKitchen] = useState(true)
  const [hideGuestRoom, setHideGuestRoom] = useState(true)
  const [hideGuestRoomToilet, setHideGuestRoomToilet] = useState(true)
  const [hideStairs, setHideStairs] = useState(true)
  const [hideGuestToilet, setHideGuestToilet] = useState(true)
  const [hidePrivateHall, setHidePrivateHall] = useState(true)
  const [hidePrivateToilet, setHidePrivateToilet] = useState(true)
  const [hidePantry, setHidePantry] = useState(true)
  const [hideServiceRoom1, setHideServiceRoom1] = useState(true)
  const [hideServiceRoom2, setHideServiceRoom2] = useState(true)
  const [hideServiceRoom3, setHideServiceRoom3] = useState(true)
  const [hideServiceRoom4, setHideServiceRoom4] = useState(true)
  const [hideLibrary, setHideLibrary] = useState(true)
  const [hidePrivateLiving, setHidePrivateLiving] = useState(true)
  const [hideTowerPorche, setHideTowerPorche] = useState(true)
  
  const toogle = setter => () => {
    setter( value => !value)
  }
  
  return (
      <div className="floor">
        <img id="firstFloor" src={firstFloorSvg} alt="First Floor" />
        {hideHall && <img 
          id="hideHall" 
          src={hideHallSvg} 
          alt="Hide Entrance" 
          onClick={toogle(setHideHall)} />}
        {hideKitchen && <img
          id="hideKitchen"
          src={hideKitchenSvg}
          alt="Hide Kitchen"
          onClick={toogle(setHideKitchen)} />}
        {hideGuestRoom && <img
          id="hideGuestRoom"
          src={hideGuestRoomSvg}
          alt="Hide Guest Room"
          onClick={toogle(setHideGuestRoom)} />}
        {hideGuestRoomToilet && <img
          id="hideGuestRoomToilet"
          src={hideGuestRoomToiletSvg}
          alt="Hide Guest Room Toilet"
          onClick={toogle(setHideGuestRoomToilet)} />}
        {hideStairs && <img
          id="hideStairs"
          src={hideStairsSvg}
          alt="Hide Stairs"
          onClick={toogle(setHideStairs)} />}
        {hideGuestToilet && <img
          id="hideGuestToilet"
          src={hideGuestToiletSvg}
          alt="Hide Guest Toilet"
          onClick={toogle(setHideGuestToilet)} />}
        {hidePrivateToilet && <img
          id="hidePrivateToilet"
          src={hidePrivateToiletSvg}
          alt="Hide Internal Toilet"
          onClick={toogle(setHidePrivateToilet)} />}
        {hidePrivateHall && <img
          id="hidePrivateHall"
          src={hidePrivateHallSvg}
          alt="Hide Internal Hall"
          onClick={toogle(setHidePrivateHall)} />}
        {hidePantry && <img
          id="hidePantry"
          src={hidePantrySvg}
          alt="Hide Pantry"
          onClick={toogle(setHidePantry)} />}
        {hideServiceRoom1 && <img
          id="hideServiceRoom1"
          src={hideServiceRoom1Svg}
          alt="Hide Service Room 1"
          onClick={toogle(setHideServiceRoom1)} />}
        {hideServiceRoom2 && <img
          id="hideServiceRoom2"
          src={hideServiceRoom2Svg}
          alt="Hide Service Room 2"
          onClick={toogle(setHideServiceRoom2)} />}
        {hideServiceRoom3 && <img
          id="hideServiceRoom3"
          src={hideServiceRoom3Svg}
          alt="Hide Service Room 3"
          onClick={toogle(setHideServiceRoom3)} />}
        {hideServiceRoom4 && <img
          id="hideServiceRoom4"
          src={hideServiceRoom4Svg}
          alt="Hide Service Room 4"
          onClick={toogle(setHideServiceRoom4)} />}
        {hideLibrary && <img
          id="hideLibrary"
          src={hideLibrarySvg}
          alt="Hide Library"
          onClick={toogle(setHideLibrary)} />}
        {hideTowerPorche && <img
          id="hideTowerPorche"
          src={hideTowerPorcheSvg}
          alt="Hide Tower Porche"
          onClick={toogle(setHideTowerPorche)} />}
        {hidePrivateLiving && <img
          id="hidePrivateLiving"
          src={hidePrivateLivingSvg}
          alt="Hide Private Living"
          onClick={toogle(setHidePrivateLiving)} />}
      </div>
  )
}