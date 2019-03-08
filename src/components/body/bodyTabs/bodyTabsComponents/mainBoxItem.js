import React from "react";

const MAX_ITEMS = 2;

export default class MainBoxItem extends React.Component{
    componentWillMount() {
        this.state = {
            isOpen: false,
        };

        this.items = this.props.children;
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    getRenderedItems() {
        if (this.state.isOpen) {
            return this.items;
        }
        return this.items.slice(0, MAX_ITEMS);
    }

    render() {
        return(
            <div className="modal-dialog bodyTabs--bigSection-item">
                <div className="modal-content bordered">
                    <div className="modal-header">
                        <h2>{this.props.themeName}</h2>
                    </div>
                
                    {this.getRenderedItems().map((item, id) => (
                        <div key={id}>{item}</div>
                    ))}

                    <button className="hide-button" onClick={this.toggle}>
                        <p>{this.state.isOpen ? `Hide ${this.items.length - MAX_ITEMS} `  : `Show ${this.items.length - MAX_ITEMS} more`}</p>
                        <img src="" ></img>
                    </button>
                </div>
            </div>
        );
    }
}
