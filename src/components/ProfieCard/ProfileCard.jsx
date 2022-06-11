import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.JPG'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt=''/>
            <img src={Profile} alt=''/>
        </div>

        <div className="ProfileName">
          <span>Luxi Chi</span>
          <span>Senior Creative Director</span>
        </div>


        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>9,696</span>
              <span>Following</span>
            </div>
            <div className='vL'></div>
            <div className="follow">
              <span>9</span>
              <span>Followers</span>
            </div>
          </div>
          <hr />
        </div>
        <span>MY Profile</span>
    </div>
  )
}

export default ProfileCard