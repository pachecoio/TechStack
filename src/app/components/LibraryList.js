import React, {Component} from 'react';
import { connect } from 'react-redux';
import ListItem from "./ListItem";

// export class LibraryList extends Component {
//   render() {
//       console.log(this.props);
//     return (
//         <p>library list</p>
//     );
//   }
// }


const LibraryList = (props) => {
    return (
        <div className={'list'}>
            { props.libraries.map((library) => {
                return (
                    <ListItem key={library.id} library={ library } />
                )
            }) }
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    // console.log(state);

    return state;
};

export default (connect(mapStateToProps))(LibraryList);
