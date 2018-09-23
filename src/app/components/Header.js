import React, {Component} from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

    renderHeaderContent() {

        if(this.props.openMenu) {
            return (
                <div className={ 'header__content' }>
                    <div className="header__close" onClick={ () => this.props.openHeaderMenu(true) }>
                        <span className="header__close--bar"/>
                        <span className="header__close--bar"/>
                    </div>
                    <ul className="header__list">
                        <li className="header__list--item"><Link to={'/'}>Home</Link></li>
                        <li className="header__list--item"><Link to={'/chart'}>Charts</Link></li>
                    </ul>
                </div>
            )
        }

    }

    render() {
        return (
            <header className="header">
                <div className="header__menu" onClick={() => this.props.openHeaderMenu(false)}>
                    <span className="header__menu--bar"/>
                    <span className="header__menu--bar"/>
                    <span className="header__menu--bar"/>
                </div>
                <h1 className={'header__text'}>{ this.props.headerText }</h1>
                { this.renderHeaderContent() }
            </header>
    );
    }
}

let isMenuOpen = false;

const mapStateToProps = (state, ownProps) => {
    return state;
};

export default connect(mapStateToProps, actions)(Header);
