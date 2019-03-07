// DEFAULT
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import mainBoxItem from './bodyTabsComponents/mainBoxItem'

// CUSTOM
import './bodyTabs.css'
import ModalDefault from './bodyTabsComponents/bodyTabsBox'
import MainBoxItem from './bodyTabsComponents/mainBoxItem'

import image from './../../../media/images/van_gogh.png'

// JSONs
const bodyTabs = [
    {id: 1, name: 'profile', components: [{}] },
    {id: 2, name: 'tags'},
    {id: 3, name: 'resume'},
    {id: 4, name: 'documents'},
]

const smallSectionElements = [
            {
                elementHeader: 'Current status',
                'Salary base': '50K €',
                'Salary varieble': '0K €',
                'Advantages': '',
                'Location': 'Paris'
            },
            {
                elementHeader: 'Wished status',
                'Salary base': '50K €',
                'Salary varieble': '0K €',
                'Advantages': '',
                'Location': 'Paris'
            },
            {
                elementHeader: 'Languages',
                'Native': 'French',
                'Intermediate': 'English'
            },

        ]

const firstBigItem = [
    {
        // elementHeader: 'Experiences',
        image: image,
        'Position': 'Chief growth Officer',
        'PlaceToHire': 'High Flyers Agency',
        'PlaceLoc': 'Paris Area, France',
    },
    {
        // elementHeader: 'Wished status',
        image: image,
        'Position': 'Chief growth Officer',
        'PlaceToHire': 'High Flyers Agency',
        'PlaceLoc': 'Paris Area, France',
    },
    {
        // elementHeader: 'Languages',
        image: image,
        'Native': 'French',
        'Intermediate': 'English'
    },

]


// TODO - PUT RENDERED ITEMS INSIDE THE <MainBoxItem/>

// FUNCTIONAL COMPONENTS
const BiggerSection = (props) => {
    return (
        <div className="bodyTabs--bigSection">

                {firstBigItem.map((item, index)=>{
                    return (
                        <ModalDefault
                            key={index}
                            item={item}
                        />
                    )
                })}


        </div>
    )
}

const SmallSection = () => {
    return (
        <div className="bodyTabs--smallSection">
            {smallSectionElements.map((item, index)=>{
                return (
                    <ModalDefault
                        key={index}
                        item={item}
                    />
                )
            })}
        </div>
    )
}



// CLASS COMPONENTS
export default class BodyTabs extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tabIndex: 0,
            open: false
        };
    }
    render() {
        return (
            <div className="bodyTabs">
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>

                    <TabList>
                        {bodyTabs.map((item, index) => <Tab key={index}> <p>{item.name}</p></Tab>)}
                    </TabList>

                    {bodyTabs.map((item, index) =>
                        <TabPanel key={index}>
                            <BiggerSection/>
                            <SmallSection/>
                        </TabPanel>
                    )}

                </Tabs>
            </div>
        );
    }
}