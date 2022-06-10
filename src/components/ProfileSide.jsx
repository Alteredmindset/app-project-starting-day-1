import React from 'react'
import LogoSearch from './LogoSearch/LogoSearch'
import ProfileCard from './ProfieCard/ProfileCard'
import './profileSide/ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
       <LogoSearch/>
       <ProfileCard/>
    </div>
  )
}

export default ProfileSide