import { useState } from 'react'
import secondFloorSvg from '../assets/SecondFloor/SecondFloor.svg'
import hideRobertStudySvg from '../assets/SecondFloor/HideRobertStudy.svg'
import hideRobertChamberSvg from '../assets/SecondFloor/HideRobertChamber.svg'
import hideRobertToiletSvg from '../assets/SecondFloor/HideRobertToilet.svg'
import hideMollyHallSvg from '../assets/SecondFloor/HideMollyHall.svg'
import hideMollyDressingSvg from '../assets/SecondFloor/HideMollyDressing.svg'
import hideMollyChamberSvg from '../assets/SecondFloor/HideMollyChamber.svg'
import hidePartnerGuestRoomSvg from '../assets/SecondFloor/HidePartnerGuestRoom.svg'
import hideFamilyGuestRoomHallSvg from '../assets/SecondFloor/HideFamilyGuestRoomHall.svg'
import hideFamilyGuestRoom1Svg from '../assets/SecondFloor/HideFamilyGuestRoom1.svg'
import hideFamilyGuestRoom2Svg from '../assets/SecondFloor/HideFamilyGuestRoom2.svg'
import hidePartnerGuestRoom2Svg from '../assets/SecondFloor/HidePartnerGuestRoom2.svg'
import hideFamilyToiletSvg from '../assets/SecondFloor/HideFamilyToilet.svg'
import hideFamilyHallSvg from '../assets/SecondFloor/HideFamilyHall.svg'
import hideSarahRoomSvg from '../assets/SecondFloor/HideSarahRoom.svg'
import hideRemusRoomSvg from '../assets/SecondFloor/HideRemusRoom.svg'
import hideDanRoomSvg from '../assets/SecondFloor/HideDanRoom.svg'

import './SecondFloor.css'

export default function SecondFloor() {
  const [hideRobertStudy, setHideRobertStudy] = useState(true)
  const [hideRobertChamber, setHideRobertChamber] = useState(true)
  const [hideRobertToilet, setHideRobertToilet] = useState(true)
  const [hideMollyHall, setHideMollyHall] = useState(true)
  const [hideMollyDressing, setHideMollyDressing] = useState(true)
  const [hideMollyChamber, setHideMollyChamber] = useState(true)
  const [hidePartnerGuestRoom, setHidePartnerGuestRoom] = useState(true)
  const [hideFamilyGuestRoomHall, setHideFamilyGuestRoomHall] = useState(true)
  const [hideFamilyGuestRoom1, setHideFamilyGuestRoom1] = useState(true)
  const [hideFamilyGuestRoom2, setHideFamilyGuestRoom2] = useState(true)
  const [hidePartnerGuestRoom2, setHidePartnerGuestRoom2] = useState(true)
  const [hideFamilyToilet, setHideFamilyToilet] = useState(true)
  const [hideFamilyHall, setHideFamilyHall] = useState(true)
  const [hideSarahRoom, setHideSarahRoom] = useState(true)
  const [hideRemusRoom, setHideRemusRoom] = useState(true)
  const [hideDanRoom, setHideDanRoom] = useState(true)

  const toogle = setter => () => {
    setter( value => !value)
  }

  return (
      <div className="floor"> 
        <img id="firstFloor" src={secondFloorSvg} alt="First Floor" />
        {hideRobertStudy && <img
          id="hideRobertStudy"
          src={hideRobertStudySvg}
          alt="Hide Robert Study"
          onClick={toogle(setHideRobertStudy)} />}
        {hideRobertChamber && <img
          id="hideRobertChamber"
          src={hideRobertChamberSvg}
          alt="Hide Robert Chamber"
          onClick={toogle(setHideRobertChamber)} />}
        {hideRobertToilet && <img
          id="hideRobertToilet"
          src={hideRobertToiletSvg}
          alt="Hide Robert Toilet"
          onClick={toogle(setHideRobertToilet)} />}
        {hideMollyHall && <img
          id="hideMollyHall"
          src={hideMollyHallSvg}
          alt="Hide Molly Hall"
          onClick={toogle(setHideMollyHall)} />}
        {hideMollyDressing && <img
          id="hideMollyDressing"
          src={hideMollyDressingSvg}
          alt="Hide Molly Dressing"
          onClick={toogle(setHideMollyDressing)} />}
        {hideMollyChamber && <img
          id="hideMollyChamber"
          src={hideMollyChamberSvg}
          alt="Hide Molly Chamber"
          onClick={toogle(setHideMollyChamber)} />}
        {hidePartnerGuestRoom && <img
          id="hidePartnerGuestRoom"
          src={hidePartnerGuestRoomSvg}
          alt="Hide Partner Guest Room"
          onClick={toogle(setHidePartnerGuestRoom)} />}
        {hideFamilyGuestRoomHall && <img
          id="hideFamilyGuestRoomHall"
          src={hideFamilyGuestRoomHallSvg}
          alt="Hide Family Guest Room Hall"
          onClick={toogle(setHideFamilyGuestRoomHall)} />}
        {hideFamilyGuestRoom1 && <img
          id="hideFamilyGuestRoom1"
          src={hideFamilyGuestRoom1Svg}
          alt="Hide Family Guest Room 1"
          onClick={toogle(setHideFamilyGuestRoom1)} />}
        {hideFamilyGuestRoom2 && <img 
          id="hideFamilyGuestRoom2" 
          src={hideFamilyGuestRoom2Svg} 
          alt="Hide Family Guest Room 2" 
          onClick={toogle(setHideFamilyGuestRoom2)} />}
        {hidePartnerGuestRoom2 && <img  
          id="hidePartnerGuestRoom2" 
          src={hidePartnerGuestRoom2Svg} 
          alt="Hide Partner Guest Room 2" 
          onClick={toogle(setHidePartnerGuestRoom2)} />}
        {hideFamilyToilet && <img
          id="hideFamilyToilet"
          src={hideFamilyToiletSvg}
          alt="Hide Family Toilet"
          onClick={toogle(setHideFamilyToilet)} />}
        {hideFamilyHall && <img
          id="hideFamilyHall"
          src={hideFamilyHallSvg}
          alt="Hide Family Hall"
          onClick={toogle(setHideFamilyHall)} />}
        {hideSarahRoom && <img
          id="hideSarahRoom"
          src={hideSarahRoomSvg}
          alt="Hide Sarah Room"
          onClick={toogle(setHideSarahRoom)} />}
        {hideRemusRoom && <img
          id="hideRemusRoom"
          src={hideRemusRoomSvg}
          alt="Hide Remus Room"
          onClick={toogle(setHideRemusRoom)} />}
        {hideDanRoom && <img
          id="hideDanRoom"
          src={hideDanRoomSvg}
          alt="Hide Dan Room"
          onClick={toogle(setHideDanRoom)} />}
      </div>
  )
}