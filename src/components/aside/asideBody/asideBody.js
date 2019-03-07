import React from "react";

import './asideBodyStyles.css'
import image from './../../../media/images/logo.png'
import image2 from './../../../media/images/logo2.png'

const mainSettingsList = [
    {id: 1, name: 'сandidates'},
    {id: 2, name: 'companies'},
    {id: 3, name: 'contacts'},
    {id: 4, name: 'missions'}
]


const otherSettingsList = [
    {id: 1, name: 'users'},
    {id: 2, name: 'imports'}
]



export default class AsideBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {addClass: 0}
    }

    toggle=(index) =>{
        this.setState({addClass: index});
    }

    render() {
        return <div className="asideBody">
            <ul className="asideBody--mainSettings">
                {mainSettingsList.map((item, index) =>
                    <li className="asideBody--mainSettings-item " key={item.id}>
                        <p className={this.state.addClass === index ? 'active' : null} onClick={()=>this.toggle(index)}>
                            {item.name}
                        </p>
                    </li>
                )}
            </ul>

            <div className="asideBody--otherSettings">
                {otherSettingsList.map((item) =>
                    <li className="asideBody--mainSettings-item " key={item.id}>
                        <p className="asideBody--otherSettings-text disabled">{item.name}</p>
                    </li>
                )}
            </div>
            <div className="asideBody--footer">
                <img className="asideBody--footer-image" src={image} alt=""/>
                <img className="asideBody--footer-image2" src={image2} alt=""/>
            </div>

        </div>
    }
}
