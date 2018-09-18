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
    return (
        <div className={'list__item'} key={props.library.id} onClick={() => {

            console.log(props.library.id);

            if(props.listItem.selectedLibraryId === props.library.id) {
                props.selectLibrary(null);
            } else {
                props.selectLibrary(props.library.id)
            }
        }}>
            <div className="list__header">
                <p>{ props.library.title }</p>
            </div>
            { listDescription(props.listItem.expanded, props.library.description) }
            <div className="list__close" onClick={() => props.deleteLibrary(props.library.id)}>
                <p>close</p>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    const listItem = {
        expanded : expanded,
        selectedLibraryId : state.selectedLibraryId
    }
    return { listItem };
};

export default connect(mapStateToProps, actions)(ListItem);
