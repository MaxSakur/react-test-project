// DEFAULT
import React, { Component } from 'react';

// CUSTOM
import './body.css'
import BodyTabs from './bodyTabs/BodyTabs'
import BodyHeader from './bodyHeader/bodyHeader'


export default class Body extends Component {
    render() {
        return (
            <main>
                <BodyHeader/>
                <BodyTabs/>
                
            </main>);
    }
}