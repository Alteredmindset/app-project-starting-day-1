import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModel'

const InfoCard = () => {

    const [modalOpened , setModalOpen] = useState(false)
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>your Info</h4>
            <div>
                 <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpen(true)}/>
                 <ProfileModal modalOpened={modalOpened}
                 setModalOpen={setModalOpen}
                 />

            </div>
           
        </div>

        <div className="info">
            <span>
                <b>Status </b>
                <span>In Relationship</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Lives in</b>
                <span> Canada</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Works at</b>
                <span> RuggMobile</span>
            </span>
        </div>
        <button className='button logout-button'>Log Out</button>
    </div>
  )
}

export default InfoCard