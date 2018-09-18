import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className={'header__text'}>{ this.props.headerText }</h1>
                <div className="btn__add">
                    <p>Add Library</p>
                </div>
            </header>
    );
    }
}
