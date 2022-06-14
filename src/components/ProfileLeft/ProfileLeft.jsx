import React from 'react'
import Followerscard from '../FollowersCard/Followerscard'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <Followerscard/>

    </div>
  )
}

export default ProfileLeft