import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const listDescription = (isExpanded, description) => {
    if (isExpanded) {
        return (
            <div className={ 'list__description' }>
                <p>{ description }</p>
            </div>
        )
    }
}

const ListItem = (props) => {
    console.log(props);
    return (
        <div className={'list__item'} key={props.library.id} onClick={() => {
            props.selectLibrary(props.library.id)
        }}>
            <div className="list__header">
                <p>{ props.library.title }</p>
            </div>
            { listDescription(props.expanded, props.library.description) }
            <div className="list__close" onClick={() => props.deleteLibrary(props.library.id)}>
                <p>close</p>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
