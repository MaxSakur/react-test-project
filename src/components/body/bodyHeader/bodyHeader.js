// DEFAULT
import React from 'react';

// CUSTOM
import './bodyHeader.css'

const choosen = {
    name: 'Christopher Smith',
    position: 'UI & UX Design @ Upmitt',
    link: 'https://www.facebook.com/max.kalyakin',

    phone: '06 56 44 31 22',
    personalEmail: 'van_gogh@amsterdam.am',
    corporativeEmail: 'gogh@gmail.com',
    linkedinProfileLink: 'https://www.linkedin.com/in/max-kaliakin-789ba5121/'
}

const BodyHeader = ()=>{
    return (
        <div className="bodyHeader">
            <div className="bodyHeader--leftSize">
                <a href={choosen.link}>Candidates</a>
                <p className="bodyHeader--leftSize-mainText">{choosen.name}</p>
                <p className="bodyHeader--leftSize-position">{choosen.position}</p>
            </div>
            <div className="bodyHeader--rightSize">
                <p className="bodyHeader--rightSize-text text-phone">{choosen.phone} <span className="italic">personal</span></p>
                <p className="bodyHeader--rightSize-text text-mail">{choosen.personalEmail} <span className="italic">personal</span></p>
                <p className="bodyHeader--rightSize-text text-mail">{choosen.corporativeEmail} <span className="italic">professional</span></p>
                <a href="{choosen.linkedinProfileLink}"><p className="bodyHeader--rightSize-text text-linkedin">{choosen.linkedinProfileLink}</p></a>
            </div>
        </div>
    )
}

export default BodyHeader;


