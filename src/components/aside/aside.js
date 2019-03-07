//  DEFAULT
import React from 'react'

//  CUSTOM
import './aside.css';

import AsideHeader from './asideHeader/asideHeader'
import AsideBody from './asideBody/asideBody'

const Aside = () => {
    return (

        <aside>
            <AsideHeader />
            <AsideBody />
        </aside>
    )
}

export default Aside;