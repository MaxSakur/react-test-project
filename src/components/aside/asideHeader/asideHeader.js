// DEFAULT
import React from "react";

// CUSTOM
import image from './../../../media/images/van_gogh.png'
import './asideHeaderStyles.css'

const profile = {
    name: 'Vincent Van Gogh',
    email: 'van_gogh@amsterdam.am'
}

const asideHeader = () => {
    return (
        <div className="asideHeader">
            <div className="asideHeader--iconWrapper">
                <img className="asideHeader--iconWrapper-icon" src={image} alt="asideHeaderIcon"/>
            </div>
            <div className="asideHeader--textWrapper">
                <p className="asideHeader--textWrapper-name">{profile.name}</p>
                <p className="asideHeader--textWrapper-email">{profile.email}</p>
            </div>

        </div>
    )
}

export default asideHeader;