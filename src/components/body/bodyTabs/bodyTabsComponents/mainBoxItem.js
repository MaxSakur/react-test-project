import React from "react";

const boxData = ['Name','Name2', 'Name3']




const bodyTabs = [
    {id: 1, name: 'profile', components: [{}] },
    {id: 2, name: 'tags'},
    {id: 3, name: 'resume'},
    {id: 4, name: 'documents'},
]

const MAX_ITEMS = 2;

export default class MainBoxItem extends React.Component{
    componentWillMount() {
        this.state = {
            isOpen: false,
        };

        this.items = [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
            'Item 5',
            'Item 6',
        ];
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
            <div>
                {this.getRenderedItems().map((item, id) => (
                    <div key={id}>{item}</div>
                ))}
                <button onClick={this.toggle}>
                    {this.state.isOpen ? 'less' : 'more'}
                </button>
            </div>
        );
    }
}
