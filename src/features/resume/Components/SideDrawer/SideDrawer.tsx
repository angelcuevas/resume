import React from 'react'
import ProfilePic from '../PersonalData/ProfilePic'
import SocialMediaLinks from '../PersonalData/SocialMediaLinks'
import Navbar from './components/Navbar'

const SideDrawer = () => {
  return (<div style={{position:'relative', height:'100%', textAlign:'center'}}>
    <ProfilePic />
    <Navbar/>
    <SocialMediaLinks />
  </div>)

}

export default SideDrawer