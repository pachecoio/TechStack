import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className={'header__text'}>{ this.props.headerText }</h1>
            </header>
    );
    }
}
