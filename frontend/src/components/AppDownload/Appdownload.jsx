import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
export const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Batter Experiences Download <br />Tomato App</p>
        <div className="App-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload