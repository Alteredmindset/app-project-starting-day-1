import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import ProfileCard from '../../components/ProfieCard/ProfileCard'
import Followerscard from '../FollowersCard/Followerscard'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
       <LogoSearch/>
       <ProfileCard/>
       <Followerscard/>
    </div>
  )
}

export default ProfileSide